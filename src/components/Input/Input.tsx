import React, {
	useCallback,
	useImperativeHandle,
	useRef,
	useState,
} from "react";
import { InputProps, RCInputElementProps } from "./Input-model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import "./style.scss";

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

			// Input Props
			alt,
			autoComplete = "off",
			autoFocus = false,
			checked = false,
			defaultValue,
			disabled = false,
			form,
			icon,
			iconPosition = "right",
			inputSetter,
			min,
			minLength,
			max,
			maxLength,
			multiple = false,
			name,
			pattern,
			placeholder,
			readOnly = false,
			required = false,
			size,
			step,
			type = "text",
			iconOnClick,
			onChange,
			onKeyDown,
		},
		ref
	) => {
		const [value, setValue] = useState<string | number | string[] | undefined>(
			defaultValue
		);
		const inputRef = useRef<HTMLInputElement>(null);
		const containerRef = useRef<HTMLDivElement>(null);

		const inputProps = {
			id,
			alt,
			autoComplete,
			autoFocus,
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
			value: defaultValue,
			onChange,
			onKeyDown,
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

		useImperativeHandle(ref, () => ({
			focus: () => inputRef.current?.focus(),
			getValue: () => inputRef.current?.value || "",
			setValue: (value: string | number | string[]) => setValue(value),
		}));

		const handleInput = useCallback(
			(ev: React.ChangeEvent<HTMLInputElement>) => {
				const val = ev.target.value.slice(0, maxLength);
				onChange?.(val, value, ev.target);
				// inputSetter?.(val);
				// setValue(val);
				// setVals(val);
			},
			[value]
		);

		const setVals = (val) => {
			inputSetter?.(val);
			setValue(val);
		};

		const useIcon = (icon: IconDefinition) => {
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
				className={`type-input${className ? " " + className : ""}`}
				ref={containerRef}
				hidden={hidden}
			>
				{icon && iconPosition === "left" && useIcon(icon)}
				<input {...inputProps} onChange={handleInput} ref={inputRef}></input>
				{icon && iconPosition === "right" && useIcon(icon)}
			</div>
		);
	}
);

Input.displayName = "Input";
