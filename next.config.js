/** @type {import('next').NextConfig} */
var path = require("path");
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: `@import "variables.scss";`
    },
    experimental: {
        outputStandalone: true,
        images: {
            layoutRaw: true,
        }
    }
}

module.exports = nextConfig
