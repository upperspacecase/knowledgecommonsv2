"use client";

import { useEffect, useRef, useState } from "react";
import { PropertyBoundary } from "@/lib/types";
import { useLocale } from "@/components/ui/LocaleProvider";

interface PropertyMapProps {
  boundary: PropertyBoundary | null;
  onBoundaryChange?: (boundary: PropertyBoundary, areaHectares: number) => void;
  editable?: boolean;
  center?: [number, number];
  zoom?: number;
  height?: string;
}

export default function PropertyMap({
  boundary,
  onBoundaryChange,
  editable = false,
  center = [37.8, -8.7], // Default: Odemira, Portugal
  zoom = 13,
  height = "400px",
}: PropertyMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    let cancelled = false;

    async function initMap() {
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");

      if (cancelled || !mapRef.current) return;

      const map = L.map(mapRef.current).setView(center, zoom);
      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      // Display existing boundary
      if (boundary && boundary.coordinates.length > 0) {
        const latlngs = boundary.coordinates[0].map(
          ([lng, lat]) => [lat, lng] as [number, number]
        );
        const polygon = L.polygon(latlngs, {
          color: "#166534",
          fillColor: "#22c55e",
          fillOpacity: 0.2,
          weight: 2,
        }).addTo(map);
        map.fitBounds(polygon.getBounds(), { padding: [20, 20] });
      }

      // Editable: allow drawing a polygon by clicking
      if (editable && onBoundaryChange) {
        const points: L.LatLng[] = [];
        const markers: L.CircleMarker[] = [];
        let polygon: L.Polygon | null = null;

        function updatePolygon() {
          if (polygon) {
            map.removeLayer(polygon);
          }
          if (points.length >= 3) {
            polygon = L.polygon(points, {
              color: "#166534",
              fillColor: "#22c55e",
              fillOpacity: 0.2,
              weight: 2,
            }).addTo(map);

            // Calculate area using simple geodesic estimation
            const coords = points.map((p) => [p.lng, p.lat] as [number, number]);
            coords.push(coords[0]); // Close the ring

            // Use Turf for area calculation
            import("@turf/turf").then((turf) => {
              const turfPolygon = turf.polygon([coords]);
              const areaM2 = turf.area(turfPolygon);
              const areaHa = areaM2 / 10000;

              const propertyBoundary: PropertyBoundary = {
                type: "Polygon",
                coordinates: [coords],
              };
              onBoundaryChange!(propertyBoundary, Math.round(areaHa * 100) / 100);
            });
          }
        }

        map.on("click", (e: L.LeafletMouseEvent) => {
          const point = e.latlng;

          // Check if clicking near the first point to close
          if (points.length >= 3) {
            const first = points[0];
            const dist = map.distance(point, first);
            if (dist < 50) {
              updatePolygon();
              return;
            }
          }

          points.push(point);
          const marker = L.circleMarker(point, {
            radius: 5,
            color: "#166534",
            fillColor: "#fff",
            fillOpacity: 1,
            weight: 2,
          }).addTo(map);
          markers.push(marker);

          updatePolygon();
        });

        // Double-click to finish
        map.on("dblclick", (e: L.LeafletMouseEvent) => {
          L.DomEvent.stopPropagation(e);
          if (points.length >= 3) {
            updatePolygon();
          }
        });

        map.doubleClickZoom.disable();
      }

      setIsLoaded(true);
    }

    initMap();

    return () => {
      cancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative rounded-lg overflow-hidden border border-stone-200">
      <div ref={mapRef} style={{ height, width: "100%" }} />
      {!isLoaded && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-stone-100"
          style={{ height }}
        >
          <p className="text-stone-500 text-sm">Loading map...</p>
        </div>
      )}
      {editable && isLoaded && (
        <div className="absolute bottom-3 left-3 z-[1000] bg-white/90 backdrop-blur-sm rounded px-3 py-2 text-xs text-stone-600 shadow">
          {t("chapterBoundaryHint")}
        </div>
      )}
    </div>
  );
}
