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
				<!-- <p>
					These next programs will showcase ways to think about storing data in lists or
					name/value pairs, or even a combination of the two
				</p> -->

				<ul class="display-forms">
					<li>
						<button class="icon-button" @click="toggleSpecificForm('magic8')">
							<Icon
								name="material-symbols:counter-8-outline"
								size="21"
								color="var(--text)"
							/>
							Magic 8 Ball
						</button>
					</li>
					<li>
						<button class="icon-button" @click="toggleSpecificForm('elr')">
							<Icon
								name="ic:twotone-catching-pokemon"
								size="21"
								color="var(--text)"
							/>
							Pokémon Removal
						</button>
					</li>
				</ul>
			</forms-showcase>

			<LazyModalContainer>
				<LazyModalELR v-if="ui.formModal && selectedFormType === 'elr'" />
				<LazyModalMagic8 v-if="ui.formModal && selectedFormType === 'magic8'" />
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
			gap: 5px;
			padding-right: 5px;
			button {
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
