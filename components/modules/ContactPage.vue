<template>
	<section :id="moduleData.module">
		<inner-column>
			<contact-page>
				<div class="heading-container">
					<div class="line"></div>
					<h2 class="loud-voice">{{ moduleData.heading }}<span>.</span></h2>
					<div class="line"></div>
				</div>
				<text-content>
					<h5 class="strict-voice">{{ moduleData.intro }}</h5>

					<p v-html="moduleData.text"></p>
				</text-content>

				<div class="contactEmail">
					<a href="mailto:jessemerge2@gmail.com" target="_blank">
						<Icon name="material-symbols:mail" size="30" />
						<span class="strict-voice">jessemerge2@gmail.com</span>
					</a>
				</div>
			</contact-page>
		</inner-column>
	</section>
</template>

<script setup>
	const props = defineProps({
		moduleData: Object,
	});
</script>

<style lang="scss">
	contact-page {
		display: grid;
		grid-template-columns: 1fr;
		width: 100%;
	}
	.line {
		width: 100%;
		height: 1px;
		background: var(--text);
		opacity: 0.3;
	}

	.heading-container {
		display: flex;
		align-items: center;
		gap: 1.3rem;
		padding-bottom: 2rem;

		span {
			color: var(--brand);
		}
	}
	.contactEmail {
		margin: 0 auto;
		margin-top: 3rem;
		max-width: fit-content;

		@media (max-width: 500px) {
			span {
				font-size: var(--step-1);
			}
		}

		a {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 0.8rem;
			width: fit-content;
			margin: auto;
			transition: 0.25s color;
		}

		@media (min-width: 430px) {
			a {
				flex-direction: row;
				gap: 0.6rem;
			}
		}
	}

	.contactEmail:hover {
		color: var(--brand);
	}

	contact-page {
		margin-bottom: 3rem;
		text-align: center;

		text-content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			@media (min-width: 600px) {
				p {
					max-width: 33ch;
				}
			}
		}
	}
</style>
