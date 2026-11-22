/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: '/:path*', headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ] }, { source: '/admin/:path*', headers: [
      { key: 'Cache-Control', value: 'private, no-store' },
      { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
    ] }, { source: '/api/admin/:path*', headers: [
      { key: 'Cache-Control', value: 'private, no-store' },
    ] }, {
      source: "/cv.pdf",
      headers: [
        { key: "Content-Type", value: "application/pdf" },
        { key: "Content-Disposition", value: 'inline; filename="Nahin_Intesher_CV.pdf"' },
      ],
    }, {
      source: "/research.pdf",
      headers: [
        { key: "Content-Type", value: "application/pdf" },
        { key: "Content-Disposition", value: 'inline; filename="Nahin_Intesher_Research.pdf"' },
      ],
    }, {
      source: "/research.pdf",
      has: [{ type: "query", key: "download", value: "1" }],
      headers: [
        { key: "Content-Disposition", value: 'attachment; filename="Nahin_Intesher_Research.pdf"' },
      ],
    }];
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};
export default nextConfig;
