<template>
	<div @click="emit('modalEvent')" :class="`modal-container ${ui.menuClass} ${ui.projectClass}`">
		<slot />
	</div>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';
	const ui = useInterfaceStore();

	const emit = defineEmits(['modalEvent']);

	const handleModalContainerClick = (event) => {
		if (!event.target.closest('menu-modal')) {
			ui.closeMenu();
		}
	};
</script>

<style lang="scss">
	.modal-container {
		position: fixed;
		overflow-y: auto;
		z-index: 50;
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

	.modal-container.menu-open {
		menu-modal {
			left: 0;
		}
	}
</style>
