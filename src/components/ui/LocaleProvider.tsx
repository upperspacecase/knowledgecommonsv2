"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { Locale, StringKey, t } from "@/i18n/strings";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: StringKey) => string;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  setLocale: () => {},
  t: (key) => t("en", key),
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") {
      document.documentElement.lang = l;
    }
  }, []);

  const translate = useCallback(
    (key: StringKey) => t(locale, key),
    [locale]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: translate }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
