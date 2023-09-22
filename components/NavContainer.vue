<template>
	<ul class="nav-container">
		<li>
			<NuxtLink to="/" @click="ui.closeMenu">
				<Icon name="material-symbols:other-houses" size="28" color="var(--white)" />
				<span>Home</span>
			</NuxtLink>
		</li>
		<li>
			<a href="/#ProjectSection" @click="ui.closeMenu">
				<Icon name="iconoir:design-pencil" size="28" color="var(--white)" />
				<span>Projects</span>
			</a>
		</li>
		<li>
			<a href="/#AboutCard" @click="ui.closeMenu">
				<Icon name="material-symbols:person" size="28" color="var(--white)" />
				<span>About</span>
			</a>
		</li>
		<li>
			<NuxtLink href="/writing" @click="ui.closeMenu">
				<Icon
					name="streamline:interface-content-book-open-content-books-book-open"
					size="28"
					color="var(--white)"
				/>
				<span>Writing</span>
			</NuxtLink>
		</li>
		<!-- <li>
						<a href="#" @click="ui.closeMenu">
							<Icon name="lucide:layout-grid" size="28" color="var(--white)" />
							<span>Layout</span>
						</a>
					</li> -->
		<!-- <li>
						<a href="#" @click="ui.closeMenu">
							<Icon
								name="icon-park-outline:form-one"
								size="28"
								color="var(--white)"
							/>
							<span>Forms</span>
						</a>
					</li> -->
		<li>
			<a href="/#ContactPage" @click="ui.closeMenu">
				<Icon name="mdi:message-reply" size="28" color="var(--white)" />
				<span>Contact</span>
			</a>
		</li>
		<li class="big-theme-toggle">
			<BigThemeToggle />
		</li>
	</ul>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';

	const ui = useInterfaceStore();
</script>

<style lang="scss" scoped>
	ul.nav-container {
		padding-top: 2rem;
		display: flex;
		flex-direction: column;
		gap: 5px;
		padding-right: 5px;
		a {
			display: flex;
			align-items: center;
			gap: 10px;
			padding: 8px 15px;
			border-radius: 0.375rem;
			transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out;
			font-weight: 500;
			color: var(--white);
			opacity: 0.85;

			svg {
				pointer-events: none;
			}

			&:hover {
				background-color: rgba(121, 118, 118, 0.38);
				opacity: 1;
			}
		}

		.big-theme-toggle {
			display: none;
		}
	}
</style>
