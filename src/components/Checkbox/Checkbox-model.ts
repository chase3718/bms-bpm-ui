import { BaseProps } from "../../model";
import { InputProps } from "../Input/Input-model";
import { LabelProps } from "../Label/Label-model";

/**
 * @interface CheckboxProps
 * @description Checkbox component props
 */
export interface CheckboxProps extends BaseProps, InputProps, LabelProps {
	/**
	 * @property fieldAlign
	 * @description Specifies the alignment of the field
	 * @type "left" | "right"
	 * @required No
	 * @example fieldAlign="center"
	 * @default "left"
	 */
	fiedldAlign?: "left" | "right";
	/**
	 * @property labelPosition
	 * @description Specifies the position of the label
	 * @type "left" | "top" | "right" | "bottom"
	 * @required No
	 * @example labelPosition="top"
	 * @default "top"
	 */
	labelPosition?: "left" | "top" | "right" | "bottom";
	/**
	 * @property labelWidth
	 * @description Specifies the width of the label
	 * @type string
	 * @required No
	 * @example labelWidth="100px"
	 * @default undefined
	 */
	labelWidth?: string;
	/**
	 * @property labelAlign
	 * @description Specifies the alignment of the label
	 * @type "left" | "center" | "right"
	 * @required No
	 * @example labelAlign="center"
	 * @default "left"
	 */
	labelAlign?: "left" | "center" | "right";
	/**
	 * @property labelText
	 * @description Specifies the text of the label
	 * @type string
	 * @required No
	 * @example labelText="Label"
	 * @default undefined
	 */
	labelText?: string;
	/**
	 * @property onClick
	 * @description Specifies the function to be called when the checkbox is clicked
	 * @type (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
	 * @required No
	 * @example onClick={(event) => console.log(event)}
	 * @default undefined
	 * @remarks The event is the React.MouseEvent<HTMLDivElement, MouseEvent> type
	 */
	onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export type RCCheckboxElementProps =
	| (Partial<HTMLDivElement> & {
			focus: () => void;
			getValue: () => string;
			setValue: (value: string) => void;
	  })
	| null;
