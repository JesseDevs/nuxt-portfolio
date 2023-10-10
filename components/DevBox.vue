<template>
	<dev-box>
		<p>Are you a devloper? Explore!</p>
		<p class="small-voice"><em>...if not thats cool too.</em></p>

		<ul class="nav-container">
			<li>
				<NuxtLink to="/forms" @click="ui.closeMenu">
					<Icon name="icon-park-outline:form-one" size="28" color="var(--white)" />
					<span>Form Interactions</span>
				</NuxtLink>
			</li>
			<li>
				<NuxtLink to="#" @click="ui.closeMenu">
					<Icon name="lucide:layout-grid" size="28" color="var(--white)" />
					<span>Design Layouts</span>
				</NuxtLink>
			</li>
		</ul>
	</dev-box>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';
	const ui = useInterfaceStore();
</script>

<style lang="scss" scoped>
	dev-box {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-top: 30px;

		ul.nav-container {
			padding-top: 10px;
		}

		p {
			color: var(--white);
		}
	}
</style>
