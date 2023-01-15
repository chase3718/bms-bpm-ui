import React, { useState } from "react";
import { FieldSetProps, RCFieldSetElementProps } from "./FieldSet-model";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button";

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
			margin,
			padding,
			styles,

			alt,
			form,
			title,
			collapsed,
			collapsable = true,
		},
		ref
	) => {
		const [isCollapsed, setCollapsed] = useState(collapsed);
		const [icon, setIcon] = useState(collapsed ? faPlus : faMinus);

		const FieldSetProps = {
			id,
			alt,
			form,
			title,
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

		const collapseHandler = () => {
			setCollapsed(!isCollapsed);
			setIcon(!isCollapsed ? faPlus : faMinus);
		};

		return (
			<fieldset
				className={`type-fieldset${className ? " " + className : ""}${hidden ? " hidden" : ""}`}
				{...FieldSetProps}
			>
				{(title || collapsable) && (
					<legend className={`type-legend`}>
						{collapsable && (
							<Button
								onClick={collapseHandler}
								className="type-collapse-button"
								color="secondary"
							>
								<FontAwesomeIcon icon={icon}></FontAwesomeIcon>
							</Button>
						)}
						<b>{title}</b>
					</legend>
				)}
				{!isCollapsed && children}
			</fieldset>
		);
	}
);

FieldSet.displayName = "FieldSet";
