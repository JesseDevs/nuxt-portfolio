<template>
	<contact-page class="grid-template">
		<text-content>
			<SectionHeader :title="moduleData.heading" dir="rr" />

			<h5 class="strict-voice">{{ moduleData.intro }}</h5>

			<p v-html="moduleData.text"></p>
		</text-content>

		<div class="contactEmail">
			<a href="jessemerge2@gmail.com">
				<Icon name="material-symbols:mail" size="2.4rem" />
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
	.contactEmail {
		a {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.8rem;
			width: fit-content;
			font-size: var(--text-md);
			margin: auto;
			padding-top: 2rem;
			transition: 0.25s color;
		}
	}

	.contactEmail:hover {
		color: var(--brand);
	}

	contact-page {
		p a {
			color: var(--brand);
			text-decoration: underline;
		}
	}
</style>
