import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/duas/dua's-importance?cat=1",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
