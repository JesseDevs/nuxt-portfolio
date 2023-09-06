<template>
	<header class="main-tool-bar site-header">
		<inner-column>
			<nav class="main-menu">
				<MyLinks />
				<button class="hamburger-button icon-button" @click="ui.toggleMainMenu">
					<Icon name="grommet-icons:menu" size="21" color="var(--text)" />
				</button>

				<NavContainer class="big-screen-nav" />
			</nav>
		</inner-column>

		<MenuModal />
	</header>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';

	const ui = useInterfaceStore();
</script>

<style lang="scss">
	header {
		// position: sticky;
		// top: 0;
		z-index: 20;
		background-color: var(--background);
		box-shadow: 0px 0px 5px rgba(128, 128, 128, 0.5);

		inner-column {
			padding: 1.5rem 2rem;

			.main-menu {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;

				.icon-button {
					&:hover {
						background-color: rgba(166, 163, 163, 0.4);
					}
				}
			}
		}
	}

	.icon-button {
		outline: none;
		border: none;
		background-color: transparent;
		border-radius: 4px;
		padding: 6px;
		transition: background-color 0.2s ease-in-out;
		cursor: pointer;

		&:hover {
			background-color: var(--fade);
		}
	}

	nav.main-menu {
		ul.big-screen-nav {
			flex-direction: row;
			display: none;
			opacity: 0;
			pointer-events: none;
			transition: opacity 0.2s ease;
			padding: 0;
			gap: 0.5rem;

			a {
				font-size: var(--step-0);
				font-weight: 300;
				color: var(--text);

				svg {
					display: none;
				}
			}
		}

		@media (min-width: 900px) {
			ul.big-screen-nav {
				display: flex;
				opacity: 1;
				pointer-events: all;
			}

			.hamburger-button {
				display: none;
			}
		}
	}
</style>
