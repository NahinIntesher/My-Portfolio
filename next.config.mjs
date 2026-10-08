/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [{
      source: "/cv.pdf",
      headers: [
        { key: "Content-Type", value: "application/pdf" },
        { key: "Content-Disposition", value: 'inline; filename="Nahin_Intesher_CV.pdf"' },
      ],
    }];
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};
export default nextConfig;