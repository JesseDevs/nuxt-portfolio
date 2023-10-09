import { defineStore } from 'pinia';

export const useInterfaceStore = defineStore('interface', function () {
	const mainMenuOpen = ref(false);
	const menuClass = computed(() => (mainMenuOpen.value ? 'menu-open' : 'menu-close'));

	const toggleMainMenu = () => {
		mainMenuOpen.value = !mainMenuOpen.value;
	};

	const closeMenu = () => {
		mainMenuOpen.value = false;
	};

	// modal

	const modal = computed(() => {
		if (formModal.value) {
			return true;
		}

		return false;
	});

	const formModal = ref(false);
	const toggleFormModal = () => {
		formModal.value = !formModal.value;
	};

	const forceModalClose = () => {
		formModal.value = false;
	};

	//

	useHead({
		bodyAttrs: {
			class: computed(() => {
				if (mainMenuOpen.value || formModal.value) return 'overflow';

				return '';
			}),
		},
	});

	const selectedTheme = ref('dark');
	const setSelectedTheme = (theme) => {
		selectedTheme.value = theme;
		localStorage.setItem('selectedTheme', theme);
	};

	onMounted(() => {
		const savedTheme = localStorage.getItem('selectedTheme');
		if (savedTheme) {
			selectedTheme.value = savedTheme;
		}
	});

	useHead({
		bodyAttrs: {
			class: computed(() => selectedTheme.value),
		},
	});

	return {
		mainMenuOpen,
		menuClass,
		toggleMainMenu,
		closeMenu,
		selectedTheme,
		setSelectedTheme,
		modal,
		formModal,
		toggleFormModal,
		forceModalClose,
	};
});
