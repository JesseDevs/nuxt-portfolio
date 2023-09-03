<template>
	<about-card>
		<text-content>
			<SectionHeader :title="moduleData.heading" dir="rr" />

			<p v-for="detail in moduleData.details" :key="detail" v-html="detail"></p>
		</text-content>

		<MyLinks class="isAboutCard" />
	</about-card>
</template>

<script setup>
	const props = defineProps({
		moduleData: Object,
	});

	const cards = [
		{
			url: 'https://placehold.co/600x400',
			title: 'Title 1',
			id: 1,
		},
		{
			url: 'https://placehold.co/600x400',
			title: 'Title 2',
			id: 2,
		},
		{
			url: 'https://placehold.co/600x400',
			title: 'Title 3',
			id: 3,
		},
		{
			url: 'https://placehold.co/600x400',
			title: 'Title 4',
			id: 4,
		},
		{
			url: 'https://placehold.co/600x400',
			title: 'Title 5',
			id: 5,
		},
		{
			url: 'https://placehold.co/600x400',
			title: 'Title 6',
			id: 6,
		},
		{
			url: 'https://placehold.co/600x400',
			title: 'Title 7',
			id: 7,
		},
	];
</script>

<style lang="scss" scoped>
	about-card {
		display: grid;
		grid-template-columns: 1fr;
		width: 100%;
	}
	text-content p {
		padding-bottom: 1.3rem;
	}
	.links-container {
		a:nth-of-type(even) {
			div.helper {
				top: -110%;
				bottom: auto;
			}
		}

		a:hover {
			div.helper {
				opacity: 1;
			}
		}

		div.helper {
			position: absolute;
			bottom: -110%;
			opacity: 0;
			pointer-events: none;
			transition: opacity 0.3s ease-in-out;
			p {
				padding: 5px;
			}
		}
	}
</style>
