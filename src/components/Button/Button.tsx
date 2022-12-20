import React from "react";
import { ButtonProps, RCButtonElementProps } from "./Button-model";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @function Button
 * @param {ButtonProps} props
 * @returns {JSX.Element} Button component
 * @description Button component
 * @example <Button id="Button" className="Button" icon={faSearch} iconPosition="left" iconOnClick={() => console.log('icon clicked')} />
 */
export const Button = React.forwardRef<RCButtonElementProps, ButtonProps>(
	(
		{
			// Default Props
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

			// Button Props
			alt,
			autoFocus,
			color,
			disabled,
			form,
			formAction,
			formMethod,
			formNoValidate,
			formTarget,
			icon,
			iconPosition = "right",
			name,
			text,
			type = "button",
			value,
			onClick,
		},
		ref
	) => {
		const ButtonProps = {
			id,
			alt,
			autoFocus,
			disabled,
			form,
			formAction,
			formMethod,
			formNoValidate,
			formTarget,
			name,
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
		};

		const style = Object.entries(styleProps).reduce((acc, [key, value]) => {
			if (value) acc[key] = value;
			return acc;
		}, {} as any);

		return (
			<button
				style={{ ...style }}
				className={`type-button${className ? " " + className : ""}${
					color ? " " + color : ""
				}`}
				{...ButtonProps}
				onClick={onClick}
			>
				{icon && iconPosition === "left" && (
					<FontAwesomeIcon style={{ marginRight: "5px" }} icon={icon} />
				)}
				{text && <span>{text}</span>}
				{children}
				{icon && iconPosition === "right" && (
					<FontAwesomeIcon style={{ marginLeft: "5px" }} icon={icon} />
				)}
			</button>
		);
	}
);

Button.displayName = "Button";
