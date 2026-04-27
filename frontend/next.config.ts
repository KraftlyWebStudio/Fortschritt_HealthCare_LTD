import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Fix for workspace root detection
  // @ts-ignore
  turbopack: {
    root: path.resolve(__dirname, "../../"),
  },
};

export default nextConfig;
