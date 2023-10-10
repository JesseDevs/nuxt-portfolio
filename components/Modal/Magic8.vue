<template>
	<form-box>
		<div class="circle"></div>
		<floating-traingle>
			<Transition name="fade" mode="out-in">
				<p v-if="!message" class="eight">8</p>
				<p v-else class="message small-voice">{{ message }}</p>
			</Transition>
		</floating-traingle>
		<form action="" @submit.prevent="shakeBall">
			<label class="calm-voice" for="question"
				>Recieve an answer from the great Magic 8 ball.</label
			>
			<textarea
				v-model="question"
				type="text"
				placeholder="Ask a question. "
				name="question"
			/>

			<Button24 role="button">Shake Ball</Button24>
		</form>
	</form-box>
</template>

<script setup>
	const messages = ref([
		'Yes',
		'No',
		'Maybe',
		'Ask again later',
		'Outlook not so good',
		'More than likely',
	]);
	const message = ref('');
	const question = ref(null);

	const shakeBall = () => {
		if (!question.value) {
			return;
		}
		const randomIndex = Math.floor(Math.random() * messages.value.length);
		message.value = messages.value[randomIndex];
		question.value = null;
	};
</script>

<style lang="scss" scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s;
	}
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}

	form-box {
		margin-top: 30px;
	}
	.circle {
		position: absolute;
		border: 2px solid var(--brand);
		left: 50%;
		top: 33px;
		height: 175px;
		width: 175px;
		transform: translate(-50%, 20%);
		backdrop-filter: saturate(180%) blur(2px);
		opacity: 0.2;
		background-color: var(--background);
		border-radius: 50%;
		z-index: 999;
	}
	floating-traingle {
		display: block;
		height: 100px;
		width: 125px;
		margin: 0 auto;
		animation: floating 6s linear infinite;
		clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
		background-image: radial-gradient(circle, var(--background), rgb(var(--brand-rgb) / 0.3));
		position: relative;

		p.message {
			position: absolute;
			top: 69%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 80px;
			text-align: center;
			padding: 5px;
		}
		.eight {
			font-size: 3rem;
			font-family: monospace;
			position: absolute;
			top: 60%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	form {
		padding-top: 80px;

		label {
			text-align: center;
			max-width: 250px;
			margin: 0 auto;
		}
	}
	@keyframes floating {
		from {
			transform: rotateZ(0) rotateY(15deg) translateZ(6.8vmin) rotateZ(0);
		}
		to {
			transform: rotateZ(1turn) rotateY(15deg) translateZ(6.8vmin) rotateZ(-1turn);
		}
	}
</style>
