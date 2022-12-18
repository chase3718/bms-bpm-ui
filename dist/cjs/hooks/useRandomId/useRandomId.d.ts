/**
 * @function useRandomId
 * @param {string[]} [prefix, suffix]
 * @description Generates a random id
 * @returns {string}
 * @example const [id, generateId] = useRandomId(['prefix', 'suffix']); // id = 'prefix1234567890suffix'
 */
export declare const useRandomId: ([prefix, suffix]?: string[]) => string;
