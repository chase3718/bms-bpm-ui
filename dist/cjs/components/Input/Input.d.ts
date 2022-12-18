import React from "react";
import { InputProps } from "./input-model";
/**
 * @function Input
 * @param {InputProps} props
 * @returns {JSX.Element} Input component
 * @description Input component
 * @example <Input id="input" className="input" icon={faSearch} iconPosition="left" iconOnClick={() => console.log('icon clicked')} />
 */
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<Partial<HTMLInputElement> & {
    focus: () => void;
    getValue: () => string;
    setValue: (value: string) => void;
}>>;
