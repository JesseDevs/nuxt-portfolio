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

	return {
		mainMenuOpen,
		menuClass,
		toggleMainMenu,
		closeMenu,
	};
});
