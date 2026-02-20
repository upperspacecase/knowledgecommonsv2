"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { PropertyProfile } from "@/lib/types";
import { getPassport } from "@/store/passports";
import PassportView from "@/components/passport/PassportView";
import Link from "next/link";

export default function PassportPage() {
  const params = useParams();
  const id = params.id as string;
  const [profile, setProfile] = useState<PropertyProfile | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const p = getPassport(id);
    if (p) {
      setProfile(p);
    } else {
      setNotFound(true);
    }
  }, [id]);

  if (notFound) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-semibold text-stone-800">
          Passport not found
        </h1>
        <p className="text-stone-600">
          This Land Passport may have been created on a different device.
        </p>
        <Link
          href="/dashboard"
          className="inline-block mt-4 text-sm font-medium text-green-800 underline underline-offset-4"
        >
          View all passports &rarr;
        </Link>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center text-stone-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="px-4 py-10">
      <PassportView profile={profile} />
    </div>
  );
}
