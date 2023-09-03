<template>
	<main class="page-content">
		<section>
			<inner-column>
				<grid-blog class="grid-template">
					<SectionHeader title="Writing" dir="rr" />

					<ul class="writing-container">
						<li v-for="(content, index) in writingContent" :key="index">
							<BlogCard :content="content" />
						</li>
					</ul>
				</grid-blog>
			</inner-column>
		</section>
	</main>
</template>

<script setup>
	import BlogCard from '~/components/modules/BlogCard.vue';
	const writingContent = [
		{
			title: 'A Beautiful Lie <span class="brand-highlight">| 009</span>',
			intro: "You think you're going crazy, but you're not. You're not alone",
			quote: 'At this point we’ve learned ways to effectively use PHP and create a project that could take user input and create a card for that information.',
			link: 'https://jessedevs.substack.com/p/a-beautiful-lie-perpetual-education',
			thumbnail: 'images/writing/good-thing.jpg',
			podcast: false,
			month: 'July',
			day: 30,
		},
		{
			title: 'Perpetual Education. So far.',
			intro: 'The whole shebang... so far..',
			quote: 'The early days were just learning about the computer and to how to turn this machine into a tool for us.',
			link: 'https://jessedevs.substack.com/p/perpetual-education',
			thumbnail: 'images/writing/sky.JPG',
			podcast: false,
		},
		{
			title: '고인물 [ Goinmul ] <span class="brand-highlight">| 008</span>',
			intro: 'The standing water.',
			quote: 'The cool thing about learning all these programming tools in PHP is that… it will translate over to other languages that we will be learning in the future.',
			link: 'https://jessedevs.substack.com/p/-goinmul-perpetual-education-008',
			thumbnail: 'images/writing/goinmul.jpg',
			podcast: false,
			month: 'July',
			day: 30,
		},
		{
			title: 'Life is perspective <span class="brand-highlight">| 007</span>',
			intro: 'And my perspective may differ from yours.',
			quote: 'Speaking visual language is a tool that has to be mastered. Theres a lot to consider when designing a website for the world to view and critic.',
			link: 'https://jessedevs.substack.com/p/i-realize-life-is-perspective-perpetual',
			thumbnail: 'images/writing/sun.jpg',
			podcast: false,
			month: 'July',
			day: 30,
		},
		{
			title: 'The more I learn <span class="brand-highlight">| 005</span>',
			intro: 'The less I know. The less I know is for the better.',
			quote: "I, we started off making a boilerplate. Which, it's basically a template for our code.",
			link: 'https://jessedevs.substack.com/p/the-more-i-learn-perpetual-education#details',
			thumbnail: 'images/writing/gameboy.jpg',
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
		gap: 4rem;
	}
</style>
