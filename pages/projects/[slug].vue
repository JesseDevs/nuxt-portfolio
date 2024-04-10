<template>
	<ModulesProjectPage :project="project" />
</template>

<script setup>
	import { useProjectStore } from '~/stores/projects.js';
	const projects = useProjectStore().projects;
	const { slug } = useRoute().params;
	const project = projects.find((project) => project.slug === slug);

	useHead({
		title: `Portfolio | ${slug.toUpperCase()}`,
	});
</script>

<style lang="scss"></style>
