import { BaseProps } from "../../model";

/**
 * @interface LabelProps
 * @description Label component props
 */
export interface LabelProps extends BaseProps {
	/**
	 * @property htmlFor
	 * @description Specifies which form element a label is bound to
	 * @type string
	 * @required No
	 * @example htmlFor="input1"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attr-for
	 */
	htmlFor?: string;
	/**
	 * @property noSemicolon
	 * @description Removes semicolon from the label text
	 * @type boolean
	 * @required No
	 * @example noSemicolon={true}
	 * @default false
	 */
	noSemicolon?: boolean;
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
	 * @property text
	 * @description Label text
	 * @type string
	 * @required No
	 * @example text="Label"
	 * @default undefined
	 */
	text?: string;
}
