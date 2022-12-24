import React, { useRef } from "react";
import { LabelProps } from "./Label-model";
import "./style.scss";

/**
 * @function Label
 * @param {LabelProps} props
 * @returns {JSX.Element} Label component
 * @description Label component
 * @example <Label id="Label" className="Label" icon={faSearch} iconPosition="left" iconOnClick={() => console.log('icon clicked')} />
 */
export const Label = ({
	// Base props
	alias,
	className,
	children,
	height,
	hidden,
	id,
	maxHeight,
	maxWidth,
	minHeight,
	minWidth,
	margin,
	padding,
	styles,
	width,

	// Label props
	htmlFor,
	noSemicolon,
	text,
	labelPosition = "top",
}: LabelProps) => {
	const label = useRef<HTMLLabelElement>(null);

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
		margin,
		padding,
	};

	const style = Object.entries(styleProps).reduce((acc, [key, value]) => {
		if (value) acc[key] = value;
		return acc;
	}, {} as any);

	return (
		<label
			ref={label}
			{...LabelProps}
			className={`type-label ${className === undefined ? "" : className} ${
				"label-" + labelPosition
			} ${hidden ? "hidden" : ""}`}
			style={style}
		>
			{text && text}
			{!noSemicolon && ":"}
			{children}
		</label>
	);
};
