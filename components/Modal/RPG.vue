<template>
	<form-box>
		<h2 class="chant-voice">Random Password Generator</h2>

		<Button24 :onClick="generatePassword" role="button">Generate</Button24>

		<!-- <form autocomplete="off" action="" @submit.prevent="runSubmit">
			<label class="calm-voice" for="arr">Who is competing?</label>
			<input type="text" v-model="newCompetitor" name="arr" />

			<Button24 role="button">Generate</Button24>
		</form> -->
	</form-box>
</template>

<script setup>
	import { useUtilitiesStore } from '~/stores/utils';
	const utils = useUtilitiesStore();

	const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
	const uppercaseLetters = lowercaseLetters.toUpperCase();
	const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';
	const numbers = '0123456789';

	const generatePassword = () => {};
</script>

<style lang="scss"></style>
