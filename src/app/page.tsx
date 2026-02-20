"use client";

import Link from "next/link";
import { useLocale } from "@/components/ui/LocaleProvider";

export default function HomePage() {
  const { t } = useLocale();

  return (
    <div>
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-4 py-20 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-800 leading-tight">
          {t("heroTitle")}
        </h1>
        <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
          {t("heroSubtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Link
            href="/onboarding"
            className="bg-green-800 text-white px-8 py-3 rounded-md hover:bg-green-900 transition-colors font-medium"
          >
            {t("heroAction")}
          </Link>
        </div>
      </section>

      {/* Fire hook */}
      <section className="max-w-2xl mx-auto px-4 pb-16">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center space-y-2">
          <h2 className="text-xl font-semibold text-amber-900">
            {t("heroFireHook")}
          </h2>
          <p className="text-sm text-amber-800 leading-relaxed">
            {t("heroFireHookSub")}
          </p>
          <Link
            href="/onboarding"
            className="inline-block mt-3 text-sm font-medium text-amber-900 underline underline-offset-4 hover:text-amber-700"
          >
            {t("heroAction")} &rarr;
          </Link>
        </div>
      </section>

      {/* Value props */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-semibold text-stone-800 text-center mb-10">
          {t("valueTitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: t("value1Title"), desc: t("value1Desc") },
            { title: t("value2Title"), desc: t("value2Desc") },
            { title: t("value3Title"), desc: t("value3Desc") },
            { title: t("value4Title"), desc: t("value4Desc") },
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-lg font-medium text-stone-800">
                {item.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
