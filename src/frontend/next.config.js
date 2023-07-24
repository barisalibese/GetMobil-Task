/** @type {import('next').NextConfig} */
const nextConfig = {
        experimental: {
            serverActions: true,
        },
    env: {
        ClientID: process.env.ClientID,
        ClientSecret: process.env.ClientSecret,
        GrantType: process.env.GrantType
    },
}
module.exports = nextConfig
