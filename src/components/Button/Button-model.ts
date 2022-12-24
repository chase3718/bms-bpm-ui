import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { BaseProps } from "../../model";

/**
 * @interface ButtonProps
 * @description Button component props
 */
export interface ButtonProps extends BaseProps {
	/**
	 * @property alt
	 * @description Specifies an alternate text for an image, if the image cannot be displayed
	 * @type string
	 * @required No
	 * @example alt="Alternate text"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-alt
	 */
	alt?: string;
	/**
	 * @property autoFocus
	 * @description Specifies that a button should automatically get focus when the page loads
	 * @type boolean
	 * @required No
	 * @example autoFocus={true}
	 * @default false
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-autofocus
	 */
	autoFocus?: boolean;
	/**
	 * @property disabled
	 * @description Specifies that a button should be disabled
	 * @type boolean
	 * @required No
	 * @example disabled={true}
	 * @default false
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-disabled
	 */
	disabled?: boolean;
	/**
	 * @property color
	 * @description Specifies the color of a button
	 * @type "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link"
	 * @required No
	 * @example color="primary"
	 * @default "secondary"
	 */
	color?:
		| "primary"
		| "secondary"
		| "success"
		| "danger"
		| "warning"
		| "info"
		| "light"
		| "dark"
		| "link"
		| "bms";
	/**
	 * @property form
	 * @description Specifies one or more forms the button belongs to
	 * @type string
	 * @required No
	 * @example form="form1"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-form
	 */
	form?: string;
	/**
	 * @property formAction
	 * @description Specifies where to send the form-data when a form is submitted. Only for type="submit"
	 * @type string
	 * @required No
	 * @example formAction="https://www.w3schools.com/action_page.php"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formaction
	 */
	formAction?: string;
	/**
	 * @property formMethod
	 * @description Specifies how to send the form-data (which HTTP method to use). Only for type="submit"
	 * @type string
	 * @required No
	 * @example formMethod="get"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formmethod
	 */
	formMethod?: string;
	/**
	 * @property formNoValidate
	 * @description Specifies that the form-data should not be validated on submission. Only for type="submit"
	 * @type boolean
	 * @required No
	 * @example formNoValidate={true}
	 * @default false
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formnovalidate
	 */
	formNoValidate?: boolean;
	/**
	 * @property formTarget
	 * @description Specifies where to display the response after submitting the form. Only for type="submit"
	 * @type string
	 * @required No
	 * @example formTarget="_blank"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formtarget
	 */
	formTarget?: string;
	/**
	 * @property name
	 * @description Specifies the name of a button
	 * @type string
	 * @required No
	 * @example name="button1"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-name
	 */
	name?: string;
	/**
	 * @property icon
	 * @description Specifies the icon to be displayed in the input
	 * @type IconDefinition
	 * @required No
	 * @example icon={faUser}
	 * @default undefined
	 * @see https://fontawesome.com/icons?d=gallery
	 */
	icon?: IconDefinition;
	/**
	 * @property iconPosition
	 * @description Specifies the position of the icon
	 * @type 'left' | 'right'
	 * @required No
	 * @example iconPosition="left"
	 * @default "right"
	 */
	iconPosition?: "left" | "right";
	/**
	 * @property text
	 * @description Specifies the text to be displayed in the button
	 * @type string
	 * @required No
	 * @example text="Submit"
	 * @default undefined
	 */
	text?: string;
	/**
	 * @property textColor
	 * @description Specifies the color of the text
	 * @type string
	 * @required No
	 * @example textColor="#ffffff"
	 * @default undefined
	 */
	textColor?: string;
	/**
	 * @property type
	 * @description Specifies the type of button
	 * @type "submit" | "rest" | "button"
	 * @required No
	 * @example type="submit"
	 * @default "button"
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type
	 */
	type?: "submit" | "reset" | "button";
	/**
	 * @property value
	 * @description Specifies an initial value for a button
	 * @type string
	 * @required No
	 * @example value="Submit"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-value
	 */
	value?: string;
	/**
	 * @property onClick
	 * @description Specifies a function to be called when the button is clicked
	 * @type () => void
	 * @required No
	 * @example onClick={() => console.log("Button clicked")}
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-onclick
	 */
	onClick?: () => null;
}

export type RCButtonElementProps =
	| (Partial<HTMLButtonElement> & {
			focus: () => void;
			getValue: () => string;
			setValue: (value: string) => void;
	  })
	| null;
