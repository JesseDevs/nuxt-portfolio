<template>
	<div class="modal-container">
		<menu-modal :class="ui.menuClass">
			<div class="modal-content">
				<nav class="main-menu">
					{{ ui.menuClass }}
					<button class="icon-button x" @click="ui.closeMenu">
						<Icon name="ep:close" size="21" color="#fff" />
					</button>
				</nav>

				<ul class="nav-container">
					<li><a href="https://twitter.com">Hi</a></li>
				</ul>
			</div>
		</menu-modal>
	</div>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';

	const ui = useInterfaceStore();
</script>

<style lang="scss" scoped>
	.modal-container {
		position: fixed;
		overflow-y: auto;
		z-index: 50;
		width: 100vw;
		flex: 1 1 0%;
		height: 100%;
		top: 0;
		display: flex;
		flex-direction: column;
		background: rgba(62, 61, 61, 0.32);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(0.3px);
		pointer-events: none;
	}

	menu-modal {
		display: flex;
		flex-direction: column;
		width: 100vw;
		max-width: 28rem;
		flex: 1 1 0%;
		pointer-events: all;
		background-color: rgb(24 24 27);

		// position: fixed;
		// height: 0px;
		// padding: 0px;
		// overflow: hidden;
		// clip: rect(0px, 0px, 0px, 0px);
		// white-space: nowrap;
		// border-width: 0px;

		.modal-content {
			padding: 1.5rem;
		}
	}

	ul.nav-container {
		a {
			display: block;
			padding: 8px 10px;
			border-radius: 0.375rem;
			transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
			font-weight: 500;
			color: rgb(181, 177, 177);

			&:hover {
				background-color: rgba(121, 118, 118, 0.38);
				color: var(--text);
			}
		}
	}

	.menu-open {
		background-color: blue;
	}
</style>
