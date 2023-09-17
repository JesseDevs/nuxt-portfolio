<template>
	<NuxtPage />
</template>

<script setup>
	let originalTitle;

	const onBlur = () => {
		document.title = 'I miss you...';
	};

	const onFocus = () => {
		document.title = originalTitle;
	};

	onMounted(() => {
		originalTitle = document.title; // Store the original title
		window.addEventListener('blur', onBlur);
		window.addEventListener('focus', onFocus);
	});

	onBeforeUnmount(() => {
		window.removeEventListener('blur', onBlur);
		window.removeEventListener('focus', onFocus);
	});
</script>

<style lang="scss">
	@import '~/assets/css/globals.css';

	.page-enter-active,
	.page-leave-active {
		transition: all 0.4s;
	}
	.page-enter-from,
	.page-leave-to {
		opacity: 0;
		filter: blur(1rem);
	}
</style>
