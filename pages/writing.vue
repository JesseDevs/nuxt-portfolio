<template>
	<SiteNav />

	<WritingLayout />
	<div class="bottom-fade-out"></div>
</template>

<script setup>
	useHead({
		title: 'Nuxt Portfolio | Writing',
	});
	import WritingLayout from '~/layouts/WritingLayout.vue';
</script>

<style lang="scss" scoped></style>
