<template>
	<form-box>
		<h2 class="chant-voice">Let’s Pick a Winner!<br /></h2>

		<form autocomplete="off" action="" @submit.prevent="runSubmit">
			<label class="calm-voice" for="arr">Who is competing?</label>
			<input type="text" v-model="newCompetitor" name="arr" />

			<Button24 role="button" @click.prevent="addToCompetition">{{ compWord }}</Button24>
			<Transition name="insert-button">
				<Button24 class="winner" v-if="totalCompetitors.length >= 2" role="button"
					>Find Winner</Button24
				>
			</Transition>
		</form>
		<TransitionGroup name="list" tag="ul">
			<li v-for="(comp, index) in totalCompetitors" :key="comp">
				<p class="p-name">
					<span>{{ index + 1 }}.</span>
					{{ utils.capitalizeWords(comp) }}
				</p>
			</li>
		</TransitionGroup>

		<Transition name="list">
			<p class="announcement" v-if="winner">
				<span>{{ utils.capitalizeWords(winner) }}</span> is the winner!!
			</p>
		</Transition>
	</form-box>
</template>

<script setup>
	import { useUtilitiesStore } from '@/stores/utils';
	const utils = useUtilitiesStore();

	const totalCompetitors = ref([]);
	const newCompetitor = ref('');
	const winner = ref('');
	const compWord = ref('Start a Competition');

	watch(totalCompetitors.value, (newVal) => {
		if (newVal.length >= 1) {
			compWord.value = 'Add Another Competitor';
		}
	});

	const addToCompetition = () => {
		if (newCompetitor.value.trim() !== '') {
			totalCompetitors.value.push(newCompetitor.value.toLowerCase());
			newCompetitor.value = '';
		}
	};

	const runSubmit = () => {
		const randomIndex = Math.floor(Math.random() * totalCompetitors.value.length);
		winner.value = totalCompetitors.value[randomIndex];
	};
</script>
<style lang="scss" scoped>
	.insert-button-move,
	.insert-button-enter-active,
	.insert-button-leave-active {
		transition: all 0.3s ease;
	}

	.insert-button-enter-from,
	.insert-button-leave-to {
		opacity: 0;
		transform: translateY(-30px);
	}

	.insert-button-leave-active {
		position: absolute;
	}

	form {
		position: relative;
	}
	.winner {
		margin-top: 10px;
	}

	.announcement {
		text-align: center;
		max-width: fit-content;
		margin: 0 auto;
		font-size: var(--step-1);
		span {
			font-weight: 700;
			color: var(--brand);
		}
	}
</style>
