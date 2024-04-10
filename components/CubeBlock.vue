<template>
	<div class="box-container">
		<NuxtLink to="/" @click="ui.closeMenu">
			<div class="cube">
				<div class="face top"></div>
				<div class="face bottom"></div>
				<div class="face left"></div>
				<div class="face right"></div>
				<div class="face front"></div>
				<div class="face back"></div>
			</div>
		</NuxtLink>
	</div>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';

	const ui = useInterfaceStore();
</script>

<style lang="scss" scoped>
	@keyframes turn {
		from {
			transform: rotate3d(0, 0, 0, 0);
		}
		to {
			transform: rotate3d(2, -1, 1, 360deg);
		}
	}

	.box-container {
		width: 30px;
		height: 30px;
		cursor: auto;
		position: relative;
		position: absolute;
		scale: 6;
		right: 20%;
		top: 10%;
		transition: 1s scale ease-in-out;

		a {
			cursor: auto;
		}

		@media (min-width: 1000px) {
			scale: 9;
			top: 25%;
			right: 15%;
		}
	}

	.cube {
		position: relative;
		width: 30px;
		height: 30px;
		transform-style: preserve-3d;
		animation: turn 8s linear infinite;
	}
	// .cube:hover {
	// 	animation-play-state: paused;
	// }

	.face {
		width: 25px;
		height: 25px;
		background: rgb(var(--brand-rgb) / 0.6);
		border: 2px solid var(--bg-opaque);
		position: absolute;
		opacity: 0.5;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: Arial, sans-serif;
		font-size: 2rem;
		transition: transform 500ms;
	}

	.light-mode body {
		.face {
			border: 2px solid rgb(208, 205, 205);
		}
	}

	@media (prefers-color-scheme: light) {
		.face {
			border: 2px solid black;
		}
	}

	.front {
		transform: translateZ(12.5px);
	}

	.back {
		transform: translateZ(-12.5px) rotateY(180deg);
	}

	.left {
		transform: translateX(-12.5px) rotateY(-90deg);
	}

	.right {
		transform: translateX(12.5px) rotateY(90deg);
	}

	.top {
		transform: translateY(-12.5px) rotateX(90deg);
	}

	.bottom {
		transform: translateY(12.5px) rotateX(-90deg);
	}
</style>
