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
		'@kevinmarrec/nuxt-pwa',
	],
	vue: {
		compilerOptions: {
			// treat all tags with a dash as custom elements
			isCustomElement: (tag) => tag.includes('-'),
		},
	},
	app: {
		head: {
			title: 'Nuxt Portfolio',

			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					name: 'description',
					content:
						'Welcome to my personal site! Take a look around and find something to peak your interest.. or mine.',
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content:
						'Welcome to my personal site! Take a look around and find something to peak your interest.. or mine.',
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: 'JesseDevs | Nuxt Personal Site',
				},
				{
					name: 'keywords',
					content:
						'Nuxt.js, Vue.js, Porfolio, web development, Javascript, front-end',
				},
				{
					name: 'twitter:card',
					content: 'c.jpg',
				},
				{
					property: 'og:image',
					content: 'https://jessedevs.net/c.jpg',
				},
				{
					property: 'og:image:width',
					content: '88',
				},
				{
					property: 'og:image:height',
					content: '88',
				},
				{
					property: 'og:image:type',
					content: 'image/jpg',
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: `https://jessedevs.net`,
				},
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
