<template>
	<div class="app-container">
		<SiteNav />
		<main>
			<slot />
		</main>
		<SiteFooter />
	</div>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';
	const ui = useInterfaceStore();
</script>

<style lang="scss" scoped>
	.app-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;

		main {
			flex-grow: 1;
			min-height: 80vh;
		}
	}
</style>
