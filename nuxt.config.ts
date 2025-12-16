// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },

	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/i18n",
		"@nuxt/fonts",
		"@nuxt/icon",
		"@vueuse/motion/nuxt",
	],

	i18n: {
		baseUrl: "http://localhost:3000",
		locales: [
			{
				code: "en",
				iso: "en-US",
				language: "en-US",
				name: "English",
				file: "en.json",
			},
			{
				code: "id",
				iso: "id-ID",
				language: "id-ID",
				name: "Indonesia",
				file: "id.json",
			},
		],
		langDir: "locales",
		defaultLocale: "en",
		strategy: "prefix",
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: "i18n_redirected",
			redirectOn: "root",
		},
	},

	fonts: {
		families: [
			{ name: "Satoshi", provider: "fontshare" },
			{ name: "Inter", provider: "google" },
		],
	},

	app: {
		head: {
			title: "Dely Labs - The Future of Digital Tools",
			meta: [
				{
					name: "description",
					content:
						"Simple tools: big productivity. Building the invisible architecture for your daily workflow.",
				},
				{ name: "theme-color", content: "#0F172A" },
			],
			link: [{ rel: "icon", type: "image/webp", href: "/dely-labs.webp" }],
		},
	},
});
