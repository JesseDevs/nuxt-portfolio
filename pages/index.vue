<template>
	<SiteNav />

	<StandardLayout />

	<div class="bottom-fade-out"></div>
</template>

<script setup>
	useHead({
		title: 'Nuxt Portfolio | Home',
	});
	import StandardLayout from '~/layouts/StandardLayout.vue';

	// const initial = {
	// 	x: -100,
	// 	opacity: 0,
	// 	transition: {
	// 		stiffness: 100,
	// 	},
	// };

	// const enter = {
	// 	x: 0,
	// 	opacity: 1,
	// 	transition: {
	// 		stiffness: 100,
	// 		ease: 'easeInOut',
	// 	},
	// };

	// onBeforeMount(async () => {
	// 	try {
	// 		isLoading.value = true;
	// 		await somefunction()
	// 		isLoading.value = false;
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// });
</script>

<style lang="scss">
	inner-column.project-modal-open {
		z-index: -100;
		position: relative;
	}
</style>
