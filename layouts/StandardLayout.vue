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

	const sections = ref([
		{
			module: 'LandingHeading',
			heading: 'Jesse Felix',
			intro: 'Front-End Developer',
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
				"I'm a graduate with a Bachelor's degree in Business Finance, but my true passion lies in the world of computers and web development.",
				"Right now, I'm lucky enough to be under the mentorship of <a href='https://perpetual.education/' target='_blank'>Perpetual Education</a> where I'm experimenting with a wide range of coding and design disciplines. I'm constantly pushing myself to learn and grow, and I'm excited to see where this journey will take me.",
				"But hey, I'm not all about work! When I'm not busy coding, you'll find me indulging in my other passions. I love playing games, hitting the gym to stay active, and checking out the latest music.",
				'Let’s connect! Check out some of my links.',
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
			text: 'Shoot me an email if you want to connect! You can also find me on <a href="https://www.linkedin.com/in/felix-jesser/" target="_blank" rel="nofollow">Linkedin</a> or <a href="https://twitter.com/Jesse_Devs" target="_blank" rel="nofollow">Twitter</a> if that&apos;s more your speed.',
		},
	]);
</script>
