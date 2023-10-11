<template>
	<form-box>
		<h2 class="chant-voice">Filtering Values</h2>

		<form autocomplete="off" action="" @submit.prevent="filterByEvenNumbers">
			<label class="calm-voice" for="list">Enter a list of numbers divided by spaces.</label>
			<input
				type="text"
				v-model="listString"
				name="list"
				placeholder="1 2 3 4 5"
				@keyup.space="updateList"
			/>

			<Button24 role="button">Filter Even Numbers</Button24>
		</form>

		<TransitionGroup name="list" tag="ul">
			<li v-for="x in listArr" :key="x">
				<p class="p-name">
					<span>-</span>
					{{ utils.capitalizeWords(x) }}
				</p>
			</li>
		</TransitionGroup>

		<Transition name="list">
			<ul class="announcement" v-if="result.length">
				<li class="brand" v-for="item in result">{{ utils.capitalizeWords(item) }}</li>
				<li>{{ plural }}!</li>
			</ul>
		</Transition>
	</form-box>
</template>

<script setup>
	import { useUtilitiesStore } from '~/stores/utils';
	const utils = useUtilitiesStore();

	const listString = ref('');
	const listArr = ref([]);
	const result = ref([]);
	const plural = ref('are even numbers');

	function updateList() {
		const trimmedString = listString.value.trim();
		if (trimmedString !== '') {
			const updatedList = trimmedString
				.split(' ')
				.map((item) => item.replace('.', ''))
				.filter((item) => item !== '');
			listArr.value = updatedList;
			result.value = [];
		} else {
			listArr.value = [];
			result.value = [];
		}
	}

	function filterByEvenNumbers() {
		result.value = [];
		for (let i = 0; i < listArr.value.length; i++) {
			if (parseInt(listArr.value[i]) % 2 === 0) {
				if (!result.value.includes(listArr.value[i])) {
					result.value.push(listArr.value[i]);
				}
			}
		}
		if (result.value.length === 1) {
			plural.value = 'is an even number';
		} else {
			plural.value = 'are even numbers';
		}

		listString.value = '';
		listArr.value = [];
	}
</script>

<style lang="scss">
	ul.announcement {
		display: flex;
		width: 100%;
		gap: 10px;
		flex-wrap: wrap;
		text-align: center;
		justify-content: center;

		li.brand {
			font-weight: 600;
			color: var(--brand);
		}
	}
</style>
