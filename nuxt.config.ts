// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	pages: true,
	devtools: { enabled: false },
	modules: [
		'nuxt-icon',
		'@pinia/nuxt',
		'@vueuse/motion/nuxt',
		'@nuxt/image-edge',
		'@nuxtjs/color-mode',
	],
	vue: {
		compilerOptions: {
			// treat all tags with a dash as custom elements
			isCustomElement: (tag) => tag.includes('-'),
		},
	},
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
			title: 'Portfolio',

			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					hid: 'og-desc',
					property: 'og:description',
					content:
						'Welcome to my personal site! Take a look around and find something to peak your interest.. or mine.',
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: 'JesseDevs | Personal Site',
				},
				{
					hid: 'og-image',
					property: 'og:image',
					content: '/green.jpg',
				},
				{
					name: 'keywords',
					content:
						'Nuxt.js, Vue.js, Porfolio, web development, Javascript, front-end',
				},
				{
					name: 'twitter:card',
					content: 'icon.jpg',
				},
				{ hid: 'og-type', property: 'og:type', content: 'website' },

				{
					hid: 'og:url',
					property: 'og:url',
					content: `https://jessedevs.net`,
				},
				{ hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
				{
					property: 'og:locale',
					content: 'en_US',
				},
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
		},
	},
	css: ['~/assets/css/globals.css'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/assets/css/styles.scss" as *;',
				},
			},
		},
	},
	colorMode: {
		preference: 'system', // default value of $colorMode.preference
		fallback: 'dark', // fallback value if not system preference found
		hid: 'nuxt-color-mode-script',
		globalName: '__NUXT_COLOR_MODE__',
		componentName: 'ColorScheme',
		classPrefix: '',
		classSuffix: '-mode',
		storageKey: 'nuxt-color-mode',
	},

	components: true,
	pinia: {
		autoImports: ['defineStore'],
	},
	imports: {
		dirs: ['./stores'],
	},
});
