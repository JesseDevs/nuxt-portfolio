<template>
	<section>
		<inner-column>
			<button class="icon-button" @click="ui.toggleFormModal">
				<Icon name="material-symbols:person" size="21" color="var(--text)" /> Button
			</button>

			<LazyModalContainer>
				<LazyModalELR v-if="ui.formModal" />
			</LazyModalContainer>
		</inner-column>
	</section>
</template>

<script setup>
	useHead({
		title: 'Nuxt Portfolio | Forms for Developers',
	});

	import { useInterfaceStore } from '~/stores/interface';
	const ui = useInterfaceStore();
</script>

<style lang="scss" scoped>
	button {
		color: var(--text);
		display: flex;
		align-items: center;
		gap: 5px;
	}
</style>
