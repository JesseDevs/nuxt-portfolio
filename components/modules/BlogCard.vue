<template>
	<blog-card>
		<picture class="blog-thumbnail">
			<img :src="content.thumbnail" alt="blog-image" loading="lazy" />
		</picture>

		<text-content>
			<h4 class="title chant-voice" v-html="content.title"></h4>
			<p class="strict-voice">{{ content.intro }}</p>

			<p v-if="content.podcast" class="small podcast">Podcast Special</p>
		</text-content>

		<blockquote class="blockquote">
			<Icon name="fa6-solid:quote-left" size="24" />
			<p>{{ content.quote }}</p>
			<Icon name="fa6-solid:quote-right" size="24" />
		</blockquote>

		<a class="standardButton" :href="content.link" target="_blank">Read More</a>
		<support-bar></support-bar>
	</blog-card>
</template>

<script setup>
	const props = defineProps({
		content: Object,
	});
</script>

<style lang="scss" scoped>
	blog-card {
		display: block;
		width: 100%;

		.standardButton {
			outline: none;
			border: none;
			cursor: pointer;

			padding: 1rem 2rem;
			font-weight: 500;

			background: var(--brand);
			color: var(--background-dark);
			font-size: var(--step-0);
			border-radius: 4px;

			position: relative;
			z-index: 20;

			overflow: hidden;

			transition: 0.2s opacity;

			&:hover {
				opacity: 0.9;
			}
		}

		picture {
			position: relative;
			background-color: var(--black-mute);
			overflow: hidden;
			box-shadow: 10px 10px 30px 5px rgba(0, 0, 0, 0.2);

			img {
				opacity: 0.25;
				transition: filter 1s;
			}
		}

		text-content {
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			color: white;
			padding: 15px;
			background-color: transparent;

			h4 {
				font-weight: 500;
				margin-bottom: 20px;
			}
		}

		.blockquote {
			padding: 15px;
			display: flex;
			gap: 1.3rem;
			padding-bottom: 3rem;

			svg {
				flex-shrink: 0;
			}
		}

		@media (min-width: 750px) {
			picture.blog-thumbnail {
				grid-column: 1 / span 2;
				aspect-ratio: 4/3;
			}

			support-bar {
				bottom: 46px;
				top: initial;
				height: var(--thick);
				width: 100%;
			}
		}
	}

	@media (min-width: 750px) {
		grid-blog li:nth-of-type(even) {
			blockquote {
				grid-column: 1 / span 2;
				grid-row: 1;
			}

			picture.blog-thumbnail {
				grid-column: 3 / span 1;
			}

			a.action-link {
				grid-column: 1 / span 2;
			}
		}
	}

	.podcast {
		color: var(--grey);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		padding-top: 40px;
	}

	.quote {
		font-size: 1.4rem;
		max-width: 400px;
		line-height: 1.4;
		font-style: italic;
	}

	.author {
		float: right;
		font-size: 1.1rem;
		font-weight: bold;
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
