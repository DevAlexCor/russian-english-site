import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  basePath: "/russian-english-site",
  images: { unoptimized: true },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
