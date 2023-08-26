<template>
	<big-heading>
		<h1 class="roar-voice">{{ moduleData.heading }}</h1>
		<p class="intro">{{ moduleData.intro }}</p>
	</big-heading>
</template>

<script setup>
	const props = defineProps({
		moduleData: Object,
	});
</script>

<style scoped></style>
