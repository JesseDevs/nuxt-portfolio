<template>
	<blog-card>
		<picture class="blog-thumbnail">
			<img :src="content.thumbnail" alt="blog-image" loading="lazy" />
			<h4 class="title chant-voice" v-html="content.title"></h4>
		</picture>

		<text-content>
			<p v-if="content.podcast" class="small podcast">Podcast Special</p>

			<blockquote class="blockquote">
				<Icon name="fa6-solid:quote-left" size="24" />
				<p>{{ content.quote }}</p>
				<Icon name="fa6-solid:quote-right" size="24" />
			</blockquote>

			<a class="standardButton" :href="content.link" target="_blank">Read More</a>
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

		.standardButton {
			outline: none;
			border: none;
			cursor: pointer;
			display: block;

			padding: 1rem 2rem;
			margin-top: 15px;
			font-weight: 500;
			max-width: fit-content;

			background: var(--brand);
			color: var(--background-dark);
			font-size: var(--step-0);
			border-radius: 4px;

			transition: 0.2s opacity;

			&:hover {
				opacity: 0.8;
			}
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
			background-color: rgb(var(--black-rgb) / 0.7);
		}

		text-content {
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			color: white;
			padding-top: 20px;
			background-color: transparent;
		}

		.blockquote {
			padding: 15px;
			display: flex;
			gap: 1.3rem;

			p {
				padding-top: 15px;
			}

			svg {
				flex-shrink: 0;
			}
		}

		@media (min-width: 980px) {
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
