import { defineStore } from 'pinia';

export const useProjectStore = defineStore('projectStore', function () {
	const projects = [
		{
			title: 'Management Systems',
			imgSrc: 'project-imgs/cms-image.jpg',
			oneLiner: 'Simplify Management',
			code: 'https://www.github.com',
			projectLink: 'https://www.youtube.com/watch?v=4xDzrJKXOOY',
			tech: ['Flutter', 'MUI', 'Python', 'FastAPI'],
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
						image: 'images/projects/legends.png',
						p: 'The <em>‘Legends’</em> project showcases the initial ideas for approaching a CMS. It is a static data project that uses JSON, a standard lightweight data interchange format that is easy to read and write in the industry. Since static data is never changing, this project can only render the data onto a page. If any user wants to change the data, they would need to access the JSON file directly in the project. This enables a web page to be generated quickly as the server does not need to query a database for every page load.',
					},
					{
						title: 'Fighters',
						git: 'https://github.com/JesseDevs/pe-projects/tree/main/_projects/fighters-crud/',
						link: 'https://jessedevs.net/_projects/fighters-crud/',
						image: 'images/projects/fighters.png',
						p: "The <em>‘Fighters’</em> project is the next level up. It is a lean PHP CRUD (create, read, update, and delete) project that enables users to create their own list of fighters according to their preferences. Besides displaying the items on the frontend, there is also a form on the website that accepts a POST request on the backend to push the user's inputted data into the JSON index file. The user can then choose to delete the created item or update it if there are any mistakes.",
					},
					{
						title: 'Music: Wordpress',
						git: 'https://github.com/JesseDevs/pe-projects/tree/main/_projects/music-wordpress/',
						p: 'Some people consider WordPress the pinnacle of CMSs as it powers about 40% of all websites on the internet. In my <em>‘Music: WordPress’</em> project, I gained a proper idea of why that is. The admin panel allows you to manage backend data with various plugins, making it efficient and simple for users and creators to maintain the overall quality. Advanced Custom Fields (ACF) is an excellent plugin that enables the addition of custom content to our system. I discovered that creating many modules and themes can generate a quick workflow to output production-ready websites in a flash.',
					},
					{
						title: 'Dunkin',
						git: 'https://github.com/JesseDevs/super-shot',
						link: 'https://calm-super-shot.surge.sh/',
						image: 'images/projects/dunkin.png',
						p: 'In my <em>‘Dunkin’ Donuts: Vue App’</em>, I utilized Firebase, which is not a CMS but a NoSQL cloud database that offers various ways to manage aspects of a web application. To build this type of data, I made an HTTP request to the Firebase API connected to my project. It works very similarly to a giant JSON file that can hold many lists filled with many objects that are easily accessed by database features.',
					},
				],
			},
		},
		{
			title: 'Management Systems',
			imgSrc: 'project-imgs/cms-image.jpg',
			oneLiner: 'Simplify Management',
			code: 'https://www.github.com',
			projectLink: 'https://www.youtube.com/watch?v=4xDzrJKXOOY',
			tech: ['Flutter', 'MUI', 'Python', 'FastAPI'],
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
						image: 'images/projects/legends.png',
						p: 'The <em>‘Legends’</em> project showcases the initial ideas for approaching a CMS. It is a static data project that uses JSON, a standard lightweight data interchange format that is easy to read and write in the industry. Since static data is never changing, this project can only render the data onto a page. If any user wants to change the data, they would need to access the JSON file directly in the project. This enables a web page to be generated quickly as the server does not need to query a database for every page load.',
					},
					{
						title: 'Fighters',
						git: 'https://github.com/JesseDevs/pe-projects/tree/main/_projects/fighters-crud/',
						link: 'https://jessedevs.net/_projects/fighters-crud/',
						image: 'images/projects/fighters.png',
						p: "The <em>‘Fighters’</em> project is the next level up. It is a lean PHP CRUD (create, read, update, and delete) project that enables users to create their own list of fighters according to their preferences. Besides displaying the items on the frontend, there is also a form on the website that accepts a POST request on the backend to push the user's inputted data into the JSON index file. The user can then choose to delete the created item or update it if there are any mistakes.",
					},
					{
						title: 'Music: Wordpress',
						git: 'https://github.com/JesseDevs/pe-projects/tree/main/_projects/music-wordpress/',
						p: 'Some people consider WordPress the pinnacle of CMSs as it powers about 40% of all websites on the internet. In my <em>‘Music: WordPress’</em> project, I gained a proper idea of why that is. The admin panel allows you to manage backend data with various plugins, making it efficient and simple for users and creators to maintain the overall quality. Advanced Custom Fields (ACF) is an excellent plugin that enables the addition of custom content to our system. I discovered that creating many modules and themes can generate a quick workflow to output production-ready websites in a flash.',
					},
					{
						title: 'Dunkin',
						git: 'https://github.com/JesseDevs/super-shot',
						link: 'https://calm-super-shot.surge.sh/',
						image: 'images/projects/dunkin.png',
						p: 'In my <em>‘Dunkin’ Donuts: Vue App’</em>, I utilized Firebase, which is not a CMS but a NoSQL cloud database that offers various ways to manage aspects of a web application. To build this type of data, I made an HTTP request to the Firebase API connected to my project. It works very similarly to a giant JSON file that can hold many lists filled with many objects that are easily accessed by database features.',
					},
				],
			},
		},
		{
			title: 'Management Systems',
			imgSrc: 'project-imgs/cms-image.jpg',
			oneLiner: 'Simplify Management',
			code: 'https://www.github.com',
			projectLink: 'https://www.youtube.com/watch?v=4xDzrJKXOOY',
			tech: ['Flutter', 'MUI', 'Python', 'FastAPI'],
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
						image: 'images/projects/legends.png',
						p: 'The <em>‘Legends’</em> project showcases the initial ideas for approaching a CMS. It is a static data project that uses JSON, a standard lightweight data interchange format that is easy to read and write in the industry. Since static data is never changing, this project can only render the data onto a page. If any user wants to change the data, they would need to access the JSON file directly in the project. This enables a web page to be generated quickly as the server does not need to query a database for every page load.',
					},
					{
						title: 'Fighters',
						git: 'https://github.com/JesseDevs/pe-projects/tree/main/_projects/fighters-crud/',
						link: 'https://jessedevs.net/_projects/fighters-crud/',
						image: 'images/projects/fighters.png',
						p: "The <em>‘Fighters’</em> project is the next level up. It is a lean PHP CRUD (create, read, update, and delete) project that enables users to create their own list of fighters according to their preferences. Besides displaying the items on the frontend, there is also a form on the website that accepts a POST request on the backend to push the user's inputted data into the JSON index file. The user can then choose to delete the created item or update it if there are any mistakes.",
					},
					{
						title: 'Music: Wordpress',
						git: 'https://github.com/JesseDevs/pe-projects/tree/main/_projects/music-wordpress/',
						p: 'Some people consider WordPress the pinnacle of CMSs as it powers about 40% of all websites on the internet. In my <em>‘Music: WordPress’</em> project, I gained a proper idea of why that is. The admin panel allows you to manage backend data with various plugins, making it efficient and simple for users and creators to maintain the overall quality. Advanced Custom Fields (ACF) is an excellent plugin that enables the addition of custom content to our system. I discovered that creating many modules and themes can generate a quick workflow to output production-ready websites in a flash.',
					},
					{
						title: 'Dunkin',
						git: 'https://github.com/JesseDevs/super-shot',
						link: 'https://calm-super-shot.surge.sh/',
						image: 'images/projects/dunkin.png',
						p: 'In my <em>‘Dunkin’ Donuts: Vue App’</em>, I utilized Firebase, which is not a CMS but a NoSQL cloud database that offers various ways to manage aspects of a web application. To build this type of data, I made an HTTP request to the Firebase API connected to my project. It works very similarly to a giant JSON file that can hold many lists filled with many objects that are easily accessed by database features.',
					},
				],
			},
		},
	];

	return {
		projects,
	};
});
