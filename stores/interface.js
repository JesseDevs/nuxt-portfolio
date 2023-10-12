import { defineStore } from 'pinia';

export const useInterfaceStore = defineStore('interface', function () {
	const colorMode = useColorMode({
		initialValue: 'dark',
	});

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
	const selectedTheme = ref(null);

	onMounted(() => {
		const savedTheme = localStorage.getItem('nuxt-color-mode');
		if (savedTheme) {
			selectedTheme.value = savedTheme;
		} else {
			selectedTheme.value = 'dark';
		}
	});

	const setSelectedTheme = (theme) => {
		if (theme !== selectedTheme.value) {
			colorMode.preference = theme;
			selectedTheme.value = theme;
			localStorage.setItem('nuxt-color-mode', theme);
		}
	};

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
