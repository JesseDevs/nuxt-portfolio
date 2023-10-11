<template>
	<section :id="moduleData.module">
		<inner-column>
			<landing-heading>
				<text-content class="title">
					<h1 class="roar-voice">{{ moduleData.heading }}</h1>

					<h3 class="chant-voice">{{ moduleData.intro }}</h3>

					<p class="details" v-for="(detail, index) in moduleData.details" :key="index">
						{{ detail }}
					</p>
					<a href="#ContactPage">
						Connect
						<Icon name="material-symbols:arrow-right-alt" size="25" />
					</a>
				</text-content>
				<CubeBlock /> </landing-heading
		></inner-column>
	</section>
</template>

<script setup>
	const props = defineProps({
		moduleData: Object,
	});
</script>

<style scoped lang="scss">
	landing-heading {
		position: relative;
		display: grid;
		grid-template-columns: 1fr;
		place-items: center;
		min-height: 40vh;
		width: 100%;

		text-content {
			display: flex;
			flex-direction: column;
			gap: 1.3rem;
			width: 100%;
			z-index: 2;
		}

		h3 {
			font-weight: 500;
		}

		a {
			display: block;
			color: var(--brand);
			font-weight: 600;
			max-width: fit-content;

			&:hover {
				text-decoration: underline;
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
