import type { NextConfig } from 'next';
import { PHASE_PRODUCTION_BUILD } from 'next/constants';

export default function nextConfig(phase: string): NextConfig {
  const isProductionBuild = phase === PHASE_PRODUCTION_BUILD;

  return {
    ...(isProductionBuild ? { output: 'export' as const } : {}),
    trailingSlash: true,

    images: {
      unoptimized: true,
    },
  };
}