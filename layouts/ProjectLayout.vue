<template>
	<SiteNav />

	<main class="page-content">
		<section id="project-modal">
			<inner-column>
				<project-modal>
					<picture class="project-thumbnail">
						<img :src="project.imgSrc" />
					</picture>
					<h3 class="loud-voice">{{ project.title }}</h3>

					<p v-html="project.modalContent.overview"></p>
				</project-modal>
				<FileProjects :project="project" />
			</inner-column>
		</section>
	</main>

	<div class="bottom-fade-out"></div>
</template>

<script setup>
	const props = defineProps({
		project: Object,
	});
</script>

<style lang="scss" scoped>
	project-modal {
		display: grid;
		grid-template-columns: 1fr;
		row-gap: 1.3rem;
	}
	.project-thumbnail img {
		border-radius: 1rem;
	}
</style>
