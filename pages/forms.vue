<template>
	<section>
		<inner-column>
			<SectionHeader title="Forms" dir="rr" />

			<text-content>
				<p>
					Forms play a vital role in user interaction, don't they? They are an integral
					part of many web applications, allowing users to interact with data.
				</p>
				<p>
					Below you’ll find topics with small programs, that display ways
					<span class="brand">YOU</span> can change data.
				</p>
			</text-content>
			<forms-showcase>
				<h1 class="chant-voice">Data Structures</h1>
				<p>
					Effective use of data structures is crucial for managing and organizing
					information. While simple programs may rely on variables, more complex
					applications benefit from structured data storage.
				</p>

				<ul class="display-forms">
					<li v-for="formVue in formVues" :key="formVue.slug">
						<button class="icon-button" @click="toggleSpecificForm(formVue.slug)">
							<Icon :name="formVue.iconName" size="21" color="var(--text)" />
							{{ formVue.buttonText }}
						</button>
					</li>
				</ul>
			</forms-showcase>

			<LazyModalContainer>
				<LazyModalELR v-if="ui.formModal && selectedFormType === 'elr'" />
				<LazyModalMagic8 v-if="ui.formModal && selectedFormType === 'magic8'" />
				<LazyModalContest v-if="ui.formModal && selectedFormType === 'contest'" />
				<LazyModalFiltering v-if="ui.formModal && selectedFormType === 'filtering'" />
				<LazyModalRPG v-if="ui.formModal && selectedFormType === 'rpg '" />
			</LazyModalContainer>
		</inner-column>
	</section>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';
	const ui = useInterfaceStore();

	useHead({
		title: 'Nuxt Portfolio | Forms for Developers',
	});

	const formVues = [
		{
			component: 'ModalMagic8',
			slug: 'magic8',
			iconName: 'material-symbols:counter-8-outline',
			buttonText: 'Magic 8 Ball',
		},
		{
			component: 'ModalELR',
			slug: 'elr',
			iconName: 'ic:twotone-catching-pokemon',
			buttonText: 'Pokémon Removal',
		},
		{
			component: 'ModalContest',
			slug: 'contest',
			iconName: 'icon-park-outline:gold-medal',
			buttonText: 'Pick a Winner',
		},
		{
			component: 'ModalFiltering',
			slug: 'filtering',
			iconName: 'solar:filters-line-duotone',
			buttonText: 'Filter Values',
		},
		{
			component: 'ModalRPG',
			slug: 'rpg',
			iconName: 'icon-park-outline:gold-medal',
			buttonText: 'Random Password',
		},
	];

	const selectedFormType = ref('');

	const toggleSpecificForm = (formType) => {
		ui.toggleFormModal();
		selectedFormType.value = formType;
	};
</script>

<style lang="scss" scoped>
	button {
		color: var(--text);
		display: flex;
		align-items: center;
		gap: 5px;
	}

	text-content,
	forms-showcase {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	forms-showcase {
		padding-top: 50px;
		h1 {
			font-weight: 500;
		}

		ul {
			display: flex;
			flex-direction: column;
			gap: 8px;
			padding-right: 5px;
			button {
				display: flex;
				align-items: center;
				gap: 10px;
				padding: 12px 15px;
				border-radius: 0.375rem;
				transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out;
				font-weight: 500;
				color: var(--white);
				opacity: 0.85;
				width: 100%;
				border: 1px solid gray;

				svg {
					pointer-events: none;
				}

				&:hover {
					background-color: rgba(121, 118, 118, 0.38);
					opacity: 1;
				}
			}
		}
	}

	.brand {
		color: var(--brand);
		font-weight: 600;
		text-decoration: underline;
	}
</style>
