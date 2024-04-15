<template>
	<section :id="moduleData.module">
		<inner-column>
			<about-card>
				<text-content>
					<SectionHeader :title="moduleData.heading" dir="rr" />

					<p
						v-for="detail in moduleData.details"
						:key="detail"
						v-html="detail"
					></p>
				</text-content>

				<MyLinks class="isAboutCard" />
				<FadeIn>
					<div class="image-container">
						<picture v-for="card in cards">
							<NuxtImg
								:key="card"
								:src="card.url"
								:alt="card.title"
								loading="lazy"
								quality="80"
							/>
						</picture>
					</div>
				</FadeIn>
			</about-card>
		</inner-column>
	</section>
</template>

<script setup>
	const props = defineProps({
		moduleData: Object,
	});

	const cards = [
		{
			url: '/me-imgs/diego.webp',
			title: 'Title 1',
			id: 1,
		},
		{
			url: '/me-imgs/boat.webp',
			title: 'Title 1',
			id: 1,
		},

		{
			url: '/me-imgs/workout.jpeg',
			title: 'Title 4',
			id: 4,
		},
		{
			url: '/me-imgs/imagine.webp',
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
		display: flex;
		gap: 5px;

		picture {
			aspect-ratio: 3/4;
			max-height: 300px;
		}

		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}

	// @media (min-width: 600px) {
	// 	.image-container {
	// 		picture {
	// 			display: grid;
	// 			grid-template-columns: 1fr 1fr 1fr;
	// 			gap: 10px;
	// 			width: 100%;
	// 			max-width: none;
	// 			aspect-ratio: none;
	// 			min-height: none;
	// 			max-height: 400px;

	// 			&:before {
	// 				content: '';
	// 				background-color: rgb(var(--brand-rgb) / 0.6);
	// 				width: 100%;
	// 				height: 100%;
	// 				display: block;
	// 				position: absolute;
	// 				z-index: -1;
	// 				bottom: -1rem;
	// 				right: -1rem;
	// 			}

	// 			img {
	// 				object-fit: cover;
	// 				animation: initial;
	// 				position: static;
	// 				zoom: 0.9;
	// 				max-height: 400px;
	// 			}
	// 		}
	// 	}
	// }
</style>
