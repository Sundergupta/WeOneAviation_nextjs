/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false,
  },

  images: {
    // Serve modern formats automatically (avif ~40% smaller than webp)
    formats: ['image/avif', 'image/webp'],

    // Common mobile/tablet/desktop breakpoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],

    // For fixed-size images like logos
    imageSizes: [16, 32, 64, 96, 128, 256],

    // Cache optimized images for 60 days
    minimumCacheTTL: 60 * 60 * 24 * 60,
  },

  // Compress all responses
  compress: true,

  // Remove X-Powered-By header
  poweredByHeader: false,
};

export default nextConfig;  // ✅ kept as ES module (your original used export default)