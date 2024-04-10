<template>
	<div class="contents">
		<FadeIn>
			<ModulesLandingHeading :moduleData="sections[0]" />
		</FadeIn>
		<FadeIn>
			<LazyModulesProjectSection :moduleData="sections[1]" />
		</FadeIn>
		<FadeIn>
			<LazyModulesAboutCard :moduleData="sections[2]" />
		</FadeIn>
		<FadeIn>
			<LazyModulesContactPage :moduleData="sections[3]" />
		</FadeIn>
	</div>
</template>

<script setup>
	useHead({
		title: 'Home',
	});

	const sections = ref([
		{
			module: 'LandingHeading',
			heading: 'Jesse Felix',
			intro: 'Front-End Developer',
			details: [
				'I’m a Front-End Developer based in Los Angeles, California. My journey in web development has been fueled by a genuine passion for creating seamless online experiences.',

				'I’ve honed my skills, from coding elegant designs to bringing user-friendly interfaces to life. Feel free to reach out – I’m always up for a new challenge!',
			],
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
			text: 'You can find me on <a href="https://www.linkedin.com/in/felix-jesser/" target="_blank" rel="nofollow">Linkedin</a> or <a href="https://twitter.com/Jesse_Devs" target="_blank" rel="nofollow">Twitter</a>. Shoot me an email if you’d rather connect directly! ',
		},
	]);
	// const initial = {
	// 	x: -100,
	// 	opacity: 0,
	// 	transition: {
	// 		stiffness: 100,
	// 	},
	// };

	// const enter = {
	// 	x: 0,
	// 	opacity: 1,
	// 	transition: {
	// 		stiffness: 100,
	// 		ease: 'easeInOut',
	// 	},
	// };

	// onBeforeMount(async () => {
	// 	try {
	// 		isLoading.value = true;
	// 		await somefunction()
	// 		isLoading.value = false;
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// });
</script>

<style lang="scss">
	div.contents {
		display: contents;
	}
</style>
