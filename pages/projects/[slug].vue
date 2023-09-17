<template>
	<ProjectLayout :project="project" />
</template>

<script setup>
	import ProjectLayout from '~/layouts/ProjectLayout.vue';
	import { useProjectStore } from '~/stores/projects.js';
	const projects = useProjectStore().projects;
	const { slug } = useRoute().params;
	const project = projects.find((project) => project.slug === slug);

	useHead({
		title: `Nuxt Portfolio | ${slug}`,
	});
</script>

<style lang="scss"></style>
