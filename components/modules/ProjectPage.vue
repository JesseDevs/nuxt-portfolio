<template>
	<section id="project-modal">
		<inner-column>
			<project-modal>
				<h3 class="loud-voice">{{ project.title }}</h3>
				<picture class="project-thumbnail">
					<img :src="project.imgSrc" />
				</picture>

				<p
					v-for="p in project.modalContent.overview"
					:key="p"
					v-html="p"
					:class="fixGrid(project.modalContent.overview)"
				></p>
			</project-modal>
			<FileProjects :project="project" />
		</inner-column>
	</section>
</template>

<script setup>
	const props = defineProps({
		project: Object,
	});
	const fixGrid = (arr) => {
		if (arr.length > 1) {
			return 'fix-grid';
		} else {
			return '';
		}
	};
</script>

<style lang="scss" scoped>
	project-modal {
		display: grid;
		grid-template-columns: 1fr;
		row-gap: 3rem;

		picture {
			width: 100%;
			aspect-ratio: 16 / 9;
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

			img {
				border-radius: 1rem;
				transition: transform 0.3s ease, opacity 0.3s ease;
				opacity: 1;
				height: 100%;
				object-fit: cover;
			}

			&:hover {
				img {
					opacity: 0.85;
					transform: translate(1rem, 1rem);
				}
			}
		}
		@media (min-width: 850px) {
			grid-template-columns: 1fr 1fr;
			column-gap: 3rem;
			place-items: center;

			.fix-grid {
				grid-column: 1/-1;
			}

			h3 {
				grid-column: 1/-1;
			}
		}
	}
	.project-thumbnail {
		img {
			border-radius: 1rem;
		}
	}
</style>
