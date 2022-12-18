import { useState } from 'react';

/**
 * @hook useInput
 * @description A hook to handle input values. Returns the value and a function to set the value.
 * @param defValue {string | number | string[] | undefined} // The default value of the input
 */
export const useInput = (
	defValue: string | number | string[] | undefined
): [
	string | number | string[] | undefined,
	(newValue: string | number | string[] | undefined) => void
] => {
	const [value, setValue] = useState<string | number | string[] | undefined>(
		defValue
	);

	const setInput = (newValue: string | number | string[] | undefined) => {
		setValue(newValue);
	};
	return [value, setInput];
};
