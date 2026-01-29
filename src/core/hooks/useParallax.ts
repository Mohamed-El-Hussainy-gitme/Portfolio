"use client";

import { RefObject } from 'react';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

export interface UseParallaxOptions {
  ref: RefObject<HTMLElement | null>;
  distance?: number;
}

export interface UseParallaxResult {
  parallaxY: MotionValue<number>;
}

export function useParallax({
  ref,
  distance = 80
}: UseParallaxOptions): UseParallaxResult {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 20%']
  });

  let effectiveDistance = distance;

  if (typeof window !== 'undefined' && window.matchMedia) {
    const prefersReduced = window
      .matchMedia('(prefers-reduced-motion: reduce)')
      .matches;
    if (prefersReduced) {
      effectiveDistance = 0;
    }
  }

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [-effectiveDistance, effectiveDistance]
  );

  return { parallaxY };
}
