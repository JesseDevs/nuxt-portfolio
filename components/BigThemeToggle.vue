<script setup>
	import { useInterfaceStore } from '~/stores/interface';
	const ui = useInterfaceStore();
</script>

<template>
	<div :class="`big-theme-toggle ${ui.selectedTheme}`">
		<button class="light-button" @click="ui.setSelectedTheme('light')">
			<Icon name="ph:sun-bold" size="21" />
		</button>

		<button class="dark-button" @click="ui.setSelectedTheme('dark')">
			<Icon name="material-symbols:dark-mode-outline" size="21" />
		</button>
	</div>
</template>

<style lang="scss">
	.big-theme-toggle {
		display: flex;
		position: relative;
		justify-content: space-between;
		align-items: center;
		border-radius: 9999px;
		width: 42px;
		margin-left: 5px;
		button {
			pointer-events: all;
			cursor: pointer;
			appearance: none;
			border: none;
			outline: none;
			padding: 10px;
			border-radius: 9999px;
			display: flex;
			gap: 5px;
			align-items: center;
			font-weight: 400;
			position: absolute;
			top: -5px;

			background-color: var(--bg-opaque);
			color: var(--background-light);
			transition: background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1),
				color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.3s ease;
		}

		.light-button {
			z-index: 11;
			opacity: 0;
		}

		.dark-button {
			z-index: 10;
		}
	}

	.big-theme-toggle.dark {
		.dark-button {
			opacity: 1;
			background-color: var(--brand);
			color: var(--background);
		}
	}

	.big-theme-toggle.light {
		.dark-button {
			opacity: 0;
		}
		.light-button {
			z-index: 9;
			opacity: 1;
			background-color: var(--brand);
			color: var(--background);
		}
	}
</style>
