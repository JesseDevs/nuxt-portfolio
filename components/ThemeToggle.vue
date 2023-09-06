<script setup>
	import { useInterfaceStore } from '~/stores/interface';

	const ui = useInterfaceStore();
</script>

<template>
	<div :class="`theme-toggle ${ui.selectedTheme}`">
		<button class="light-button" @click="ui.setSelectedTheme('light')">
			<Icon name="ph:sun-bold" size="21" />
			<span class="relative z-10">Light</span>
		</button>

		<button class="dark-button" @click="ui.setSelectedTheme('dark')">
			<Icon name="material-symbols:dark-mode-outline" size="21" />
			<span class="relative z-10">Dark</span>
		</button>
	</div>
</template>

<style lang="scss">
	.theme-toggle {
		display: flex;
		position: relative;
		gap: 15px;
		justify-content: space-between;
		align-items: center;
		border-radius: 9999px;
		width: fit-content;
		margin: 50px auto;

		button {
			pointer-events: all;
			cursor: pointer;
			appearance: none;
			border: none;
			outline: none;
			padding: 10px 30px;
			border-radius: 9999px;
			display: flex;
			gap: 5px;
			align-items: center;
			font-weight: 400;

			background-color: var(--bg-opaque);
			color: var(--background-light);
			transition: background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1),
				color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
		}
	}

	.theme-toggle.dark {
		.dark-button {
			background-color: var(--brand);
			color: var(--background);
		}
	}

	.theme-toggle.light {
		.light-button {
			background-color: var(--brand);
			color: var(--background);
		}
	}
</style>
