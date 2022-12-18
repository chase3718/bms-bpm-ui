import { useState } from 'react';

/**
 * @function useRandomId
 * @param {string[]} [prefix, suffix]
 * @description Generates a random id
 * @returns {string}
 * @example const [id, generateId] = useRandomId(['prefix', 'suffix']); // id = 'prefix1234567890suffix'
 */

export const useRandomId = (
	[prefix = '', suffix = '']: string[] = ['', '']
) => {
	const [id, setId] = useState<string>(
		prefix + Math.random().toString(36) + suffix
	);

	const generateId = () => {
		setId(prefix + Math.random().toString(36) + suffix);
	};

	return id;
};
