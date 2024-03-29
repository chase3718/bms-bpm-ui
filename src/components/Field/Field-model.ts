import { BaseProps } from "../../model";
import { InputProps } from "../Input/Input-model";
import { LabelProps } from "../Label/Label-model";

/**
 * @interface FieldProps
 * @description Field component props
 */
export interface FieldProps extends BaseProps, LabelProps, InputProps {
	/**
	 * @property fieldAlign
	 * @description Specifies the alignment of the field
	 * @type "left" | "right"
	 * @required No
	 * @example fieldAlign="center"
	 * @default "left"
	 */
	fieldAlign?: "left" | "right";
	/**
	 * @property labelPosition
	 * @description Specifies the position of the label
	 * @type "left" | "top"
	 * @required No
	 * @example labelPosition="top"
	 * @default "top"
	 */
	labelPosition?: "left" | "top";
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
	 * @property inputWidth
	 * @description Specifies the width of the input
	 * @type string
	 * @required No
	 * @example inputWidth="100px"
	 * @default undefined
	 */
	inputWidth?: string;
}
