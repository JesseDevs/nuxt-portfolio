import { defineStore } from 'pinia';

export const useProjectStore = defineStore('projectStore', function () {
	let projects = [
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
						link: 'https://jessedevs.net/_projects/legends/',
						image: '/projects/legends.png',
						p: [
							'The <em>‘Legends’</em> project showcases the initial ideas for approaching a CMS. It is a static data project that uses JSON, a standard lightweight data interchange format that is easy to read and write in the industry.',
							'Since static data is never changing, this project can only render the data onto a page. If any user wants to change the data, they would need to access the JSON file directly in the project. This enables a web page to be generated quickly as the server does not need to query a database for every page load.',
						],
					},
					{
						title: 'Fighters',
						git: 'https://github.com/JesseDevs/pe-projects/tree/main/_projects/fighters-crud/',
						link: 'https://jessedevs.net/_projects/fighters-crud/',
						image: '/projects/fighters.png',
						p: [
							'The <em>‘Fighters’</em> project is the next level up. It is a lean PHP CRUD (create, read, update, and delete) project that enables users to create their own list of fighters according to their preferences.',
							"Besides displaying the items on the frontend, there is also a form on the website that accepts a POST request on the backend to push the user's inputted data into the JSON index file. The user can then choose to delete the created item or update it if there are any mistakes.",
						],
					},
					{
						title: 'Music: WP',
						git: 'https://github.com/JesseDevs/pe-projects/tree/main/_projects/music-wordpress/',
						p: [
							'Some people consider WordPress the pinnacle of CMSs as it powers about 40% of all websites on the internet. In my <em>‘Music: WordPress’</em> project, I gained a proper idea of why that is. The admin panel allows you to manage backend data with various plugins, making it efficient and simple for users and creators to maintain the overall quality.',
							'Advanced Custom Fields (ACF) is an excellent plugin that enables the addition of custom content to our system. I discovered that creating many modules and themes can generate a quick workflow to output production-ready websites in a flash.',
						],
					},
					{
						title: 'Dunkin',
						git: 'https://github.com/JesseDevs/super-shot',
						link: 'https://calm-super-shot.surge.sh/',
						image: '/projects/dunkin.png',
						p: [
							'In my <em>‘Dunkin’ Donuts: Vue App’</em>, I utilized Firebase, which is not a CMS but a NoSQL cloud database that offers various ways to manage aspects of a web application. To build this type of data, I made an HTTP request to the Firebase API connected to my project. It works very similarly to a giant JSON file that can hold many lists filled with many objects that are easily accessed by database features.',
						],
					},
				],
			},
		},
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
					"<span class='first-words'>Javascript is</span> the most widely used programming language and has become a vital tool for developers. Although it is primarily a frontend language, there have been evolutions to make backends like Node and entire Frameworks on which projects can run. This timeline demonstrates the scaling of ideas and the process of understanding what is needed to make a website properly.",
				],
				files: [
					{
						title: 'Workout App',
						git: 'https://github.com/JesseDevs/pe-projects/tree/main/_projects/workout-app//',
						link: 'https://jessedevs.net/_projects/workout-app/',
						image: '/projects/workout.png',
						p: [
							'My <em>‘Workout APP’</em> took a simple interface from the forms and created more than just a short answer for the user. I often have to remember the main body focus for my workout and the types of sets needed. This app is a simple way to create short lists of workouts dedicated to the muscle group. It was built using local storage and JavaScript class methods to generate app functionality, while using imports and exports to create templates for each page.',
						],
					},
					{
						title: 'Bill Split App',
						git: 'https://github.com/JesseDevs/pe-projects/tree/main/_projects/bill-app/',
						link: 'https://jessedevs.net/_projects/bill-app/',
						image: '/projects/bill.png',
						p: [
							'The <em>‘Bill Split APP’</em> was inspired by a night out with friends and the effort it took to even divide the bill. It has an interface with more personality and functionality. I used similar routing in Vanilla JavaScript to create multiple page templates.',
						],
					},
					{
						title: 'Dunkin',
						git: 'https://github.com/JesseDevs/super-shot',
						link: 'https://calm-super-shot.surge.sh/',
						image: '/projects/dunkin.png',
						p: [
							'My <em>‘Dunkin’ Donuts: Vue App’</em> is built using Vue 3, a JavaScript framework used for building user interfaces. The latest version of Vue is a versatile framework that uses stores to pass variables and data to multiple components, meaning it can be used for small one-page sites to large multi-page projects. Reactive and computed variables give me the flexibility to work with live variables. To go along with this, I used Firebase to provide a database for users, products, and their items.',
						],
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
					'<span class="first-words">Design is</span> an essential part of building a visually appealing and user-friendly website. Creating proper modules and layouts can make your website stand out and increase engagement with your audience. Modules are reusable components that can be used throughout your website to ensure consistency and improve the user experience.',
				],
				files: [
					{
						title: 'Garden',
						link: 'https://jessedevs.net/?page=layouts',
						git: 'https://github.com/JesseDevs/pe-projects/tree/main/css/layouts',
						image: '/projects/garden.png',
						p: [
							'In the ‘Layouts’ tab, you can check out some layout designs. This page is a metaphor for a garden because, just like in a garden, you need to continue watering your skills to create a beautiful piece of art. These layouts originate from images that were then crafted into templates that can be reused with different data.',
						],
					},
					{
						title: 'Theme Challenge',
						link: 'https://jessedevs.net/_projects/theme-challenge/',
						git: 'https://github.com/JesseDevs/pe-projects/tree/main/_projects/theme-challenge',
						image: '/projects/theme.png',
						p: [
							'The ‘Theme’ project was created with the intent of using a standard template and shaping it to match an industry standard. The idea was to be able to take influences from a well-known site in a specific category and using that to shape our template. To make the project stand out, I had to be able to capture the professional style and imply skill through my design.',
						],
					},
					{
						title: 'Wireframe',
						link: 'https://jessedevs.net/_projects/wireframe/',
						git: 'https://github.com/JesseDevs/pe-projects/tree/main/_projects/wireframe',
						image: '/projects/wireframe.png',
						p: [
							'A wireframe is the skeleton of a website. It is commonly used to provide structure and generate layout ideas for a product during its development. This design project aimed to showcase the ability to turn a wireframe into a presentable project with reusable components. The entire project began as a ‘Figma’ file, which I used as a guideline to turn the concept into reality. There were moments when I discovered that some components needed to be adjusted to better capture the overall product, which varied from the concept design.',
						],
					},
				],
			},
		},
	];

	return {
		projects,
	};
});
