<template>
	<about-card class="grid-template">
		<text-content>
			<SectionHeader :title="moduleData.heading" dir="rr" />

			<h5 class="strict-voice">{{ moduleData.intro }}</h5>

			<p v-for="detail in moduleData.details" :key="detail">{{ detail }}</p>
		</text-content>

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
