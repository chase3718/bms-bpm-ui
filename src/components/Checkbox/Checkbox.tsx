import React, { ChangeEvent, useCallback } from "react";
import { CheckboxProps, RCCheckboxElementProps } from "./Checkbox-model";
import "./style.scss";
import { Label } from "../Label";

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
			hidden,
			minHeight,
			maxHeight,
			margin,
			styles,
			value,
			setValue,

			labelPosition = "left",
			labelAlign = "left",
			labelWidth,

			// Label props
			noSemicolon,
			labelText,

			alt,
			autoFocus = false,
			checked = false,
			disabled = false,
			form,
			name,
			readOnly = false,
			required = false,
			onChange,
			onClick,
		},
		ref
	) => {
		const CheckboxProps = {
			id,
			alt,
			autoFocus,
			defaultChecked: checked,
			disabled,
			form,
			hidden,
			name,
			readOnly,
			required,
			value,
		};

		const labelProps = {
			width: labelWidth,
			hidden,
			htmlFor: id,
			noSemicolon,
			text: labelText,
			labelPosition,
			styles: {},
		};

		const styleProps = {
			...styles,
			width,
			minWidth,
			maxWidth,
			height,
			minHeight,
			maxHeight,
			margin,
		};

		if (hidden) {
			styleProps.display = "none";
		}

		const style = Object.entries(styleProps).reduce((acc, [key, value]) => {
			if (value) acc[key] = value;
			return acc;
		}, {} as any);

		// const clickHandler = (e: ChangeEvent<HTMLInputElement>) => {
		// 	console.log("Checkbox clicked");
		// 	if (onClick) onClick(e);
		// };

		const changeHandler = useCallback(
			(ev: React.ChangeEvent<HTMLInputElement>) => {
				// const val = ev.target.value;
				// onChange?.(val, value, ev.target);
				// setValue(val);
			},
			[value]
		);

		return (
			<Label
				className={`type-checkbox${className ? " " + className : ""}`}
				{...labelProps}
			>
				<input
					onClick={(e) => {
						// clickHandler(e);
					}}
					onChange={(e) => {
						changeHandler(e);
					}}
					type="checkbox"
					{...CheckboxProps}
					style={style}
				/>
			</Label>
		);
	}
);

Checkbox.displayName = "Checkbox";
