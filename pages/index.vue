<template>
	<SiteNav />
	<StandardLayout />
	<div class="bottom-fade-out"></div>
</template>

<script setup>
	import StandardLayout from '~/layouts/StandardLayout.vue';

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
	.bottom-fade-out {
		height: 200px;
		background: linear-gradient(180deg, var(--background), var(--brand));
	}
</style>
