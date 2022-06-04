/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["cdn.chec.io"],
	},
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
};

module.exports = nextConfig;
