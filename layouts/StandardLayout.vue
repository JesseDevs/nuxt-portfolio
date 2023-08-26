<template>
	<main class="page-content">
		<div v-for="(section, index) in sections" :key="index">
			<component :is="getComponent(section.module)" :moduleData="section" />
		</div>
	</main>
</template>

<script setup>
	import { useComponentMap } from '~/stores/mapcomp';
	import LandingHeading from '~/components/LandingHeading.vue';

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
			intro: 'Front End - Web Developer',
			details:
				'I’m a Web Developer located in Los Angeles, California. I have a passion for crafting cool digital experiences. Maybe with you?',
			image: 'images/details/comp.webp',
		},
		{
			module: 'project-section',
			heading: 'Projects',
			intro: 'Some timeline discussions...',
			details: '',
			image: '',
		},
		{
			module: 'about-card',
			heading: 'About Me',
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
			module: 'contact-form',
			heading: 'Contact',
			intro: 'Lets have a chat...',
			labelOne: 'NAME',
			holderOne: 'Jesse',
			labelTwo: 'EMAIL',
			labelThree: 'MESSAGE',
			holderTwo: 'Something to say..',
			button: 'SEND',
		},
	]);
</script>
