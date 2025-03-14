/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // For local images, place them in the /public folder
    // and reference them without domains configuration
    // e.g., <Image src="/images/your-image.jpg" ... />
    domains: ['img.freepik.com', 'images.unsplash.com', 'image.shutterstock.com'],
  },
}

module.exports = nextConfig