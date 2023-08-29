<script setup>
	const selectedTheme = ref('dark');
	const setSelectedTheme = (theme) => {
		selectedTheme.value = theme;
	};

	useHead({
		bodyAttrs: {
			class: computed(() => {
				return selectedTheme.value;
			}),
		},
	});
</script>

<template>
	<div :class="`theme-toggle ${selectedTheme}`">
		<button class="light-button" @click="setSelectedTheme('light')">
			<Icon name="ph:sun-bold" size="21" color="#fff" />
			<span class="relative z-10">Light</span>
		</button>
		<button class="dark-button" @click="setSelectedTheme('dark')">
			<Icon name="material-symbols:dark-mode-outline" size="21" color="#fff" />
			<span class="relative z-10">Dark</span>
		</button>
		<div :class="showSelection"></div>
	</div>
</template>

<style lang="scss">
	.theme-toggle {
		display: flex;
		position: relative;
		align-items: center;
		border-radius: 9999px;
		width: fit-content;
	}
	.spring {
		border-radius: 9999px;
		width: 50%;
		height: 100%;
		background-image: linear-gradient(to right, blue red);

		background-color: #4f46e5;
	}

	.showSelection {
		display: flex;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 0;
	}

	.dark {
		button {
			color: white;
		}
		.showSelection {
			justify-items: end;
		}

		.light-button {
			color: red;
		}
	}

	.light {
		.showSelection {
			justify-items: start;
		}
		.dark-button {
			color: red;
		}
	}
</style>
