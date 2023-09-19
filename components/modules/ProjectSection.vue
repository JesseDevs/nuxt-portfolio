<script setup>
	import { useProjectStore } from '~/stores/projects.js';
	import { useInterfaceStore } from '~/stores/interface';

	const ui = useInterfaceStore();
	const projects = useProjectStore().projects;

	const props = defineProps({
		moduleData: Object,
	});

	const selectedProject = ref(null);

	const toggleProjectModal = (index) => {
		projects.forEach((project) => {
			project.isActive = false;
		});

		projects[index].isActive = !projects[index].isActive;

		ui.projectModal = projects[index].isActive;
	};
</script>

<template>
	<project-section>
		<SectionHeader :title="moduleData.heading" dir="r" />

		<article-grid>
			<article v-for="(project, index) in projects" :key="index" class="project">
				<NuxtLink :to="`/projects/${project.slug}/#project-modal`" class="projectImage">
					<picture>
						<img :src="project.imgSrc" />
					</picture>
				</NuxtLink>

				<div class="project-container">
					<h4 class="chant-voice">{{ project.title }}</h4>
					<div class="project-title-line" />
				</div>

				<p class="project-description">
					{{ project.description }}
					<NuxtLink :to="`/projects/${project.slug}/#project-modal`"
						>Learn More<Icon name="material-symbols:arrow-right-alt" size="25"
					/></NuxtLink>
				</p>
			</article>
		</article-grid>
	</project-section>
</template>

<style scoped lang="scss">
	article-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 5rem;

		@media (min-width: 768px) {
			grid-template-columns: 1fr 1fr;

			.project-container {
				flex-direction: column;
			}
			project-title-line {
				display: none;
			}
		}
	}

	article.project {
		display: grid;
		grid-template-columns: 1fr;
		row-gap: 1.2rem;
	}

	.projectImage {
		padding-right: 15px;
		padding-bottom: 15px;
		picture {
			width: 100%;
			aspect-ratio: 16 / 8;
			cursor: pointer;
			position: relative;
			border-radius: 1rem;

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
			border-radius: 1rem;
			transition: transform 0.3s ease, opacity 0.3s ease;
			opacity: 1;
		}

		&:hover {
			img {
				opacity: 0.85;
				transform: translate(1rem, 1rem);
			}
		}
	}

	.project-container {
		display: flex;
		align-items: center;
		gap: 0.6rem;

		h4 {
			flex-shrink: 0;
			font-weight: 500;
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

	.project-title-line {
		width: 100%;
		height: 1px;
		background: var(--text);
		opacity: 0.3;
	}

	.project-description {
		a {
			display: inline-block;

			font-weight: 400;
			color: var(--brand);

			cursor: pointer;
		}

		a:hover {
			text-decoration: underline;
		}
	}
</style>
