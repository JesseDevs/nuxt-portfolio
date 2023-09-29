<template>
	<section>
		<inner-column>
			<grid-blog class="writing-container">
				<SectionHeader title="Writing" dir="rr" />

				<p>
					Whenever an opportunity arises, I craft engaging posts. Some delve into detailed
					case studies that offer a profound examination of various projects, while others
					are simply me indulging in the art of self-expression. Often, you'll discover a
					TV or movie quote intertwined within.
				</p>

				<ul>
					<li v-for="(content, index) in writingContent" :key="index">
						<ModulesBlogCard :content="content" />
					</li>
				</ul>
			</grid-blog>
		</inner-column>
	</section>
</template>

<script setup>
	useHead({
		title: 'Nuxt Portfolio | Writing',
	});

	const writingContent = [
		{
			title: 'A Beautiful Lie <span class="brand-highlight">| 009</span>',
			intro: "You think you're going crazy, but you're not. You're not alone",
			quote: 'At this point we’ve learned ways to effectively use PHP and create a project that could take user input and create a card for that information.',
			link: 'https://jessedevs.substack.com/p/a-beautiful-lie-perpetual-education',
			thumbnail: '/writing-imgs/good-thing.webp',
			podcast: false,
			month: 'July',
			day: 30,
		},
		{
			title: 'Perpetual Education. So far.',
			intro: 'The whole shebang... so far..',
			quote: 'The early days were just learning about the computer and to how to turn this machine into a tool for us.',
			link: 'https://jessedevs.substack.com/p/perpetual-education',
			thumbnail: '/writing-imgs/sky.webp',
			podcast: false,
		},
		{
			title: '고인물 [ Goinmul ] <span class="brand-highlight">| 008</span>',
			intro: 'The standing water.',
			quote: 'The cool thing about learning all these programming tools in PHP is that… it will translate over to other languages that we will be learning in the future.',
			link: 'https://jessedevs.substack.com/p/-goinmul-perpetual-education-008',
			thumbnail: '/writing-imgs/goinmul.webp',
			podcast: false,
			month: 'July',
			day: 30,
		},
		{
			title: 'Life is perspective <span class="brand-highlight">| 007</span>',
			intro: 'And my perspective may differ from yours.',
			quote: 'Speaking visual language is a tool that has to be mastered. Theres a lot to consider when designing a website for the world to view and critic.',
			link: 'https://jessedevs.substack.com/p/i-realize-life-is-perspective-perpetual',
			thumbnail: '/writing-imgs/sun.webp',
			podcast: false,
			month: 'July',
			day: 30,
		},
		{
			title: 'The more I learn <span class="brand-highlight">| 005</span>',
			intro: 'The less I know. The less I know is for the better.',
			quote: "I, we started off making a boilerplate. Which, it's basically a template for our code.",
			link: 'https://jessedevs.substack.com/p/the-more-i-learn-perpetual-education#details',
			thumbnail: '/writing-imgs/gameboy.webp',
			podcast: true,
			month: 'July',
			day: 30,
		},
	];
</script>

<style lang="scss" scoped>
	.writing-container {
		display: flex;
		flex-direction: column;

		p {
			padding-bottom: 2.4rem;
		}

		ul {
			display: flex;
			flex-direction: column;
			gap: 4rem;

			@media (min-width: 900px) {
				gap: 6rem;
			}
		}
	}
</style>
