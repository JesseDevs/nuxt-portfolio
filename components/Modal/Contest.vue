<template>
	<form-box>
		<h2 class="strict-voice">Let’s Pick a Winner!<br /></h2>

		<Transition name="fade" mode="out-in">
			<ul v-if="totalCompetitors.length > 0">
				<li v-for="(comp, index) in totalCompetitors" :key="comp">
					<p class="p-name">
						<span>{{ index + 1 }}.</span>
						{{ utils.capitalizeWords(comp) }}
					</p>
				</li>
			</ul>
		</Transition>

		<Transition name="fade" mode="out-in">
			<form action="" @submit.prevent="runSubmit">
				<label class="calm-voice" for="arr">Who is competing?</label>
				<input type="text" v-model="newCompetitor" name="arr" />

				<Button24 role="button" @click.prevent="addToCompetition"
					>Add to Competition</Button24
				>
				<!-- <Button24 role="button">Find Winner</Button24> -->
			</form>
		</Transition>
	</form-box>
</template>

<script setup>
	import { useUtilitiesStore } from '~/stores/utils';
	const utils = useUtilitiesStore();

	const totalCompetitors = ref([]);
	const newCompetitor = ref('');
	const winner = ref('');

	const addToCompetition = () => {
		if (newCompetitor.value.trim() !== '') {
			totalCompetitors.value.push(newCompetitor.value.toLowerCase());
			newCompetitor.value = '';
		}
	};

	const runSubmit = () => {
		// const randomIndex = Math.floor(Math.random() * messages.value.length);
		// message.value = messages.value[randomIndex];
		// question.value = null;
	};
</script>
<style lang="scss" scoped>
	.p-name span {
		display: inline-block;
		min-width: 14px;
	}
</style>
