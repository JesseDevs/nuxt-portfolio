<template>
	<about-card>
		<text-content>
			<SectionHeader :title="moduleData.heading" dir="rr" />

			<p v-for="detail in moduleData.details" :key="detail" v-html="detail"></p>
		</text-content>

		<MyLinks class="isAboutCard" />

		<div class="image-container">
			<picture>
				<NuxtImg
					v-for="card in cards"
					:key="card"
					:src="card.url"
					:alt="card.title"
					loading="lazy"
				/>
			</picture>
		</div>
	</about-card>
</template>

<script setup>
	const props = defineProps({
		moduleData: Object,
	});

	const cards = [
		{
			url: '/me-imgs/imagine.jpg',
			title: 'Title 1',
			id: 1,
		},

		{
			url: '/me-imgs/beach.jpg',
			title: 'Title 4',
			id: 4,
		},
		{
			url: '/me-imgs/diego.jpg',
			title: 'Title 3',
			id: 3,
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
		padding-bottom: 3rem;
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

	@keyframes FadeInOut {
		17% {
			opacity: 1;
		}

		25% {
			opacity: 0;
		}

		92% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	img {
		object-fit: contain;
		width: 100%;
		height: 100%;
	}

	.image-container {
		position: relative;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		margin: 0 auto;

		picture {
			position: relative;
			aspect-ratio: 7/6;
			min-height: 400px;
			max-width: 300px;
		}

		img {
			animation: FadeInOut 6s ease-in-out infinite;
			position: absolute;
			object-fit: cover;
			width: 100%;
			height: 100%;
		}

		img:nth-of-type(1) {
			// 8s
			z-index: 10;
		}

		img:nth-of-type(2) {
			//10s
			animation-delay: 2s;
			z-index: 8;
		}

		img:nth-of-type(3) {
			//12s
			animation-delay: 4s;
			z-index: 6;
		}
	}

	@media (min-width: 700px) {
		.image-container {
			picture {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				gap: 10px;
				width: 100%;
				max-width: none;
				aspect-ratio: 6/3;
				min-height: none;

				img {
					animation: initial;
					position: static;
					zoom: 0.8;
				}
			}
		}
	}
</style>
