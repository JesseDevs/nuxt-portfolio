<template>
	<ul class="pfiles-container">
		<li v-for="(file, index) in project.modalContent.files">
			<article>
				<div class="file-container">
					<div class="file-header">
						<h4 class="chant-voice">{{ file.title }}</h4>
						<div class="line" />
						<div class="file-links">
							<NuxtLink :to="file.git" target="_blank">
								<Icon name="mdi:github" size="30" />
							</NuxtLink>
							<NuxtLink :to="file.link" target="_blank">
								<Icon name="bxs:send" size="30"
							/></NuxtLink>
						</div>
					</div>

					<file-content>
						<picture v-if="file.image">
							<NuxtImg :src="file.image" alt="" loading="lazy" />
						</picture>
						<p v-html="file.p"></p>
					</file-content>
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

<style lang="scss" scoped>
	.line {
		width: 100%;
		height: 1px;
		background: var(--text);
		opacity: 0.3;
	}
	.pfiles-container {
		padding: 3rem 0;
		display: grid;
		grid-template-columns: 1fr;
		row-gap: 5rem;

		@media (min-width: 980px) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			column-gap: 3rem;
		}

		.file-header {
			display: flex;
			align-items: center;
			gap: 10px;
			a {
				cursor: pointer;
			}
			h4 {
				flex-shrink: 0;
			}
		}

		.file-links {
			display: flex;
			align-items: center;
			flex-shrink: 0;

			a {
				opacity: 0.85;
				transition: opacity 0.3s ease;

				svg {
					transition: color 0.3s ease;
					color: var(--fade);
				}

				&:hover {
					opacity: 1;
					svg {
						color: var(--brand) !important;
					}
				}
			}
		}

		.file-container {
			display: flex;
			flex-direction: column;
			width: 100%;
			gap: 1.3rem;
		}

		file-content {
			display: flex;
			flex-direction: column;
			width: 100%;
			gap: 1.3rem;

			picture {
				aspect-ratio: 6/4;
				border-radius: 1rem;
				overflow: hidden;
				img {
					object-fit: cover;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
