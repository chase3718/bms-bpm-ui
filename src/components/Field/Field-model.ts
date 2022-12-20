import { BaseProps } from "../../model";
import { InputProps } from "../Input/Input-model";
import { LabelProps } from "../Label/Label-model";

/**
 * @interface FieldProps
 * @description Field component props
 */
export interface FieldProps extends BaseProps, LabelProps, InputProps {
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
	 * @property inputWidth
	 * @description Specifies the width of the input
	 * @type string
	 * @required No
	 * @example inputWidth="100px"
	 * @default undefined
	 */
	inputWidth?: string;
}

export type RCFieldElementProps =
	| (Partial<HTMLElement> & {
			focus: () => void;
			getValue: () => string;
			setValue: (value: string) => void;
	  })
	| null;
