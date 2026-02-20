"use client";

import { ReactNode } from "react";

interface ChapterShellProps {
  title: string;
  description: string;
  children: ReactNode;
  chapterNumber: number;
  totalChapters: number;
}

export default function ChapterShell({
  title,
  description,
  children,
  chapterNumber,
  totalChapters,
}: ChapterShellProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-widest text-stone-400 font-medium">
          Chapter {chapterNumber} of {totalChapters}
        </p>
        <h2 className="text-2xl font-semibold text-stone-800">{title}</h2>
        <p className="text-stone-600 leading-relaxed max-w-2xl">{description}</p>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
