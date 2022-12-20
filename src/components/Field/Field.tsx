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
export const Field = React.forwardRef<RCFieldElementProps, FieldProps>(
	(
		{
			// Base props
			id = "field-" + useRandomId(),
			autoFocus,
			className,
			disabled,
			alias,
			children,
			width,
			minWidth,
			maxWidth,
			height,
			minHeight,
			maxHeight,
			styles,

			// Field props
			labelPosition = "top",
			labelAlign = "left",
			labelWidth,
			inputWidth,

			// Label props
			noSemicolon,
			labelText,

			// Input props
			alt,
			autoComplete,
			checked,
			form,
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
			defaultValue,
			icon,
			iconPosition,
			iconOnClick,
			onChange,
			onKeyDown,
		},
		ref
	) => {
		const labelProps = {
			width: labelWidth,
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
			defaultValue,
			icon,
			iconPosition,
			iconOnClick,
			onChange,
			onKeyDown,
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

		const style = Object.entries(styleProps).reduce((acc, [key, value]) => {
			if (value) acc[key] = value;
			return acc;
		}, {} as any);

		return (
			<span
				className={`type-field ${"label-" + labelPosition} ${
					"label-align-" + labelAlign
				} ${className || ""}`}
				style={style}
			>
				<Label {...labelProps}></Label>
				<Input {...inputProps}></Input>
			</span>
		);
	}
);

Field.displayName = "Field";
