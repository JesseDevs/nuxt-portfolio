<template>
	<div class="app-container">
		<SiteNav />
		<main>
			<slot />
		</main>
		<div class="bottom-fade-out"></div>
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
		}
	}
</style>
