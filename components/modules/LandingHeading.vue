<template>
	<landing-heading class="grid-template">
		<text-content class="title">
			<h1 class="roar-voice">{{ moduleData.heading }}</h1>

			<p class="intro">{{ moduleData.intro }}</p>

			<p class="details">{{ moduleData.details }}</p>
		</text-content>
	</landing-heading>
</template>

<script setup>
	const props = defineProps({
		moduleData: Object,
	});
</script>

<style scoped lang="scss">
	landing-heading {
		position: relative;
		place-items: center;
		height: 40vh;
		margin-bottom: 4.8rem;

		text-content {
			display: flex;
			flex-direction: column;
			gap: 20px;
			width: 100%;
			z-index: 2;
			animation: image-in 1s cubic-bezier(0.5, 0, 0.1, 1) 0.8s backwards;
		}

		a {
			margin-top: 20px;
			grid-column: 2/-1;
			animation: image-in 0.6s cubic-bezier(0.5, 0, 0.1, 1) 1.2s both;
		}
	}

	@media (min-width: 500px) {
		landing-heading {
			p.details {
				max-width: 700px;
			}
		}
	}

	@media (min-width: 750px) {
		landing-heading {
			text-content {
				padding-bottom: 0;
			}

			a.action-link {
				grid-column: 4/-1 !important;
			}
		}
	}

	@media (prefers-color-scheme: dark) {
		.landing-image img {
			filter: brightness(60%);

			@media (min-width: 750px) {
				filter: brightness(65%);
			}
		}
	}
</style>
