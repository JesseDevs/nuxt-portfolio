<template>
	<about-card class="grid-template">
		<text-content>
			<SectionHeader :title="moduleData.heading" dir="rr" />

			<p v-for="detail in moduleData.details" :key="detail" v-html="detail"></p>
		</text-content>

		<MyLinks />

		<!-- <div class="image-container small-image-support gs_reveal gs_reveal_fromRight">
		<picture class="about-image">
			<?php foreach ($section['images'] as $image) { ?>

				<img src="<?= $image ?>" alt="Me" loading='lazy'>

			<?php } ?>
		</picture>
	</div>

	<div class="image-container gs_reveal gs_reveal_fromRight">
		<picture class="about-image">
			<?php foreach ($section['images'] as $image) { ?>

				<img src="<?= $image ?>" alt="Me" loading='lazy'>

			<?php } ?>
		</picture>
	</div> -->
	</about-card>
</template>

<script setup>
	const props = defineProps({
		moduleData: Object,
	});
</script>

<style lang="scss" scoped>
	text-content p {
		padding-bottom: 1.3rem;
	}
</style>
