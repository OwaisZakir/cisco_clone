/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Needed for <Image> tag in static builds
    },
};

export default nextConfig;
