import { createRequire } from "module";
const require = createRequire(import.meta.url);

let userConfig = {};
try {
  userConfig = require("./v0-user-next.config.js"); // Use require() instead of await import()
} catch (e) {
  console.warn("User config not found, using default settings.");
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Helps with debugging
  output: "standalone", // Ensures public files are served correctly
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Useful for static deployments
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

// ✅ Safer way to merge configs without mutating objects
const mergedConfig = { ...nextConfig, ...userConfig };

export default mergedConfig;
