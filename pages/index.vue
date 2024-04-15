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
				"At Steady Studio, I'm deeply engaged in diverse projects, constantly exploring new horizons. Simultaneously, I collaborate with <a href='https://perpetual.education/' target='_blank'>Perpetual Education</a>, where I'm immersed in the world of software engineering. My background in business finance gives me a unique perspective, blending analytical thinking with creative problem-solving, which adds an exciting twist to my software engineering journey.",

				"When I'm not coding, I'm all about staying active and keeping things lively. You'll often find me hitting the gym or getting into a game of sports. I'm also big on staying tuned in to the latest music trends, always looking for that next great track to keep me going!",
				'Let’s connect! Check out some of my links.',
			],
			images: [
				'images/details/diego.webp',
				'images/details/boat.webp',
				'images/details/workout.jpeg',
				'images/details/imagine.webp',
			],
		},
		{
			module: 'ContactPage',
			heading: 'Contact',
			intro: 'Here is a little more...',
			text: 'You can also find me on <a href="https://www.linkedin.com/in/felix-jesser/" target="_blank" rel="nofollow">Linkedin</a> or <a href="https://twitter.com/Jesse_Devs" target="_blank" rel="nofollow">Twitter</a>. ',
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
