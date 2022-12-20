
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

		const LabelProps = {
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
				className={`type-Label${className ? " " + className : ""}`}
			>
				<Label {...LabelProps}></Label>
			</span>
		);
	}
);

Label.displayName = "Label";
