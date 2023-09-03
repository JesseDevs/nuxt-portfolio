<template>
	<button @click="onClick" class="standardButton">
		<slot></slot>
	</button>
</template>

<script setup>
	const { onClick } = defineProps(['onClick']);
</script>

<style lang="scss">
	.standardButton {
		outline: none;
		border: none;
		cursor: pointer;

		padding: 1.2rem 2.4rem;

		background: var(--brand);
		color: var(--background-dark);
		font-size: var(--text-sm);
		border-radius: 4px;

		position: relative;
		z-index: 20;

		overflow: hidden;

		transition: 0.2s opacity;

		&::hover {
			opacity: 0.9;
		}
	}
</style>
