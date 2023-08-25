<template>
	<big-heading>
		<h1 class="roar-voice">{{ pageData.heading }}</h1>
		<p class="intro">{{ pageData.intro }}</p>
	</big-heading>
</template>

<script setup>
	const props = defineProps({
		pageData: Object,
	});
</script>

<style scoped></style>
