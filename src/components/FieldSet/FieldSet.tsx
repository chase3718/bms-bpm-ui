import React from "react";
import { FieldSetProps, RCFieldSetElementProps } from "./FieldSet-model";
import "./style.scss";

/**
 * @function FieldSet
 * @param {FieldSetProps} props
 * @returns {JSX.Element} FieldSet component
 * @description FieldSet component
 * @example <FieldSet id="FieldSet" className="FieldSet" icon={faSearch} iconPosition="left" iconOnClick={() => console.log('icon clicked')} />
 */
export const FieldSet = React.forwardRef<RCFieldSetElementProps, FieldSetProps>(
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
			styles,

			alt,
		},
		ref
	) => {
		const FieldSetProps = {
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

		return <fieldset {...FieldSetProps}>{children}</fieldset>;
	}
);

FieldSet.displayName = "FieldSet";
