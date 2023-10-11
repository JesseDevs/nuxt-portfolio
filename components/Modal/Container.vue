<template>
	<ClientOnly>
		<Teleport to="main">
			<div
				@click="handleModalContainerClick"
				:class="['modal-container', ui.modal ? 'open' : '']"
			>
				<menu-modal>
					<button class="icon-button close-x" @click="ui.forceModalClose">
						<Icon name="mingcute:close-fill" size="21" />
					</button>
					<div class="modal-content">
						<slot />
					</div>
				</menu-modal>
			</div>
		</Teleport>
	</ClientOnly>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';
	const ui = useInterfaceStore();

	const handleModalContainerClick = (event) => {
		if (!event.target.closest('menu-modal')) {
			ui.forceModalClose();
		}
	};
</script>

<style lang="scss">
	.modal-container {
		position: fixed;
		overflow-y: auto;
		z-index: 100;
		width: 100vw;
		flex: 1 1 0%;
		height: 100%;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(0.3px);
		transition: backdrop-filter 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955),
			opacity 0.3s ease-in-out;
		backdrop-filter: blur(5px);
		opacity: 0;
		pointer-events: none;

		.close-x {
			position: absolute;
			top: 1.5rem;
			right: 2rem;
			background: var(--color-secondary-30);
			color: rgb(210, 200, 200);

			&:hover {
				background-color: var(--fade);
			}
		}
	}

	.modal-container.open {
		backdrop-filter: blur(3px);
		opacity: 1;
		pointer-events: all;

		menu-modal {
			left: 0;
		}
	}

	menu-modal {
		display: block;
		overflow: hidden;
		overflow-y: scroll;
		width: 95vw;
		max-width: 950px;
		padding: 4rem 2rem;
		pointer-events: all;
		position: fixed;
		left: -100%;
		top: 5vh;

		backdrop-filter: saturate(180%) blur(3rem);
		background-color: rgb(24, 24, 27);
		box-shadow: 0px 0px 5px rgba(128, 128, 128, 0.5);
		border-radius: 0rem 1rem 1rem 0;
		border-left: none;
		height: 80vh;
		transition: 0.4s left ease;
		margin: 0 auto;

		@media (min-width: 500px) {
			height: 85vh;

			div.modal-content {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
