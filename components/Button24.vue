<template>
	<button class="button-24" @click="onClick">
		<slot></slot>
	</button>
</template>

<script setup>
	const { onClick } = defineProps(['onClick']);
</script>

<style lang="scss">
	.button-24 {
		background: var(--brand);
		border: 1px solid var(--brand);
		border-radius: 6px;
		box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
		box-sizing: border-box;
		color: #ffffff;
		cursor: pointer;
		display: inline-block;
		text-transform: uppercase;

		font-weight: 700;
		line-height: 16px;
		min-height: 40px;
		outline: 0;
		letter-spacing: 0.4px;
		padding: 12px 14px;
		text-align: center;
		text-rendering: geometricprecision;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		vertical-align: middle;
		transition: background-color 0.3s ease;
	}

	.button-24:hover,
	.button-24:active {
		background-color: initial;
		background-position: 0 0;
		color: var(--brand);
	}

	.button-24:active {
		opacity: 0.5;
	}
</style>
