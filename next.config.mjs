import UnoCSS from "@unocss/webpack";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.plugins.push(
            UnoCSS(),
        );
        config.cache = false;
        return config;
    }
};

export default nextConfig;
