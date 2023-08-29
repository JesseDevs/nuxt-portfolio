<template>
	<div class="box-container">
		<a href="/">
			<div class="cube">
				<div class="face top"></div>
				<div class="face bottom"></div>
				<div class="face left"></div>
				<div class="face right"></div>
				<div class="face front"></div>
				<div class="face back"></div>
			</div>
		</a>
	</div>
</template>

<script setup></script>

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

		a {
			cursor: auto;
		}
	}

	.cube {
		position: relative;
		width: 30px;
		height: 30px;
		transform-style: preserve-3d;
		animation: turn 5s linear infinite;
	}
	.cube:hover {
		animation-play-state: paused;
	}

	.face {
		width: 25px;
		height: 25px;
		background: rgb(var(--brand-rgb) / 0.5);
		border: 3px solid var(--brand);
		position: absolute;
		opacity: 0.5;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: Arial, sans-serif;
		font-size: 2rem;
		transition: transform 500ms;
	}

	.front {
		transform: translateZ(12px);
	}

	.back {
		transform: translateZ(-12px) rotateY(180deg);
	}

	.left {
		transform: translateX(-12px) rotateY(-90deg);
	}

	.right {
		transform: translateX(12px) rotateY(90deg);
	}

	.top {
		transform: translateY(-12px) rotateX(90deg);
	}

	.bottom {
		transform: translateY(12px) rotateX(-90deg);
	}
</style>
