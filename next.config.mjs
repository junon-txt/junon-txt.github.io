/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.ya?ml$/,
            use: 'js-yaml-loader',
        });
        return config;
    },
};

export default nextConfig; 