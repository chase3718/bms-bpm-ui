import React from "react";
import { CheckboxProps, RCCheckboxElementProps } from "./Checkbox-model";
import "./style.scss";
import { Label } from "../Label";

/**
 * @function Checkbox
 * @param {CheckboxProps} props
 * @returns {JSX.Element} Checkbox component
 * @description Checkbox component
 * @example <Checkbox id="Checkbox" className="Checkbox" icon={faSearch} iconPosition="left" iconOnClick={() => console.log('icon clicked')} />
 */
export const Checkbox = React.forwardRef<RCCheckboxElementProps, CheckboxProps>(
  ({
    id,
    className,
    // alias,
    children,
    width,
    minWidth,
    maxWidth,
    height,
    hidden,
    minHeight,
    maxHeight,
    margin,
    padding,
    styles,
    value,
    setValue,

    fiedldAlign = "left",
    labelPosition = "left",
    labelAlign = "left",
    labelWidth,

    // Label props
    noSemicolon,
    labelText,

    alt,
    autoFocus = false,
    checked = false,
    disabled = false,
    form,
    name,
    readOnly = false,
    required = false,
    onChange,
    onClick,
  }) => {
    const CheckboxProps = {
      id,
      alt,
      autoFocus,
      defaultChecked: checked,
      disabled,
      form,
      hidden,
      name,
      readOnly,
      required,
      value,
    };

    const labelProps = {
      width: labelWidth,
      hidden,
      htmlFor: id,
      noSemicolon,
      text: children ? children + (labelText ? labelText : "") : labelText,
      labelPosition,
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
      margin,
      padding,
      float: fiedldAlign,
    };

    if (hidden) {
      styleProps.display = "none";
    }

    const style = Object.entries(styleProps).reduce((acc, [key, value]) => {
      if (value) acc[key] = value;
      return acc;
    }, {} as any);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(e.target.value, value, e);
      if (setValue) setValue(e.target.value);
    };

    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
      if (onClick) onClick(e);
    };

    return (
      <Label
        className={`type-checkbox${className ? " " + className : ""}${
          " label-align-" + labelAlign
        }`}
        {...labelProps}
      >
        <input
          onClick={(e) => {
            handleClick(e);
          }}
          onChange={(e) => {
            handleInput(e);
          }}
          type="checkbox"
          {...CheckboxProps}
          style={style}
        />
      </Label>
    );
  }
);

Checkbox.displayName = "Checkbox";
