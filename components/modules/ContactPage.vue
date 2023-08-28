<template>
	<contact-page class="grid-template">
		<text-content>
			<SectionHeader :title="moduleData.heading" dir="r" />

			<p class="intro">{{ moduleData.intro }}</p>

			<p v-html="moduleData.text"></p>
		</text-content>
		<!--
		<Link href="mailto:bob.ross@notreal.com">
			<div className="{styles.contactEmail}">
				<AiFillMail size="2.4rem" />
				<span>bob.ross@notreal.com</span>
			</div>
		</Link> -->
	</contact-page>
</template>

<script setup>
	const props = defineProps({
		moduleData: Object,
	});
</script>
