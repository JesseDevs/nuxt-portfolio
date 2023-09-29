<template>
	<div class="links-container">
		<a href="https://github.com/JesseDevs" target="_blank">
			<Icon name="fa6-brands:square-github" size="24" />
			<div class="helper">
				<p class="small-voice">Github</p>
			</div>
		</a>
		<a href="https://www.linkedin.com/in/felix-jesser/" target="_blank">
			<Icon name="fa6-brands:linkedin" size="24" />
			<div class="helper">
				<p class="small-voice">LinkedIn</p>
			</div>
		</a>
		<a href="https://twitter.com/Jesse_Dude" target="_blank">
			<Icon name="fa6-brands:square-x-twitter" size="24" />
			<div class="helper">
				<p class="small-voice">Twitter</p>
			</div>
		</a>
		<a href="https://www.instagram.com/jessedude2/" target="_blank">
			<Icon name="fa6-brands:square-instagram" size="24" />
			<div class="helper">
				<p class="small-voice">Instagram</p>
			</div>
		</a>
		<a href="/webdev-resume-jesse.pdf" target="_blank">
			<Icon name="pepicons-pop:cv" size="23" />
			<div class="helper">
				<p class="small-voice">Resume</p>
			</div>
		</a>
	</div>
</template>

<script setup></script>

<style lang="scss">
	.links-container {
		display: flex;
		gap: 0.5rem;
		flex-shrink: 0;

		a {
			position: relative;
		}

		div.helper {
			display: none;
		}

		svg {
			opacity: 0.85;

			&:hover {
				opacity: 1;

				color: var(--brand);
			}
		}
	}

	.links-container.isAboutCard {
		gap: 10px;
		a:nth-of-type(even) {
			div.helper {
				top: -120%;
				bottom: auto;
			}
		}

		a:hover {
			div.helper {
				opacity: 1;
			}
		}

		svg {
			scale: 1.2;
		}

		div.helper {
			position: absolute;
			bottom: -120%;
			left: 0;
			opacity: 0;
			pointer-events: none;
			display: inline;
			transition: opacity 0.3s ease-in-out;
			p {
				padding: 5px;
			}
		}
	}
</style>
