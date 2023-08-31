<template>
	<div @click="handleModalContainerClick" :class="`modal-container ${ui.projectClass}`">
		<project-modal>
			<nav>
				<button class="icon-button x" @click="ui.closeProjectModal">
					<Icon name="ep:close" size="21" color="var(--white)" />
				</button>
			</nav>

			<div class="project-modal-content">
				<h3 class="loud-voice">{{ project.title }}</h3>
			</div>
		</project-modal>
	</div>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';

	const ui = useInterfaceStore();

	const props = defineProps({
		project: Object,
	});

	const handleModalContainerClick = (event) => {
		if (!event.target.closest('project-modal')) {
			ui.closeProjectModal();
		}
	};
</script>

<style lang="scss">
	.modal-container.project-modal-open {
		backdrop-filter: blur(1px);
		opacity: 1;
		pointer-events: all;
	}

	.modal-container.project-modal-open {
		project-modal {
			bottom: auto;
			top: 15%;
		}
	}

	project-modal {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		width: 90%;
		max-width: 800px;
		left: 50%;
		transform: translate(-50%, 0);
		height: fit-content;
		border-radius: 1.2rem;
		flex: 1 1 0%;
		pointer-events: all;
		background-color: rgb(24 24 27);
		position: fixed;
		box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
		transition: left 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
		cursor: auto;

		bottom: -100%;
		.modal-content {
			padding: 1.5rem;
		}

		nav {
			display: flex;
			padding: 1rem 2rem;
			justify-content: flex-end;
		}
	}

	.project-modal-content {
		padding: 2rem;
	}
</style>
