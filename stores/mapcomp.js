import { defineStore } from 'pinia';
import LandingHeading from '~/components/modules/LandingHeading.vue';
import AboutCard from '~/components/modules/AboutCard.vue';
import ProjectSection from '~/components/modules/ProjectSection.vue';
import ContactPage from '~/components/modules/ContactPage.vue';

export const useComponentMap = defineStore('compMap', function () {
	const getComponent = (moduleName) => {
		return componentMap[moduleName] || null;
	};

	const componentMap = {
		LandingHeading,
		AboutCard,
		ProjectSection,
		ContactPage,
	};

	return {
		componentMap,
		getComponent,
	};
});
