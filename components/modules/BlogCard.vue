<template>
	<blog-card>
		<picture class="blog-thumbnail">
			<NuxtImg :src="content.thumbnail" alt="blog-image" loading="lazy" />
			<h4 class="title chant-voice" v-html="content.title"></h4>
		</picture>

		<text-content>
			<p v-if="content.podcast" class="small podcast">Podcast Special</p>

			<blockquote class="blockquote">
				<Icon name="fa6-solid:quote-left" size="24" />
				<p>
					{{ content.quote }}

					<a :href="content.link" target="_blank"
						>Read More
						<Icon name="material-symbols:arrow-right-alt" size="25" />
					</a>
				</p>
				<Icon name="fa6-solid:quote-right" size="24" />
			</blockquote>
		</text-content>
	</blog-card>
</template>

<script setup>
	const props = defineProps({
		content: Object,
	});
</script>

<style lang="scss" scoped>
	blog-card {
		display: flex;
		flex-direction: column;
		width: 100%;

		a {
			display: block;
			font-weight: 400;
			color: var(--brand);

			cursor: pointer;
		}

		a:hover {
			text-decoration: underline;
		}

		picture {
			position: relative;
			background-color: var(--background-dark);
			overflow: hidden;
			box-shadow: 10px 10px 30px 5px rgba(27, 26, 26, 0.2);

			img {
				opacity: 0.8;
				transition: filter 1s;
			}
		}

		h4 {
			position: absolute;
			z-index: 50;
			left: 0;
			bottom: 0;
			font-weight: 500;
			width: 100%;
			padding: 1rem;
			background-color: rgba(0, 0, 0, 0.905);
			color: var(--white);
		}

		text-content {
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			padding-top: 20px;
			background-color: transparent;
		}

		.blockquote {
			display: flex;
			gap: 1.3rem;

			p {
				padding-top: 15px;
			}

			svg {
				flex-shrink: 0;
			}
		}

		@media (min-width: 900px) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			column-gap: 1.3rem;

			picture {
				grid-row: 1/-1;
				align-self: center;
			}

			a {
				height: fit-content;
				margin-left: auto;
			}

			text-content {
				padding-top: 0;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}

			.blockquote {
				padding: 0;
			}
		}
	}

	.podcast {
		color: var(--brand);
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.blog-thumbnail {
		aspect-ratio: 5/3;
	}

	.blog-thumbnail img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
</style>
