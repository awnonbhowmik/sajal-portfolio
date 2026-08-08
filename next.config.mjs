/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep the fallback webpack build single-process in restricted CI/container environments.
  experimental: {
    webpackBuildWorker: false,
    useTypeScriptCli: false,
  },
  // `npm run build` runs the native TypeScript 7 CLI first. Next's embedded
  // checker still expects the TypeScript 6 programmatic API during the 7.0 transition.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
