/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 86400,
    unoptimized: false,
    deviceSizes: [480, 768, 1024, 1280, 1600],

    //  اجازه لود عکس از FTP
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ftp.granddesign.ir",
        pathname: "/**",
      },
   
    ],
  },

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["swiper", "framer-motion"],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
