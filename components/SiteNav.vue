<template>
	<header class="main-tool-bar site-header">
		<inner-column>
			<nav class="main-menu">
				{{ ui.menuClass }}
				<button class="hamburger-button" @click="ui.toggleMainMenu">
					<Icon name="grommet-icons:menu" size="20" color="#fff" />
				</button>
			</nav>
		</inner-column>
	</header>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';

	const ui = useInterfaceStore();
</script>

<style lang="scss" scoped>
	header inner-column {
		padding: 1rem 2rem;
	}

	.main-menu {
		display: flex;
		flex-direction: row-reverse;
	}

	button {
		outline: none;
		border: none;
		background-color: var(--background);
		border-radius: 4px;
		padding: 4px;
		transition: background-color 0.2s ease-in-out;
		cursor: pointer;

		&:hover {
			background-color: rgb(47, 46, 46);
		}
	}
</style>
