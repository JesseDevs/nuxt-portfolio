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
					<div class="about-image-container">
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
			url: '/me-imgs/workout.jpg',
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

	.about-image-container {
		position: relative;
		width: 100%;
		height: 300px;
		margin-left: auto;
		margin-right: auto;
		margin: 0 auto;
		display: flex;
		gap: 5px;

		picture {
			width: 25%;
			max-height: 300px;
			transition: width 0.5s ease;
			animation: slideInOut 4s linear infinite;

			img {
				object-fit: cover;
				width: 100%;
				height: 100%;
			}
		}
	}

	@media (max-width: 500px) {
		picture {
			animation: none;
			width: 25%;
		}
	}
</style>
