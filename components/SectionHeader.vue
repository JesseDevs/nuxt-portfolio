<template>
	<section-header :class="sectionHeaderClass">
		<div class="line"></div>
		<h2 class="loud-voice">
			<span class="title"> {{ title }}<span>.</span> </span>
		</h2>
	</section-header>
</template>

<script setup>
	const props = defineProps({
		title: String,
		dir: {
			type: String,
			default: 'r',
		},
	});

	const sectionHeaderClass = computed(() => ({
		sectionHeader: true,
		'flex-row': props.dir === 'r',
		'flex-row-reverse': props.dir === 'rr',
	}));
</script>

<style scoped lang="scss">
	section-header {
		display: flex;
		align-items: center;
		gap: 1.2rem;
		margin-bottom: 2.4rem;
	}

	.title {
		text-align: end;

		span {
			color: var(--brand);
		}
	}

	.line {
		width: 100%;
		height: 1px;
		background: var(--text);
		opacity: 0.3;
	}

	.flex-row-reverse {
		flex-direction: row-reverse;
	}
</style>
