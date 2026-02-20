"use client";

import Link from "next/link";
import { useLocale } from "./LocaleProvider";

export default function Header() {
  const { locale, setLocale, t } = useLocale();

  return (
    <header className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-semibold text-stone-800 group-hover:text-green-800 transition-colors">
            {t("siteName")}
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/dashboard"
            className="text-stone-600 hover:text-stone-900 transition-colors"
          >
            {t("navDashboard")}
          </Link>
          <Link
            href="/onboarding"
            className="bg-green-800 text-white px-4 py-1.5 rounded-md hover:bg-green-900 transition-colors"
          >
            {t("navNewPassport")}
          </Link>
          <button
            onClick={() => setLocale(locale === "en" ? "pt" : "en")}
            className="text-stone-500 hover:text-stone-800 border border-stone-300 px-2 py-1 rounded text-xs font-medium transition-colors"
          >
            {t("languageToggle")}
          </button>
        </nav>
      </div>
    </header>
  );
}
