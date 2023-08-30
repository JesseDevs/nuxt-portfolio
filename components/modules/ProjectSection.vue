<script setup>
	import { useProjectStore } from '~/stores/projects.js';
	const projects = useProjectStore().projects;

	const props = defineProps({
		moduleData: Object,
	});
</script>

<template>
	<project-section>
		<SectionHeader :title="moduleData.heading" dir="r" />

		<article-grid>
			<article v-for="(project, index) in projects" :key="index" class="project">
				<picture class="projectImage">
					<img :src="project.imgSrc" />
				</picture>
				<!-- Render project information -->

				<div class="project-container">
					<h4 class="strict-voice">{{ project.title }}</h4>
					<div class="projectTitleLine" />
				</div>

				<p class="projectDescription">
					{{ project.description }}
					<span @click="openProjectModal"
						>Learn more
						<Icon name="material-symbols:arrow-right-alt" size="25" />
					</span>
				</p>
			</article>
		</article-grid>
	</project-section>
</template>

<style scoped lang="scss">
	article-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3.2rem;

		@media (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
		}
	}

	article.project {
		display: grid;
		grid-template-columns: 1fr;
		row-gap: 1.2rem;
	}

	.projectImage {
		width: 100%;
		aspect-ratio: 16 / 9;
		background: rgb(var(--brand-rgb) / 0.2);
		cursor: pointer;
		position: relative;
		border-radius: 0.8rem;
		overflow: hidden;

		img {
			width: 85%;
			position: absolute;
			bottom: 0;
			left: 50%;
			translate: -50% 20%;

			transition: 0.25s all;

			border-radius: 0.4rem;
		}

		&:hover {
			img {
				scale: 1.1;
				translate: -50% 15%;
			}
		}
	}

	.project-container {
		display: flex;
		align-items: center;
		gap: 0.6rem;

		h4 {
			flex-shrink: 0;
		}

		a {
			opacity: 0.75;
			transition: 0.25s opacity;
			flex-grow: 1;
		}

		a:hover {
			opacity: 1;
		}
	}

	.projectTitleLine {
		width: 100%;
		height: 1px;
		background: var(--text);
		opacity: 0.3;
	}

	.projectDescription {
		span {
			display: inline-block;

			font-weight: 400;
			color: var(--brand);

			cursor: pointer;
		}

		span:hover {
			text-decoration: underline;
		}
	}

	.projectTech {
		display: flex;
		flex-wrap: wrap;
		gap: 1.2rem;

		font-size: var(--text-xs);
		color: var(--brand);

		margin: 0.8rem 0;
	}
</style>
