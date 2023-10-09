<template>
	<form-box>
		<h2 v-if="pokemonNames.length > 0" class="strict-voice">
			Pokemon Names: {{ pokemonNames.length }}
		</h2>
		<ol v-if="pokemonNames.length > 0">
			<li v-for="(name, index) in pokemonNames" :key="name">
				<p class="p-name">
					<span>{{ index + 1 }}.</span>
					{{ utils.capitalizeWords(name) }}
				</p>
			</li>
		</ol>

		<form action="" @submit.prevent="runSubmit">
			<label class="calm-voice" for="pName">Write a name to remove from the list.</label>
			<input v-model="pNameToRemove" type="text" name="pName" />

			<button class="button-24" role="button">Submit</button>
		</form>

		<Transition>
			<div v-if="pokemonNames.length < 5" class="flex-box">
				<p>You deleted {{ recentlyDeletedName }}!</p>
				<p>Hit a reload to get'em back on the list.</p>

				<button @click="reloadWindow" class="button-24" role="button">Reload Window</button>
			</div>
		</Transition>
	</form-box>
</template>

<script setup>
	import { useUtilitiesStore } from '~/stores/utils';
	const utils = useUtilitiesStore();

	const pokemonNames = ref(['pikachu', 'charizard', 'bulbasaur', 'eevee', 'snorlax']);
	const pNameToRemove = ref('');
	const recentlyDeletedName = ref('');

	const runSubmit = () => {
		const deletedName = pNameToRemove.value.toLowerCase();
		pokemonNames.value = pokemonNames.value.filter((pName) => pName !== deletedName);
		pNameToRemove.value = '';
		recentlyDeletedName.value = utils.capitalizeWords(deletedName);
	};

	const reloadWindow = () => {
		window.location.reload();
	};
</script>

<style lang="scss">
	.v-enter-active,
	.v-leave-active {
		transition: opacity 0.2s ease, transform 0.5s ease;
	}

	.v-enter-from,
	.v-leave-to {
		opacity: 0;
		transform: translateX(-10%);
	}

	form-box {
		display: flex;
		width: 100%;
		flex-direction: column;
		gap: 1rem;

		ol {
			min-height: 133px;
		}

		form {
			display: flex;
			flex-direction: column;
			gap: 10px;
			max-width: 400px;
		}

		input {
			padding: 8px 14px;
			border: none;
		}

		input[type='text']:focus {
			outline: 2px solid var(--brand);
		}

		.button-24 {
			background: var(--brand);
			border: 1px solid var(--brand);
			border-radius: 6px;
			box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
			box-sizing: border-box;
			color: #ffffff;
			cursor: pointer;
			display: inline-block;
			text-transform: uppercase;

			font-weight: 700;
			line-height: 16px;
			min-height: 40px;
			outline: 0;
			letter-spacing: 0.4px;
			padding: 12px 14px;
			text-align: center;
			text-rendering: geometricprecision;
			user-select: none;
			-webkit-user-select: none;
			touch-action: manipulation;
			vertical-align: middle;
			transition: background-color 0.3s ease;
		}

		.button-24:hover,
		.button-24:active {
			background-color: initial;
			background-position: 0 0;
			color: var(--brand);
		}

		.button-24:active {
			opacity: 0.5;
		}

		.flex-box {
			display: flex;
			width: 100%;
			flex-direction: column;
			max-width: 400px;
			padding-top: 2rem;
			button {
				margin-top: 20px;
			}
		}
	}

	.p-name span {
		display: inline-block;
		min-width: 14px;
	}
</style>
