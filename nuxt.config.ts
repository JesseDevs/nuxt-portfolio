// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	pages: true,
	devtools: { enabled: false },
	modules: ['nuxt-icon', '@pinia/nuxt', '@vueuse/motion/nuxt', '@nuxt/image-edge'],
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
					name: 'keywords',
					content: 'Nuxt.js, Vue.js, Porfolio, web development, Javascript, front-end',
				},
				{
					name: 'twitter:card',
					content: 'c.png',
				},
				{
					property: 'og:image',
					content: 'c.png',
				},
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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

	components: true,
});
