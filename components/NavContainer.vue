<template>
	<ul class="nav-container">
		<li>
			<NuxtLink to="/" @click="ui.closeMenu">
				<Icon
					name="material-symbols:other-houses"
					size="28"
					color="var(--white)"
				/>
				<span>Home</span>
			</NuxtLink>
		</li>
		<li>
			<NuxtLink to="/#ProjectSection" @click="ui.closeMenu">
				<Icon name="iconoir:design-pencil" size="28" color="var(--white)" />
				<span>Projects</span>
			</NuxtLink>
		</li>
		<li>
			<NuxtLink to="/#AboutCard" @click="ui.closeMenu">
				<Icon name="material-symbols:person" size="28" color="var(--white)" />
				<span>About</span>
			</NuxtLink>
		</li>
		<li>
			<NuxtLink to="/writing" @click="ui.closeMenu">
				<Icon
					name="streamline:interface-content-book-open-content-books-book-open"
					size="28"
					color="var(--white)"
				/>
				<span>Writing</span>
			</NuxtLink>
		</li>
		<li>
			<NuxtLink to="/#ContactPage" @click="ui.closeMenu">
				<Icon name="mdi:message-reply" size="28" color="var(--white)" />
				<span>Contact</span>
			</NuxtLink>
		</li>
		<li>
			<NuxtLink to="/forms" class="big-theme-toggle" @click="ui.closeMenu">
				<Icon name="mdi:message-reply" size="28" color="var(--white)" />
				<span>Forms</span>
			</NuxtLink>
		</li>
		<!-- <li class="big-theme-toggle">
			<BigThemeToggle />
		</li> -->
	</ul>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';

	const ui = useInterfaceStore();
</script>

<style lang="scss">
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
			width: 100%;

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
