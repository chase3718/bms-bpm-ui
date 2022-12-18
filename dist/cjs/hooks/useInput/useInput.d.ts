/**
 * @hook useInput
 * @description A hook to handle input values. Returns the value and a function to set the value.
 * @param defValue {string | number | string[] | undefined} // The default value of the input
 */
export declare const useInput: (defValue: string | number | string[] | undefined) => [string | number | string[], (newValue: string | number | string[] | undefined) => void];
