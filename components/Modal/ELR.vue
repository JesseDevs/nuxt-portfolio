<template>
	<form-box>
		<h2 v-if="pokemonNames.length > 0" class="strict-voice">
			Pokemon Names: {{ pokemonNames.length }}
		</h2>
		<ul v-if="pokemonNames.length > 0">
			<li v-for="(name, index) in pokemonNames" :key="name">
				<p class="p-name">
					<span>{{ index + 1 }}.</span>
					{{ utils.capitalizeWords(name) }}
				</p>
			</li>
		</ul>

		<form action="" @submit.prevent="runSubmit">
			<label class="calm-voice" for="pName">Write a name to remove from the list.</label>
			<input v-model="pNameToRemove" type="text" name="pName" />

			<Button24 role="button">Submit</Button24>
		</form>

		<Transition>
			<div v-if="pokemonNames.length < 5" class="flex-box">
				<p>You deleted {{ recentlyDeletedName }}!</p>
				<p>Hit a reload to get'em back on the list.</p>

				<Button24 :onClick="reloadWindow" role="button">Reload Window</Button24>
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
	const errMessage = ref('');

	const runSubmit = () => {
		const deletedName = pNameToRemove.value.toLowerCase();

		if (!pokemonNames.value.includes(deletedName)) {
			errMessage.value = `${deletedName} does not exist in the list of Pokemon names.`;
			return;
		}

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
		ul {
			min-height: 133px;
		}
	}

	.p-name span {
		display: inline-block;
		min-width: 14px;
	}
</style>
