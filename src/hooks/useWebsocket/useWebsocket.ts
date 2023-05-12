import { useState } from 'react';

/**
 * @hook useWebsocket
 * @description A hook to manage websocket state
 */
export const useWebsocket = (
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
