"use client";

import { useLocale } from "./LocaleProvider";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-stone-200 bg-stone-50 mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-stone-500">
        <p>{t("footerText")}</p>
        <p className="mt-1 text-stone-400">{t("footerMilestone")}</p>
      </div>
    </footer>
  );
}
