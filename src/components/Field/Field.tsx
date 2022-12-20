
import React from "react";
import { FieldProps, RCFieldElementProps } from "./Field-model";
import "./style.scss";

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

		const FieldProps = {
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
				className={`type-Field${className ? " " + className : ""}`}
			>
				<Field {...FieldProps}></Field>
			</span>
		);
	}
);

Field.displayName = "Field";
