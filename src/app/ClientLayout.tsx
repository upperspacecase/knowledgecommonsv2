"use client";

import { ReactNode } from "react";
import { LocaleProvider } from "@/components/ui/LocaleProvider";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </LocaleProvider>
  );
}
