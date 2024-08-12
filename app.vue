<template>
	<!-- <NuxtLayout>
		<NuxtPage />
	</NuxtLayout> -->

	<div class="fullpage">
		<main>
			<code> Under new construction...<span class="blink">|</span> </code>
		</main>
	</div>
</template>

<script setup>
	let originalTitle;

	const onBlur = () => {
		document.title = 'I miss you...';
	};

	const onFocus = () => {
		document.title = originalTitle;
	};

	onMounted(() => {
		originalTitle = document.title; // Store the original title
		window.addEventListener('blur', onBlur);
		window.addEventListener('focus', onFocus);
	});

	onBeforeUnmount(() => {
		window.removeEventListener('blur', onBlur);
		window.removeEventListener('focus', onFocus);
	});
</script>

<style lang="scss">
	@import '~/assets/css/globals.css';

	.fullpage {
		display: flex;
		flex-direction: column;
		min-height: 100vh;

		main {
			flex-grow: 1;
			min-height: 80vh;
			display: grid;
			place-items: center;

			width: 100%;
			height: 100%;
			background-color: var(--bg-color);
		}

		code {
			font-size: 1.2rem;
			color: white;
		}
	}

	.blink {
		animation: blinker 1s linear infinite;
	}

	@keyframes blinker {
		50% {
			opacity: 0;
		}
	}

	.page-enter-active,
	.page-leave-active {
		transition: all 0.4s;
	}
	.page-enter-from,
	.page-leave-to {
		opacity: 0;
		filter: blur(1rem);
	}
</style>
