<template>
	<div ref="fadein" class="animate">
		<slot />
	</div>
</template>

<script setup>
	const fadein = ref(null);
	let observer;

	onMounted(() => {
		observer = new IntersectionObserver(inViewport, {
			threshold: 0.1,
		});
		const ELs_inViewport = fadein.value;
		observer.observe(ELs_inViewport);
	});

	function inViewport(entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('is-inViewport');
				observer.unobserve(entry.target);
			}
		});
	}

	onBeforeUnmount(() => {
		observer.disconnect();
	});
</script>

<style lang="scss" scoped>
	.animate {
		transition: 0.7s ease;
		opacity: 0;
		transform: translate3d(0, 75px, 0);
	}

	.animate.is-inViewport {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
</style>
