<template>
	<div @click="handleModalContainerClick" :class="`modal-container ${ui.projectClass}`">
		<project-modal>
			<nav>
				<button class="icon-button x" @click="ui.closeProjectModal">
					<Icon name="ep:close" size="21" color="var(--white)" />
				</button>
			</nav>

			<div class="project-modal-content">
				<picture class="projectImage">
					<img :src="project.imgSrc" />
				</picture>
				<h3 class="loud-voice">{{ project.title }}</h3>

				<p v-html="project.modalContent.overview"></p>

				<ul class="pfiles-container" v-for="(file, index) in project.modalContent.files">
					<li>
						<article>
							<div class="file-container">
								<p class="calm-voice">{{ file.title }}</p>
								<div class="line" />
								<div>
									<a :href="file.github">
										<Icon name="mdi:github" color="var(--white)" size="30" />
									</a>
									<a :href="file.link">
										<Icon name="bxs:send" color="var(--white)" size="30"
									/></a>
								</div>
							</div>
						</article>
					</li>
				</ul>
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

<style lang="scss" scoped>
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

		nav {
			display: flex;
			padding: 1rem 2rem;
			justify-content: flex-end;
		}
	}

	.project-modal-content {
		padding: 0rem 2rem 2rem;
	}

	.pfiles-container {
		li {
			padding: 1.2rem 0;
		}
	}
	.file-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1.2rem;

		p {
			font-weight: 600;
			flex-grow: 1;
		}

		.line {
			flex-shrink: 1;
		}

		div {
			display: flex;
			flex-shrink: 0;
			svg {
				opacity: 0.85;

				&:hover {
					opacity: 1;
				}
			}
			a {
				cursor: pointer;
			}
		}
	}
</style>
