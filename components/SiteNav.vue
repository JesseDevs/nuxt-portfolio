<template>
	<header class="main-tool-bar site-header">
		<inner-column>
			<nav class="main-menu">
				<CubeBlock />
				<button class="hamburger-button icon-button" @click="ui.toggleMainMenu">
					<Icon name="grommet-icons:menu" size="21" color="var(--text)" />
				</button>
			</nav>
		</inner-column>
	</header>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';

	const ui = useInterfaceStore();
</script>

<style lang="scss">
	header inner-column {
		padding: 1.5rem 2rem;
	}

	.main-menu {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.icon-button {
		outline: none;
		border: none;
		background-color: transparent;
		border-radius: 4px;
		padding: 4px;
		transition: background-color 0.2s ease-in-out;
		cursor: pointer;

		&:hover {
			background-color: rgb(47, 46, 46);
		}
	}
</style>
