<template>
	<div class="links-container">
		<a href="https://github.com/JesseDevs" target="_blank">
			<Icon name="fa6-brands:square-github" size="24" />
		</a>
		<a href="https://www.linkedin.com/in/felix-jesser/" target="_blank">
			<Icon name="fa6-brands:linkedin" size="24" />
		</a>
		<a href="https://twitter.com/Jesse_Dude" target="_blank">
			<Icon name="fa6-brands:square-x-twitter" size="24" />
		</a>
		<a href="https://www.instagram.com/jessedude2/" target="_blank">
			<Icon name="fa6-brands:square-instagram" size="24" />
		</a>
		<a href="/resume-wd.pdf" target="_blank">
			<Icon name="pepicons-pop:cv" size="23" />
		</a>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
	.links-container {
		display: flex;
		gap: 0.5rem;

		flex-shrink: 0;
		svg {
			opacity: 0.85;

			&:hover {
				opacity: 1;

				color: var(--brand);
			}
		}
	}
</style>
