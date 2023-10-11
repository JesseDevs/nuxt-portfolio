import { defineStore } from 'pinia';

export const useUtilitiesStore = defineStore('utils', function () {
	function capitalizeWords(str) {
		return str.replace(/\b\w/g, (char) => char.toUpperCase());
	}

	function removeDuplicates(arr) {
		return arr.filter((item, index) => arr.indexOf(item) === index);
	}

	return { capitalizeWords, removeDuplicates };
});
