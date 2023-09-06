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

	const projectModal = ref(false);
	const projectClass = computed(() =>
		projectModal.value ? 'project-modal-open' : 'project-modal-close',
	);

	const closeProjectModal = () => {
		projectModal.value = false;
	};

	useHead({
		bodyAttrs: {
			class: computed(() => {
				if (mainMenuOpen.value || projectModal.value) return 'overflow';

				return '';
			}),
		},
	});

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

	return {
		mainMenuOpen,
		menuClass,
		projectClass,
		toggleMainMenu,
		closeMenu,
		projectModal,
		closeProjectModal,
		selectedTheme,
		setSelectedTheme,
	};
});
