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
						<picture>
							<NuxtImg
								v-for="card in cards"
								:key="card"
								:src="card.url"
								:alt="card.title"
								loading="lazy"
								quality="60"
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
			url: '/me-imgs/imagine.webp',
			title: 'Title 1',
			id: 1,
		},

		{
			url: '/me-imgs/beach.webp',
			title: 'Title 4',
			id: 4,
		},
		{
			url: '/me-imgs/diego.webp',
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
			aspect-ratio: 3/4;

			max-width: 300px;
			margin-left: auto;
			&:before {
				content: '';
				background-color: rgb(var(--brand-rgb) / 0.6);
				width: 100%;
				height: 100%;
				display: block;
				position: absolute;
				z-index: -1;
				bottom: -1rem;
				right: -1rem;
				border-radius: 1rem;
			}
		}

		img {
			animation: FadeInOut 6s ease-in-out infinite;
			position: absolute;
			object-fit: cover;
			width: 100%;
			height: 100%;
			border-radius: 1rem;
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

	@media (min-width: 600px) {
		.image-container {
			picture {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				gap: 10px;
				width: 100%;
				max-width: none;
				aspect-ratio: none;
				min-height: none;
				max-height: 400px;

				&:before {
					content: '';
					width: 90%;
					height: 85%;
					display: block;
					position: absolute;
					z-index: -1;
					bottom: -1rem;
					right: auto;
					border-radius: 1rem;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -40%);
				}

				img {
					object-fit: cover;
					animation: initial;
					position: static;
					zoom: 0.9;
					max-height: 400px;
				}
			}
		}
	}
</style>
