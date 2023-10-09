<template>
	<div class="app-container">
		<SiteNav />
		<main>
			<slot />
		</main>
		<SiteFooter />
	</div>
</template>

<script setup></script>

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
