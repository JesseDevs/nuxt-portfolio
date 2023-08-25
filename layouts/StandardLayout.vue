<template>
	<main class="page-content">
		<LandingHeading :pageData="pageData" />
	</main>
</template>

<script setup>
	const pageData = ref({
		heading: 'Your Heading',
		intro: 'Your Introduction',
	});
</script>
