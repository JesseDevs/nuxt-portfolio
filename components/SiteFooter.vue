<template>
	<site-footer>
		<inner-column>
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
					<NuxtLink href="writing" @click="ui.closeMenu">
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
					<a href="#ContactPage" @click="ui.closeMenu">
						<Icon name="mdi:message-reply" size="28" color="var(--white)" />
						<span>Contact</span>
					</a>
				</li>
			</ul>
		</inner-column>
	</site-footer>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';

	const ui = useInterfaceStore();
</script>

<style lang="scss" scoped>
	.site-footer {
		display: block;
		width: 100%;
		position: relative;
		background: linear-gradient(180deg, red, blue);
	}
</style>
