<template>
	<ul class="pfiles-container">
		<li v-for="(file, index) in project.modalContent.files">
			<article>
				<div class="index-display">{{ formattedIndex(index) }}</div>
				<div class="file-container">
					<div class="file-header">
						<h4 class="chant-voice">{{ file.title }}</h4>
						<div class="line" />
					</div>

					<file-content>
						<picture v-if="file.image">
							<NuxtImg :src="file.image" alt="" loading="lazy" />
						</picture>
						<p class="text-content" v-html="file.p"></p>
						<ul>
							<p class="list-header">Technologies</p>

							<li v-for="t in file.tech">
								<p>{{ t }}</p>
							</li>
						</ul>

						<div class="file-links">
							<NuxtLink :to="file.link" target="_blank"
								>Visit Website</NuxtLink
							>
							<NuxtLink :to="file.git" target="_blank">
								Visit Github</NuxtLink
							>
						</div>
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

	const formattedIndex = (index) => {
		return (index + 1).toString().padStart(2, '0');
	};
</script>

<style lang="scss" scoped>
	.line {
		width: 100%;
		height: 1px;
		background: var(--text);
		opacity: 0.3;
	}

	.index-display {
		position: absolute;
		right: -25px;
		top: -25px;
		z-index: 11;
		color: var(--brand);
		font-weight: 700;
		font-size: 5rem;
		opacity: 0.4;
	}
	article {
		position: relative;
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
			position: relative;

			font-weight: 500;
			&:before {
				content: '';
				top: 0;
				right: -5px;
				width: 10px;
				height: 48%;
				background-color: var(--background);
				position: absolute;
				z-index: 10;
			}
			a {
				cursor: pointer;
			}
			h4 {
				flex-shrink: 0;
				position: relative;
				&:before {
					content: '';
					top: 0;
					left: -10px;
					width: 10px;
					height: 100%;
					background-color: var(--background);
					position: absolute;
				}
			}
		}

		.file-links {
			display: flex;
			align-items: center;
			flex-direction: column;
			flex-shrink: 0;
			gap: 10px;
			padding-top: 10px;

			a {
				background: var(--brand-dark);
				border: 1px solid var(--brand);
				box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
				width: 100%;
				box-sizing: border-box;
				color: var(--text);
				cursor: pointer;
				display: inline-block;
				text-transform: uppercase;
				font-weight: 700;

				outline: 0;
				letter-spacing: 0.4px;
				padding: 12px 14px;
				text-align: center;
				text-rendering: geometricprecision;
				user-select: none;

				touch-action: manipulation;
				vertical-align: middle;
				transition: background-color 0.3s ease;

				&:hover {
					background-color: initial;
					background-position: 0 0;
					color: var(--brand);
				}
			}
		}

		.file-container {
			display: flex;
			flex-direction: column;
			width: 100%;
			gap: 1.3rem;
			border-right: 1px solid rgb(95 94 96);
			position: relative;
			border-left: 1px solid rgb(95 94 96);

			p.text-content,
			ul {
				border-top: 1px solid rgb(95 94 96);
				border-bottom: 1px solid rgb(95 94 96);
				padding: 5px 10px;

				p.list-header {
					font-weight: 600;
					color: var(--brand);
				}
				li {
					position: relative;
					max-width: fit-content;
					padding-left: 30px;

					p:before {
						content: '';
						height: 1px;
						width: 10px;
						background-color: var(--brand);
						position: absolute;
						top: 50%;
						left: 10px;
						transform: translate(-50%, -50%);
					}
				}
			}
		}

		file-content {
			display: flex;
			flex-direction: column;
			width: 100%;
			gap: 1.3rem;

			picture {
				border-top: 1px solid rgb(95 94 96);
				border-bottom: 1px solid rgb(95 94 96);
				aspect-ratio: 6/4;

				overflow: hidden;
				img {
					object-fit: cover;
					width: 100%;
					height: 100%;
				}
			}
		}
	}

	@media (min-width: 600px) and (max-width: 850px) {
		.pfiles-container article {
			display: grid;
			grid-template-columns: 1fr 1fr;
			column-gap: 1.3rem;

			.file-container {
				grid-column: 1/-1;
				display: grid;
				grid-template-columns: 1fr 1fr;

				file-content {
					grid-column: 1/-1;
					display: grid;
					grid-template-columns: 1fr 1fr;
					picture {
						border-right: 1px solid rgb(95 94 96);
						align-self: stretch;
					}
					> p,
					> ul {
						grid-column: 2;
						border-left: 1px solid rgb(95 94 96);
					}
				}

				.file-links {
					grid-column: 1;
					grid-row: 2;
					align-self: flex-end;
				}

				.file-header {
					grid-column: 1/-1;
				}
			}
		}
	}
</style>
