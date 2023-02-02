import React from "react";
import { InputProps } from "./Input-model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import "./style.scss";

console.log("Input.tsx");

/**
 * @function Input
 * @param {InputProps} props
 * @returns {JSX.Element} Input component
 * @description Input component
 * @example <Input id="input" className="input" icon={faSearch} iconPosition="left" iconOnClick={() => console.log('icon clicked')} />
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			// Default Props
			// alias,
			className,
			// children,
			height,
			hidden,
			id,
			maxHeight,
			maxWidth,
			minHeight,
			minWidth,
			margin,
			padding,
			setValue,
			styles,
			value,
			width,

			// Input Props
			alt,
			autoComplete = "off",
			autoFocus = false,
			checked = false,
			disabled = false,
			form,
			icon,
			iconOnClick,
			iconPosition = "right",
			max,
			maxLength,
			min,
			minLength,
			multiple = false,
			name,
			onChange,
			onKeyDown,
			pattern,
			placeholder,
			readOnly = false,
			required = false,
			size,
			step,
			type = "text",
		}
	) => {
		const inputProps = {
			alt,
			autoComplete,
			autoFocus,
			checked,
			disabled,
			form,
			hidden,
			id,
			max,
			maxLength,
			min,
			minLength,
			multiple,
			name,
			onChange,
			onKeyDown,
			pattern,
			placeholder,
			readOnly,
			required,
			size,
			step,
			type,
			value,
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
			padding,
		};

		const style = Object.entries(styleProps).reduce((acc, [key, value]) => {
			if (value) acc[key] = value;
			return acc;
		}, {} as any);

		const Icon = (icon: IconDefinition) => {
			return (
				<i
					onClick={iconOnClick}
					className={`type-input-icon${iconOnClick ? " button" : ""}`}
				>
					<FontAwesomeIcon icon={icon} />
				</i>
			);
		};

		const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
			if (onChange) onChange(e.target.value, value, e);
			if (setValue) setValue(e.target.value);
		};

		return (
			<div
				style={style}
				className={`type-input ${className ? className : ""} ${
					hidden ? "hidden" : ""
				}`}
				hidden={hidden}
			>
				{icon && iconPosition === "left" && Icon(icon)}
				<input
					{...inputProps}
					onChange={(e) => {
						handleInput(e);
					}}
				></input>
				{icon && iconPosition === "right" && Icon(icon)}
			</div>
		);
	}
);

Input.displayName = "Input";
