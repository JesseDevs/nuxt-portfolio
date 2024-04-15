<script setup>
	import { useProjectStore } from '~/stores/projects.js';
	import { useInterfaceStore } from '~/stores/interface';

	const ui = useInterfaceStore();
	const projects = useProjectStore().projects;

	const props = defineProps({
		moduleData: Object,
	});

	const selectedProject = ref(null);
</script>

<template>
	<section :id="moduleData.module">
		<inner-column>
			<project-section>
				<SectionHeader :title="moduleData.heading" dir="r" />

				<article-grid>
					<article
						v-for="(project, index) in projects"
						:key="index"
						class="project"
					>
						<a :href="`/projects/${project.slug}/`" class="projectImage">
							<picture>
								<NuxtImg :src="project.imgSrc" loading="lazy" />
							</picture>
						</a>

						<div class="project-container">
							<h4 class="chant-voice">{{ project.title }}</h4>
							<div class="project-title-line" />
						</div>

						<p class="project-description">
							{{ project.description }}
							<NuxtLink :to="`/projects/${project.slug}/`"
								>Learn More<Icon
									name="material-symbols:arrow-right-alt"
									size="25"
							/></NuxtLink>
						</p>
					</article>
				</article-grid>
			</project-section>
		</inner-column>
	</section>
</template>

<style scoped lang="scss">
	article-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 5rem;
	}

	article.project {
		display: flex;
		flex-direction: column;
		row-gap: 1.2rem;
	}

	.projectImage {
		padding-right: 15px;
		padding-bottom: 15px;
		picture {
			width: 100%;
			aspect-ratio: 16/9;
			cursor: pointer;
			position: relative;
			max-height: 270px;
			max-width: fit-content;

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
				transition: transform 0.3s ease, opacity 0.3s ease;
			}
		}

		img {
			transition: transform 0.3s ease, opacity 0.3s ease;
			opacity: 1;
			object-fit: cover;
			height: 100%;
			width: 100%;
		}

		&:hover {
			img {
				opacity: 0.7;
				transform: translate(0.5rem, 0.5rem);
			}

			picture:before {
				transform: translate(-0.5rem, -0.5rem);
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
			font-weight: 600;
			opacity: 0.75;
			transition: 0.25s opacity;
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
		flex-grow: 1;

		a {
			display: block;

			font-weight: 600;
			color: var(--brand);

			cursor: pointer;
		}

		a:hover {
			text-decoration: underline;
		}
	}

	@media (min-width: 768px) {
		article-grid {
			grid-template-columns: 1fr 1fr;
		}
		.project-container {
			flex-direction: column;
			align-items: flex-start;
		}
		.project-title-line {
			display: none;
		}
	}
</style>
