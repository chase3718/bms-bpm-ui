import { BaseProps } from "../../model";

/**
 * @interface FieldSetProps
 * @description FieldSet component props
 */
export interface FieldSetProps extends BaseProps {
	/**
	 * @property alt
	 * @description Specifies an alternate text for an image, if the image cannot be displayed
	 * @type string
	 * @required No
	 * @example alt="Alternate text"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/FieldSet#attr-alt
	 */
	alt?: string;
	/**
	 * @property form
	 * @description Specifies one or more forms the FieldSet element belongs to
	 * @type string
	 * @required No
	 * @example form="form1"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/FieldSet#attr-form
	 */
	form?: string;
	/**
	 * @property title
	 * @description Specifies the title of the FieldSet element
	 * @type string
	 * @required No
	 * @example title="Extra information"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend
	 */
	title?: string;
	/**
	 * @property collapsed
	 * @description Specifies if the FieldSet is collapsed or not
	 * @type boolean
	 * @required No
	 * @example collapsed={true}
	 * @default false
	 */
	collapsed?: boolean;
	/**
	 * @property collapsable
	 * @description Specifies if the FieldSet is collapsable or not
	 * @type boolean
	 * @required No
	 * @example collapsable={true}
	 * @default false
	 */
	collapsable?: boolean;
}

export type RCFieldSetElementProps =
	| (Partial<HTMLDivElement> & {
			focus: () => void;
			getValue: () => string;
			setValue: (value: string) => void;
	  })
	| null;
