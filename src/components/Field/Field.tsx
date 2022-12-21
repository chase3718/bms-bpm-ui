import React from "react";
import { FieldProps, RCFieldElementProps } from "./Field-model";
import "./style.scss";
import { Label } from "../Label";
import { Input } from "../Input";
import { useRandomId } from "../../hooks";

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
	id = "field-" + useRandomId(),
	maxHeight,
	maxWidth,
	minHeight,
	minWidth,
	value,
	setValue,
	styles,
	width,

	// Field props
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
	const labelProps = {
		width: labelWidth,
		hidden,
		htmlFor: id,
		noSemicolon,
		text: labelText,
		styles: {},
	};

	const inputProps = {
		alt,
		autoFocus,
		id: id,
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

	const styleProps = {
		...styles,
		width,
		minWidth,
		maxWidth,
		height,
		minHeight,
		maxHeight,
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
		<div
			className={`type-field ${"label-" + labelPosition} ${
				"label-align-" + labelAlign
			} ${className || ""}`}
			style={style}
			hidden={hidden}
		>
			<Label {...labelProps}></Label>
			<Input {...inputProps}></Input>
		</div>
	);
};
