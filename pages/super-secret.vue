<template>
	<section class="secret-module">
		<column-container>
			<div class="box">
				<step-container>
					<div class="icon-container">
						<span>
							<Icon name="mdi:check" size="21" />
						</span>
						<p class="step small-voice">
							Complete your profile
							<a href="#" class="support-link small-voice">Link here</a>
						</p>
					</div>
					<div class="icon-container">
						<span>
							<Icon name="mdi:check" size="21" />
						</span>
						<p class="step small-voice">
							Take pod assessment
							<a href="#" class="support-link small-voice">Link here</a>
						</p>
					</div>
					<div class="icon-container">
						<span class="plus-icon">
							<Icon name="ic:sharp-plus" size="21" />
						</span>
						<p class="step small-voice">
							Join the tribe
							<a href="#" class="support-link small-voice"
								>Link here
								<Icon name="ic:outline-arrow-right-alt" size="21" />
							</a>
						</p>
					</div>
					<div class="icon-container">
						<span>
							<Icon name="ph:lock-key-fill" size="21" />
						</span>
						<p class="step small-voice">
							Apply for pod
							<a href="#" class="support-link small-voice">Link here</a>
						</p>
					</div>
				</step-container>

				<a href="#" class="small-voice small-size">
					Link to next step unless there
					<Icon name="ic:outline-arrow-right-alt" size="21" />
				</a>
				<bigger-box>
					<p class="small-voice sub">Subcription status: <span>Inactive</span></p>
					<a href="#" class="small-voice big-mid-size"> Join The Tribe today! </a>
				</bigger-box>
			</div>
		</column-container>
	</section>
</template>

<script setup>
	useHead({
		title: 'Nuxt Portfolio | Home',
	});

	const colorMode = useColorMode();

	console.log(colorMode.preference);
</script>

<style lang="scss" scoped>
	.secret-module {
		--color-bg: rgb(0 71 72);
		--color-icon: rgb(1 162 166);
		--color-highlight: rgb(76 169 173);
		--color-select: rgb(56 127 129);

		--select: rgb(193 102 98);
		--white: rgb(251 251 251);

		span,
		a {
			display: block;
			width: 100%;
		}

		.small-voice {
			font-size: 15px;
		}
	}

	column-container {
		display: block;
		position: relative;
		z-index: 10;
		max-width: 1200px;
		margin: auto;
		padding: 7.2rem 2rem;
		z-index: 1;
	}

	.big-mid-size {
		display: none;
	}

	bigger-box {
		display: none;
	}

	div.box {
		background-color: var(--color-bg);
		padding: 1rem 2rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		> a {
			color: var(--white);
			max-width: fit-content;
			border-bottom: 1px solid var(--white);
		}
	}

	div.icon-container {
		p.step {
			display: none;
		}
		span {
			border-radius: 50%;
			border: 2px solid var(--color-icon);
			width: fit-content;
			padding: 5px;

			svg {
				fill: var(--color-icon);
				color: var(--color-icon);
			}
		}

		span.plus-icon {
			background-color: var(--white);
		}
		.support-link {
			display: none;
		}
	}

	step-container {
		width: 100%;
		display: flex;
		row-gap: 5vw;
		column-gap: 1rem;
	}

	@media (min-width: 600px) {
		bigger-box {
			display: block;
			.big-mid-size {
				display: none;
			}
		}
		.small-size {
			display: none !important;
		}

		p.sub {
			span {
				display: inline;
				color: var(--select);
			}
		}

		step-container {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}

		div.icon-container {
			display: flex;
			align-items: center;
			gap: 1rem;

			border: 1px solid var(--color-icon);
			padding: 1rem 1rem;
			border-radius: 10px;

			span {
				flex-shrink: 0;
			}

			p.step {
				display: block;
			}
		}
	}

	@media (min-width: 950px) {
		step-container {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}

		bigger-box {
			display: flex;
			width: 100%;
			flex-direction: column;
			gap: 5px;
		}
		.big-mid-size {
			display: block !important;
			color: var(--color-icon);
			max-width: fit-content;
			border-bottom: 1px solid var(--color-icon);
		}
	}

	@media (min-width: 1150px) {
		.icon-container {
			.support-link {
				display: block !important;
				color: var(--white);
				border-bottom: 1px solid var(--white);
				font-weight: 300;
				max-width: fit-content;
				&:hover {
					text-decoration: none;
				}
			}
		}
	}
</style>
