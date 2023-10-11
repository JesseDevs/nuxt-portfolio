<template>
	<div @click="handleModalContainerClick" :class="`modal-container ${ui.menuClass}`">
		<site-menu-modal>
			<div class="menu-modal-content">
				<nav class="main-menu">
					<CubeBlock />
					<button class="icon-button x" @click="ui.closeMenu">
						<Icon name="ep:close" size="21" color="var(--white)" />
					</button>
				</nav>

				<NavContainer />
				<div class="line"></div>
				<ThemeToggle />
				<div class="line"></div>
				<DevBox />
			</div>
		</site-menu-modal>
	</div>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';

	const ui = useInterfaceStore();

	const handleModalContainerClick = (event) => {
		if (!event.target.closest('menu-modal')) {
			ui.closeMenu();
		}
	};
</script>

<style lang="scss" scoped>
	@media (prefers-color-scheme: light) {
		site-menu-modal {
			background-color: rgb(35, 35, 37);
		}
	}
	body.light {
		site-menu-modal {
			background-color: rgb(35, 35, 37);
		}
	}
	.modal-container {
		position: fixed;
		overflow-y: auto;
		z-index: 21;
		width: 100vw;
		flex: 1 1 0%;
		height: 100%;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		background: rgba(62, 61, 61, 0.32);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(0.3px);
		transition: left 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955),
			backdrop-filter 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955), opacity 0.3s ease-in-out;
		backdrop-filter: blur(5px);
		opacity: 0;
		pointer-events: none;
	}

	.modal-container.menu-open {
		backdrop-filter: blur(1px);
		opacity: 1;
		pointer-events: all;
	}

	site-menu-modal {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		width: 100vw;
		height: 100%;
		max-width: 28rem;
		flex: 1 1 0%;
		pointer-events: all;
		background-color: rgb(24 24 27);
		position: fixed;
		transition: left 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955), opacity 0.3s ease-in-out;

		left: -100%;
		.menu-modal-content {
			padding: 1.5rem;
		}

		.main-menu {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			padding-left: 15px;

			.box-container {
				scale: 1;
				position: static;
			}
		}
	}

	.modal-container.menu-open {
		site-menu-modal {
			left: 0;
		}
	}

	.line {
		margin-top: 30px;
		width: 100%;
		height: 1px;
		background: var(--white);
		opacity: 0.3;
	}
</style>
