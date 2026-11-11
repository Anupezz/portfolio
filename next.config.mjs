/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // required for static exports using Next Image
  },
};

export default nextConfig;