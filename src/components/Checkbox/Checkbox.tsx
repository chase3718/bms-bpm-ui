
import React from "react";
import { CheckboxProps, RCCheckboxElementProps } from "./Checkbox-model";
import "./style.scss";

/**
 * @function Checkbox
 * @param {CheckboxProps} props
 * @returns {JSX.Element} Checkbox component
 * @description Checkbox component
 * @example <Checkbox id="Checkbox" className="Checkbox" icon={faSearch} iconPosition="left" iconOnClick={() => console.log('icon clicked')} />
 */
export const Checkbox = React.forwardRef<RCCheckboxElementProps, CheckboxProps>(
	(
		{
			id,
			className,
			alias,
			children,
			width,
			minWidth,
			maxWidth,
			height,
			minHeight,
			maxHeight,
			styles,

			alt,
		},
		ref
	) => {

		const CheckboxProps = {
			id,
			alt,
		};
		const styleProps = {
			...styles,
			width,
			minWidth,
			maxWidth,
			height,
			minHeight,
			maxHeight,
		};

		const style = Object.entries(styleProps).reduce((acc, [key, value]) => {
			if (value) acc[key] = value;
			return acc;
		}, {} as any);

		return (
			<span
				style={style}
				className={`type-Checkbox${className ? " " + className : ""}`}
			>
				<Checkbox {...CheckboxProps}></Checkbox>
			</span>
		);
	}
);

Checkbox.displayName = "Checkbox";
