<template>
	<contact-page class="grid-template">
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
			<a href="jessemerge2@gmail.com">
				<Icon name="material-symbols:mail" size="30" />
				<span class="strict-voice">jessemerge2@gmail.com</span>
			</a>
		</div>
	</contact-page>
</template>

<script setup>
	const props = defineProps({
		moduleData: Object,
	});
</script>

<style lang="scss">
	.line {
		width: 100%;
		height: 1px;
		background: var(--text);
		opacity: 0.3;
	}

	.heading-container {
		display: flex;
		align-items: center;
		gap: 2rem;
		padding-bottom: 2rem;

		span {
			color: var(--brand);
		}
	}
	.contactEmail {
		margin: 0 auto;
		margin-top: 3rem;
		max-width: fit-content;

		a {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.8rem;
			width: fit-content;
			margin: auto;
			padding: 10px 20px;

			transition: 0.25s color;
		}

		@media (max-width: 500px) {
			a {
				flex-direction: column;
				gap: 0.6rem;
				padding: 10px;
			}
		}
	}

	.contactEmail:hover {
		color: var(--brand);
	}

	contact-page {
		margin-top: 5rem;
		text-align: center;

		text-content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		p a {
			color: var(--brand);
			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>
