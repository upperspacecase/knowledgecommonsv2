"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PropertyProfile } from "@/lib/types";
import { getAllPassports } from "@/store/passports";
import { useLocale } from "@/components/ui/LocaleProvider";

const GOAL = 15;

export default function DashboardPage() {
  const { t } = useLocale();
  const [passports, setPassports] = useState<PropertyProfile[]>([]);

  useEffect(() => {
    setPassports(getAllPassports());
  }, []);

  const count = passports.length;
  const progressPercent = Math.min((count / GOAL) * 100, 100);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-stone-800">
          {t("dashboardTitle")}
        </h1>
        <p className="text-stone-600">{t("dashboardSubtitle")}</p>
      </div>

      {/* Progress toward 15 */}
      <div className="bg-white border border-stone-200 rounded-lg p-6 space-y-4">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-4xl font-bold text-stone-800">{count}</p>
            <p className="text-sm text-stone-500">{t("dashboardCount")}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-stone-500">
              {count} {t("dashboardGoal")}
            </p>
          </div>
        </div>
        <div className="w-full bg-stone-200 rounded-full h-3">
          <div
            className="bg-green-700 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-stone-400">
          <span>0</span>
          <span>5</span>
          <span>10</span>
          <span>15</span>
        </div>
      </div>

      {/* Passport list */}
      {passports.length === 0 ? (
        <div className="text-center py-12 space-y-4">
          <p className="text-stone-500">{t("dashboardEmpty")}</p>
          <Link
            href="/onboarding"
            className="inline-block bg-green-800 text-white px-6 py-2.5 rounded-md hover:bg-green-900 transition-colors text-sm font-medium"
          >
            {t("dashboardCreate")}
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {passports.map((p) => (
            <Link
              key={p.id}
              href={`/passport/${p.id}`}
              className="block bg-white border border-stone-200 rounded-lg p-4 hover:border-stone-300 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="font-medium text-stone-800 group-hover:text-green-800 transition-colors">
                    {p.name || "Unnamed property"}
                  </h3>
                  <p className="text-sm text-stone-500">
                    {p.ownerName && `${p.ownerName} · `}
                    {p.areaHectares > 0 && `${p.areaHectares} ha · `}
                    {new Date(p.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-sm font-medium text-stone-800">
                      {p.completionPercentage}%
                    </p>
                    <p className="text-xs text-stone-400">complete</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-stone-200 flex items-center justify-center">
                    <svg
                      viewBox="0 0 36 36"
                      className="w-10 h-10 -rotate-90"
                    >
                      <circle
                        cx="18"
                        cy="18"
                        r="15.5"
                        fill="none"
                        stroke="#e7e5e4"
                        strokeWidth="3"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="15.5"
                        fill="none"
                        stroke="#15803d"
                        strokeWidth="3"
                        strokeDasharray={`${p.completionPercentage} ${100 - p.completionPercentage}`}
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <Link
            href="/onboarding"
            className="block border-2 border-dashed border-stone-300 rounded-lg p-4 text-center text-stone-500 hover:border-green-700 hover:text-green-800 transition-colors"
          >
            + {t("dashboardCreate")}
          </Link>
        </div>
      )}
    </div>
  );
}
