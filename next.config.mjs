import Unocss from "@unocss/webpack";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.plugins.push(
            Unocss(),
        );
        config.cache = false;
        return config;
    }
};

export default nextConfig;
