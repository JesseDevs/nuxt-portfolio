import { defineStore } from 'pinia';

export const useProjectStore = defineStore('projectStore', function () {
	let projects = [
		{
			slug: 'interfaces',
			title: 'Javascript Interfaces',
			imgSrc: '/project-imgs/layout-image.jpg',
			oneLiner: 'Organized and Productive',
			tech: [''],
			isActive: false,
			description:
				'Small websites interactions to full scale interactive projects. Making button clicks work and moving screens slide.',
			modalContent: {
				overview: [
					'This timeline demonstrates the scaling of ideas and the process of prioritizing user interactions. It showcases how far JavaScript can go...',
				],
				files: [
					{
						title: 'Form Interactions',
						git: 'https://github.com/JesseDevs/nuxt-portfolio/blob/main/pages/forms.vue',
						link: '/forms',
						image: '/projects/forms.jpg',
						p: 'Simple user interactions. Using forms to generate immediate feedback. Challenges were adapted from the ‘Exercises for Programmers’ book.',
						tech: ['HTML', 'CSS', 'Javascript', 'Vue'],
					},
					{
						title: 'Bill Split App',
						git: 'https://github.com/JesseDevs/bill-split',
						link: 'https://bill-splitmate.vercel.app/',
						image: '/projects/bill.webp',
						p: [
							'Crafting a fully functional interface with personality, designed for repeated use to streamline the user‘s experience. Need to split the bill?',
						],
						tech: ['HTML', 'CSS', 'Javascript', 'Vue'],
					},
					{
						title: 'Dunkin',
						git: 'https://github.com/JesseDevs/super-shot',
						link: 'https://calm-super-shot.surge.sh/',
						image: '/projects/dunkin.webp',
						p: [
							'Constructing a robust and dynamic ecommerce platform. Leveraging the scalability and real-time capabilities of Firebase for seamless data management. Inspired by Dunkin Donuts.',
						],
						tech: ['HTML', 'CSS', 'Javascript', 'Vue', 'Firebase', 'Shopify'],
					},
					{
						title: 'SecondWave',
						git: 'https://github.com/JesseDevs/second-wave',
						link: 'https://second-wave.vercel.app/',
						image: '/projects/wave.webp',
						p: [
							'Crafting a cutting-edge web application to elevate ecommerce to new heights, our focus is on user experience excellence at every level. We aim to deliver a seamless journey for users while ensuring our platform is primed for future growth and design enhancements.',
						],
						tech: [
							'HTML',
							'CSS',
							'Javascript',
							'Vue',
							'NUXT',
							'Supabase',
							'Prisma',
						],
					},
					{
						title: 'ECHO: The Blog Site',
						git: 'https://github.com/JesseDevs/blog-app',
						link: 'https://echo-waves.vercel.app/',
						image: '/projects/echo.jpg',
						p: [
							'Introducing my passion project: a cutting-edge web application that serves as a fully scalable blog site. This platform empowers users to tailor their experience to their liking, drawing inspiration from the user-friendly interfaces of Twitter, Instagram, and Tumblr.',
						],
						tech: ['HTML', 'CSS', 'Javascript', 'Vue', 'NUXT', 'Supabase'],
						star: true,
					},
				],
			},
		},
		{
			slug: 'systems',
			title: 'Management Systems',
			imgSrc: '/project-imgs/cms-image.jpg',
			oneLiner: 'Simplify Management',
			tech: [''],
			isActive: false,
			description:
				'From lean files to big databases, a timeline of scaling projects to handle ever growing complexities.',
			modalContent: {
				overview: [
					"<span class='first-words'>The internet</span> is made up of lists and boxes. The architecture behind these elements keeps all the important data under control. In its simplest form, a Content Management System (CMS) is a list of objects containing all the necessary materials needed to present information to the user.",
				],
				files: [
					{
						title: 'Legends',
						git: 'https://github.com/JesseDevs/pe-projects/tree/main/_projects/legends',
						link: 'https://peprojects.dev/alpha-4/jesse/_projects/legends/',
						image: '/projects/legends.webp',
						p: ['Showcasing a simple collection of data for the user.'],
						tech: ['HTML', 'CSS', 'PHP'],
					},
					{
						title: 'Fighters',
						git: 'https://github.com/JesseDevs/pe-projects/tree/main/_projects/fighters-crud/',
						link: 'https://peprojects.dev/alpha-4/jesse/_projects/fighters-crud/',
						image: '/projects/fighters.webp',
						p: [
							'Crafting an extra dimension to the collection of data. Offering CRUD capabilities for seamless data management. Embracing purposeful design to elevate user experience',
						],
						tech: ['HTML', 'CSS', 'Javascript', 'PHP'],
					},
					{
						title: 'SecondWave',
						git: 'https://github.com/JesseDevs/second-wave',
						link: 'https://second-wave.vercel.app/',
						image: '/projects/wave.webp',
						p: [
							'Crafting a cutting-edge web application to elevate ecommerce to new heights, our focus is on user experience excellence at every level. We aim to deliver a seamless journey for users while ensuring our platform is primed for future growth and design enhancements.',
						],
						tech: [
							'HTML',
							'CSS',
							'Javascript',
							'Vue',
							'NUXT',
							'Supabase',
							'Prisma',
						],
					},
					{
						title: 'ECHO: The Blog Site',
						git: 'https://github.com/JesseDevs/blog-app',
						link: 'https://echo-waves.vercel.app/',
						image: '/projects/echo.jpg',
						p: [
							'Introducing my passion project: a cutting-edge web application that serves as a fully scalable blog site. This platform empowers users to tailor their experience to their liking, drawing inspiration from the user-friendly interfaces of Twitter, Instagram, and Tumblr.',
						],
						tech: ['HTML', 'CSS', 'Javascript', 'Vue', 'NUXT', 'Supabase'],
						star: true,
					},
				],
			},
		},
		{
			slug: 'design-garden',
			title: 'Layout Garden',
			imgSrc: '/project-imgs/testing-image.jpg',
			oneLiner: 'Design',
			tech: [''],
			isActive: false,
			description:
				'A collection of responsive layouts. Building out the internet is complicated... so let’s start a module at a time.',
			modalContent: {
				overview: [
					'Design is an essential part of building a visually appealing and user-friendly website. Creating proper modules and layouts can make your website stand out and increase engagement with your audience. Modules are reusable components that can be used throughout your website to ensure consistency and improve the user experience.',
				],
				files: [
					// {
					// 	title: 'Garden',
					// 	link: 'https://jessedevs.net/?page=layouts',
					// 	git: 'https://github.com/JesseDevs/pe-projects/tree/main/css/layouts',
					// 	image: '/projects/garden.webp',
					// 	p: [
					// 		'In the ‘Layouts’ tab, you can check out some layout designs. This page is a metaphor for a garden because, just like in a garden, you need to continue watering your skills to create a beautiful piece of art. These layouts originate from images that were then crafted into templates that can be reused with different data.',
					// 	],
					// },
					{
						title: 'Theme Challenge',
						link: 'https://peprojects.dev/alpha-4/jesse/_projects/theme-challenge/',
						git: 'https://github.com/JesseDevs/pe-projects/tree/main/_projects/theme-challenge',
						image: '/projects/theme.webp',
						p: [
							'Capturing the essence of a reputable website’s design involves more than just replicating its visual elements. It requires understanding the principles that underpin its credibility and appeal.  The essence of design.',
						],
						tech: ['HTML', 'CSS', 'PHP'],
					},
					{
						title: 'Wireframe',
						link: 'https://peprojects.dev/alpha-4/jesse/_projects/wireframe/',
						git: 'https://github.com/JesseDevs/pe-projects/tree/main/_projects/wireframe',
						image: '/projects/wireframe.webp',
						p: [
							'Converting a Figma design into a responsive website. Turning static visuals into an interactive, responsive layout. Creating modular components helps build a consistent design and makes it easier to reuse elements across different parts of the website.',
						],
						tech: ['HTML', 'CSS', 'PHP', 'Figma'],
					},
					{
						title: 'SecondWave',
						git: 'https://github.com/JesseDevs/second-wave',
						link: 'https://second-wave.vercel.app/',
						image: '/projects/wave.webp',
						p: [
							'Crafting a cutting-edge web application to elevate ecommerce to new heights, our focus is on user experience excellence at every level. We aim to deliver a seamless journey for users while ensuring our platform is primed for future growth and design enhancements.',
						],
						tech: [
							'HTML',
							'CSS',
							'Javascript',
							'Vue',
							'NUXT',
							'Supabase',
							'Prisma',
						],
					},
					{
						title: 'ECHO: The Blog Site',
						git: 'https://github.com/JesseDevs/blog-app',
						link: 'https://echo-waves.vercel.app/',
						image: '/projects/echo.jpg',
						p: [
							'Introducing my passion project: a cutting-edge web application that serves as a fully scalable blog site. This platform empowers users to tailor their experience to their liking, drawing inspiration from the user-friendly interfaces of Twitter, Instagram, and Tumblr.',
						],
						tech: ['HTML', 'CSS', 'Javascript', 'Vue', 'NUXT', 'Supabase'],
						star: true,
					},
				],
			},
		},
	];

	return {
		projects,
	};
});
