<template>
	<ul class="pfiles-container" v-for="(file, index) in project.modalContent.files">
		<li>
			<article>
				<div class="file-container">
					<p class="calm-voice">{{ file.title }}</p>
					<div class="line" />
					<div>
						<a :href="file.github" target="_blank">
							<Icon name="mdi:github" color="var(--white)" size="30" />
						</a>
						<a :href="file.link" target="_blank">
							<Icon name="bxs:send" color="var(--white)" size="30"
						/></a>
					</div>
				</div>
			</article>
		</li>
	</ul>
</template>

<script setup>
	const props = defineProps({
		project: Object,
	});
</script>

<style lang="scss" scoped></style>
