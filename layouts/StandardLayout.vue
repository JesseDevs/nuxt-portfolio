<template>
	<main class="page-content">
		<section v-for="(section, index) in sections" :key="index">
			<inner-column :id="section.module">
				<component :is="getComponent(section.module)" :moduleData="section" />
			</inner-column>
		</section>
	</main>
</template>

<script setup>
	import { useComponentMap } from '~/stores/mapcomp';

	const mapcomp = useComponentMap();
	const getComponent = mapcomp.getComponent;

	const pageData = ref({
		heading: 'Your Heading',
		intro: 'Your Introduction',
	});

	const sections = ref([
		{
			module: 'LandingHeading',
			heading: 'Jesse Felix',
			intro: 'Frontend Developer',
			details:
				'I’m a Web Developer located in Los Angeles, California. I have a passion for crafting cool digital experiences. Maybe with you?',
			image: 'images/details/comp.webp',
		},
		{
			module: 'ProjectSection',
			heading: 'Projects',
			intro: 'Some timeline discussions...',
			details: '',
			image: '',
		},
		{
			module: 'AboutCard',
			heading: 'About',
			intro: 'Here is a little more...',
			details: [
				"From business finance to creative frontend web development, I've found my true passion. With the guidance of Perpetual Education, I'm constantly exploring new skills and challenging myself to do amazing things. Join me on my journey of discovery and growth in the world of coding and design.",
			],
			images: [
				'images/details/methree.jpg',
				'images/details/me.jpg',
				'images/details/metoo.jpg',
				'images/details/mefour.jpg',
			],
		},
		{
			module: 'ContactPage',
			heading: 'Contact',
			text: 'Shoot me an email if you want to connect! You can also find me on <a href="https://www.linkedin.com" target="_blank" rel="nofollow">Linkedin</a> or <a href="https://www.twitter.com" target="_blank" rel="nofollow">Twitter</a> if that&apos;s more your speed.',
		},
	]);
</script>
