import React from "react";
import { FieldProps } from "./Field-model";
import "./style.scss";
import { Label } from "../Label";
import { Input } from "../Input";

/**
 * @function Field
 * @param {FieldProps} props
 * @returns {JSX.Element} Field component
 * @description Field component
 * @example <Field id="Field" className="Field" icon={faSearch} iconPosition="left" iconOnClick={() => console.log('icon clicked')} />
 */
export const Field = ({
	// Base props
	alias,
	autoFocus,
	children,
	className,
	disabled,
	height,
	hidden,
	id,
	maxHeight,
	maxWidth,
	minHeight,
	minWidth,
	margin,
	padding,
	value,
	setValue,
	styles,
	width,

	// Field props
	fieldAlign = "left",
	inputWidth,
	labelAlign = "left",
	labelPosition = "top",
	labelWidth,

	// Label props
	labelText,
	noSemicolon,

	// Input props
	alt,
	autoComplete,
	checked,
	form,
	icon,
	iconOnClick,
	iconPosition,
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
}: FieldProps) => {
	const inputProps = {
		alt,
		autoFocus,
		id,
		width: "100%",
		autoComplete,
		checked,
		disabled,
		form,
		hidden,
		min,
		minLength,
		max,
		maxLength,
		multiple,
		name,
		pattern,
		placeholder,
		readOnly,
		required,
		size,
		step,
		type,
		icon,
		iconPosition,
		iconOnClick,
		onChange,
		onKeyDown,
		styles: {},
		value,
		setValue,
	};
	const labelProps = {
		width: labelWidth,
		hidden,
		htmlFor: id,
		noSemicolon,
		text: labelText,
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
		padding,
		float: fieldAlign,
	};

	if (inputWidth) {
		if (labelPosition === "left") {
			styleProps.gridTemplateColumns = `max-content ${inputWidth} auto`;
		} else if (labelPosition === "top") {
			inputProps.width = inputWidth;
		}
	} else {
		if (labelPosition === "top") {
			styleProps.gridTemplateRows = "auto 1fr";
		}
	}

	if (labelAlign === "left") {
		labelProps.styles = { justifyContent: "flex-start" };
	} else if (labelAlign === "right") {
		labelProps.styles = { justifyContent: "flex-end" };
	} else if (labelAlign === "center") {
		labelProps.styles = { justifyContent: "center" };
	}

	if (hidden) {
		styleProps.display = "none";
	}

	const style = Object.entries(styleProps).reduce((acc, [key, value]) => {
		if (value) acc[key] = value;
		return acc;
	}, {} as any);

	return (
		<Label
			className={`type-field${" label-" + labelPosition}${
				" label-align-" + labelAlign
			}${className ? " " + className : ""}`}
			{...labelProps}
			styles={style}
			hidden={hidden}
		>
			<Input {...inputProps}></Input>
		</Label>
	);
};
