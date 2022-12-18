import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { BaseProps } from "../../model";

type InputType =
	| "color"
	| "date"
	| "datetime-local"
	| "email"
	| "month"
	| "number"
	| "password"
	| "range"
	| "search"
	| "tel"
	| "text"
	| "time"
	| "url"
	| "week";

/**
 * @interface InputProps
 * @description Input component props
 */
export interface InputProps extends BaseProps {
	/**
	 * @property alt
	 * @description Specifies an alternate text for an image, if the image cannot be displayed
	 * @type string
	 * @required No
	 * @example alt="Alternate text"
	 * @default undefined
	 * @see https://www.w3schools.com/tags/att_input_alt.asp
	 */
	alt?: string;
	/**
	 * @property autoComplete
	 * @description Specifies whether an <input> element should have autocomplete enabled
	 * @type string
	 * @required No
	 * @example autoComplete="on"
	 * @default "off"
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autocomplete
	 */
	autoComplete?: string;
	/**
	 * @property autoFocus
	 * @description Specifies that an <input> element should automatically get focus when the page loads
	 * @type boolean
	 * @required No
	 * @example autoFocus={true}
	 * @default false
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus
	 */
	autoFocus?: boolean;
	/**
	 * @property checked
	 * @description Specifies that an <input> element should be pre-selected when the page loads (for type="checkbox" or type="radio")
	 * @type boolean
	 * @required No
	 * @example checked={true}
	 * @default false
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-checked
	 */
	checked?: boolean;
	/**
	 * @property disabled
	 * @description Specifies that an <input> element should be disabled
	 * @type boolean
	 * @required No
	 * @example disabled={true}
	 * @default false
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-disabled
	 */
	disabled?: boolean;
	/**
	 * @property form
	 * @description Specifies one or more forms the <input> element belongs to
	 * @type string
	 * @required No
	 * @example form="form1"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-form
	 */
	form?: string;
	/**
	 * @property min
	 * @description Specifies the minimum value for an <input> element
	 * @type number
	 * @required No
	 * @example min={1}
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-min
	 */
	min?: number;
	/**
	 * @property minLength
	 * @description Specifies the minimum number of characters allowed in an <input> element
	 * @type number
	 * @required No
	 * @example minLength={1}
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-minlength
	 */
	minLength?: number;
	/**
	 * @property max
	 * @description Specifies the maximum value for an <input> element
	 * @type number
	 * @required No
	 * @example max={1}
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max
	 */
	max?: number;
	/**
	 * @property maxLength
	 * @description Specifies the maximum number of characters allowed in an <input> element
	 * @type number
	 * @required No
	 * @example maxLength={1}
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-maxlength
	 */
	maxLength?: number;
	/**
	 * @property multiple
	 * @description Specifies that a user can enter more than one value in an <input> element
	 * @type boolean
	 * @required No
	 * @example multiple={true}
	 * @default false
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-multiple
	 */
	multiple?: boolean;
	/**
	 * @property name
	 * @description Specifies a name for an <input> element
	 * @type string
	 * @required No
	 * @example name="name"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-name
	 */
	name?: string;
	/**
	 * @property pattern
	 * @description Specifies a regular expression that an <input> element's value is checked against
	 * @type string
	 * @required No
	 * @example pattern="[a-z]"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-pattern
	 */
	pattern?: string;
	/**
	 * @property placeholder
	 * @description Specifies a short hint that describes the expected value of an <input> element
	 * @type string
	 * @required No
	 * @example placeholder="Placeholder"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-placeholder
	 */
	placeholder?: string;
	/**
	 * @property readOnly
	 * @description Specifies that an <input> element is read-only
	 * @type boolean
	 * @required No
	 * @example readOnly={true}
	 * @default false
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-readonly
	 */
	readOnly?: boolean;
	/**
	 * @property required
	 * @description Specifies that an <input> element must be filled out before submitting the form
	 * @type boolean
	 * @required No
	 * @example required={true}
	 * @default false
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-required
	 */
	required?: boolean;
	/**
	 * @property size
	 * @description Specifies the width, in characters, of an <input> element
	 * @type number
	 * @required No
	 * @example size={1}
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-size
	 */
	size?: number;
	/**
	 * @property step
	 * @description Specifies the legal number intervals for an <input> element
	 * @type number
	 * @required No
	 * @example step={1}
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-step
	 */
	step?: number;
	/**
	 * @property type
	 * @description Specifies the type <input> element to display
	 * @type string
	 * @required No
	 * @example type="text"
	 * @default "text"
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type
	 */
	type?: InputType;
	/**
	 * @property defaultValue
	 * @description Specifies the value of an <input> element
	 * @type string
	 * @required No
	 * @example defaultValue="value"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-value
	 */
	defaultValue?: string;
	/**
	 * @property icon
	 * @description Specifies the icon to be displayed in the input
	 * @type IconDefinition
	 * @required No
	 * @example icon={faUser}
	 * @default undefined
	 * @see https://fontawesome.com/icons?d=gallery
	 */
	inputSetter?: (value: string) => void;
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
	 * @property iconOnClick
	 * @description Specifies the function to be called when the icon is clicked
	 * @type () => void
	 * @required No
	 * @example iconOnClick={() => {}}
	 * @default () => null
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-onclick
	 */
	iconOnClick?: () => void;
	/**
	 * @property onChange
	 * @description Specifies the function to be called when the input value changes
	 * @type (newValue: string | number | string[] | undefined,
		oldValue?: string | number | string[] | undefined,
		currentComponent?: RefObject<HTMLInputElement>) => void
	 * @required No
	 * @example onChange={(newValue, oldValue, currentComponent) => {
	 * 	console.log(newValue, oldValue, currentComponent);
	 * }}
	 * @default () => null
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-onchange
	 */
	onChange?: (
		newValue: string | number | string[] | undefined,
		oldValue?: string | number | string[] | undefined,
		currentComponent?: EventTarget & HTMLInputElement
	) => void;
	/**
	 * @property onKeyDown
	 * @description Specifies the function to be called when a key is pressed down
	 * @type (event: React.KeyboardEvent<HTMLInputElement>) => void
	 * @required No
	 * @example onKeyDown={(event) => {}}
	 * @default () => null
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-onkeydown
	 */
	onKeyDown?: () => void;
}

export type RCInputElementProps =
	| (Partial<HTMLInputElement> & {
			focus: () => void;
			getValue: () => string;
			setValue: (value: string) => void;
	  })
	| null;
