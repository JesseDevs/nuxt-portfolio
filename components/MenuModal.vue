<template>
	<div @click="handleModalContainerClick" :class="`modal-container ${ui.menuClass}`">
		<menu-modal>
			<div class="modal-content">
				<nav class="main-menu">
					<CubeBlock />
					<button class="icon-button x" @click="ui.closeMenu">
						<Icon name="ep:close" size="21" color="var(--white)" />
					</button>
				</nav>

				<ul class="nav-container">
					<li>
						<NuxtLink to="/" @click="ui.closeMenu">
							<Icon
								name="material-symbols:other-houses"
								size="21"
								color="var(--white)"
							/>
							<span>Home</span>
						</NuxtLink>
					</li>
					<li>
						<a href="/#ProjectSection" @click="ui.closeMenu">
							<Icon name="iconoir:design-pencil" size="21" color="var(--white)" />
							<span>Projects</span>
						</a>
					</li>
					<li>
						<a href="/#AboutCard" @click="ui.closeMenu">
							<Icon name="material-symbols:person" size="21" color="var(--white)" />
							<span>About</span>
						</a>
					</li>
					<li>
						<NuxtLink href="writing" @click="ui.closeMenu">
							<Icon
								name="streamline:interface-content-book-open-content-books-book-open"
								size="21"
								color="var(--white)"
							/>
							<span>Writing</span>
						</NuxtLink>
					</li>
					<!-- <li>
						<a href="#" @click="ui.closeMenu">
							<Icon name="lucide:layout-grid" size="21" color="var(--white)" />
							<span>Layout</span>
						</a>
					</li> -->
					<!-- <li>
						<a href="#" @click="ui.closeMenu">
							<Icon
								name="icon-park-outline:form-one"
								size="21"
								color="var(--white)"
							/>
							<span>Forms</span>
						</a>
					</li> -->
					<li>
						<a href="#ContactPage" @click="ui.closeMenu">
							<Icon name="mdi:message-reply" size="21" color="var(--white)" />
							<span>Contact</span>
						</a>
					</li>
				</ul>
				<div class="line"></div>
				<ThemeToggle />
			</div>
		</menu-modal>
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

	menu-modal {
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
		.modal-content {
			padding: 1.5rem;
		}

		.main-menu {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			.box-container {
				scale: 1;
				position: static;
			}
		}
	}

	.modal-container.menu-open {
		menu-modal {
			left: 0;
		}
	}

	ul.nav-container {
		padding-top: 2rem;
		display: flex;
		flex-direction: column;
		gap: 5px;
		a {
			display: flex;
			align-items: center;
			gap: 10px;
			padding: 8px 10px;
			border-radius: 0.375rem;
			transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
			font-weight: 500;
			color: rgb(181, 177, 177);

			svg {
				pointer-events: none;
			}

			&:hover {
				background-color: rgba(121, 118, 118, 0.38);
				color: var(--text);
			}
		}
	}

	.line {
		margin-top: 30px;
		width: 100%;
		height: 1px;
		background: var(--text);
		opacity: 0.3;
	}
</style>
