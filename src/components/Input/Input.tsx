import React from "react";
import { InputProps, RCInputElementProps } from "./Input-model";
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
export const Input = React.forwardRef<RCInputElementProps, InputProps>(
	(
		{
			// Default Props
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
			styles,
			width,

			// Input Props
			alt,
			autoComplete = "off",
			autoFocus = false,
			checked = false,
			defaultValue,
			disabled = false,
			form,
			icon,
			iconOnClick,
			iconPosition = "right",
			valueSetter,
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
		},
		ref
	) => {
		// const [value, setValue] = useState<string | number | string[] | undefined>(
		// 	defaultValue
		// );
		// const inputRef = useRef<HTMLInputElement>(null);
		// const containerRef = useRef<HTMLDivElement>(null);

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
			value: defaultValue,
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

		return (
			<div
				style={style}
				className={`type-input ${className ? className : ""} ${
					hidden ? "hidden" : ""
				}}`}
				// ref={containerRef}
				hidden={hidden}
			>
				{icon && iconPosition === "left" && Icon(icon)}
				<input
					{...inputProps}
					// onChange={handleInput}
					onChange={(e) => {
						if (valueSetter) valueSetter(e.target.value);
					}}
					// ref={inputRef}
				></input>
				{icon && iconPosition === "right" && Icon(icon)}
			</div>
		);
	}
);

Input.displayName = "Input";
