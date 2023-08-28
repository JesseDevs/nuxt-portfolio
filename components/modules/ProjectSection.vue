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
				<div class="projectImage">
					<img :src="project.imgSrc" />
				</div>
				<div class="projectCopy">
					<!-- Render project information -->
					<div class="projectTitle">
						<h4>{{ project.title }}</h4>
						<div class="projectTitleLine" />

						<a :href="project.code" target="_blank" rel="nofollow">
							<Icon name="grommet-icons:github" size="20" />
						</a>

						<a :href="project.projectLink" target="_blank" rel="nofollow">
							<Icon name="grommet-icons:github" size="20" />
						</a>
					</div>
					<!-- ... other project content ... -->
				</div>
			</article>
		</article-grid>
	</project-section>
</template>

<style scoped>
	article-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2.4rem;
	}

	article.project {
		display: grid;
		grid-template-columns: 1fr;
	}

	.projectImage {
		width: 100%;
		aspect-ratio: 16 / 9;
		background: var(--background-light);
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
	}

	.projectCopy {
		margin: 1.6rem 0;
	}

	.projectTitle {
		display: flex;
		align-items: center;
		gap: 1.2rem;

		h4 {
			font-weight: bold;
			font-size: var(--text-md);
			flex-shrink: 0;

			max-width: calc(100% - 150px);
		}

		a {
			opacity: 0.75;
			transition: 0.25s opacity;
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
		font-weight: 200;

		span {
			display: inline-block;

			font-size: var(--text-xs);
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
