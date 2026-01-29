"use client";

import { useEffect, useState } from "react";

interface ScrollProgressState {
  activeId: string | null;
  progress: number;
}

export const useScrollProgress = (
  sectionIds: string[]
): ScrollProgressState => {
  const [state, setState] = useState<ScrollProgressState>({
    activeId: null,
    progress: 0,
  });

  useEffect(() => {
    if (!sectionIds.length) return;

    const handle = () => {
      const doc = document.documentElement;
      const scrollY = window.scrollY;
      const viewportH = window.innerHeight;
      const maxScrollable = doc.scrollHeight - viewportH;
      const progress =
        maxScrollable > 0 ? Math.min(scrollY / maxScrollable, 1) : 0;

      const header = document.querySelector("header");
      const headerOffset =
        header instanceof HTMLElement ? header.offsetHeight + 12 : 80;

      let current: string | null = null;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const top = rect.top - headerOffset;
        const bottom = rect.bottom - headerOffset;

        // السكشن الحالي هو الذي مرّ رأسه أعلى الهيدر ومازال جزء منه ظاهر
        if (top <= 0 && bottom > 0) {
          current = id;
          break;
        }
      }

      setState({ activeId: current, progress });
    };

    handle();
    window.addEventListener("scroll", handle);
    window.addEventListener("resize", handle);

    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, [sectionIds.join("|")]);

  return state;
};
