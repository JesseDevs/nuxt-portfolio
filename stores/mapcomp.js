import { defineStore } from 'pinia';
import LandingHeading from '~/components/LandingHeading.vue';

export const useComponentMap = defineStore('compMap', function () {
	const getComponent = (moduleName) => {
		return componentMap[moduleName] || null;
	};

	const componentMap = {
		LandingHeading,
	};

	return {
		componentMap,
		getComponent,
	};
});
