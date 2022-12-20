import React from "react";
import { LabelProps, RCLabelElementProps } from "./Label-model";
import "./style.scss";

/**
 * @function Label
 * @param {LabelProps} props
 * @returns {JSX.Element} Label component
 * @description Label component
 * @example <Label id="Label" className="Label" icon={faSearch} iconPosition="left" iconOnClick={() => console.log('icon clicked')} />
 */
export const Label = React.forwardRef<RCLabelElementProps, LabelProps>(
	(
		{
			// Base props
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

			// Label props
			htmlFor,
			noSemicolon,
			text,
		},
		ref
	) => {
		const LabelProps = {
			id,
			htmlFor,
			hidden,
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

		if (hidden) {
			styleProps.display = "none";
		}

		const style = Object.entries(styleProps).reduce((acc, [key, value]) => {
			if (value) acc[key] = value;
			return acc;
		}, {} as any);

		return (
			<label
				{...LabelProps}
				// ref={ref}
				className={`type-label ${className === undefined ? "" : className}`}
				style={style}
			>
				{text && text}
				{!noSemicolon && ":"}
				{children}
			</label>
		);
	}
);

Label.displayName = "Label";
