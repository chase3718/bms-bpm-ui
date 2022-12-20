import { BaseProps } from "../../model";

/**
 * @interface FieldProps
 * @description Field component props
 */
export interface FieldProps extends BaseProps {
	/**
	 * @property alt
	 * @description Specifies an alternate text for an image, if the image cannot be displayed
	 * @type string
	 * @required No
	 * @example alt="Alternate text"
	 * @default undefined
	 * @see https://www.w3schools.com/tags/att_Field_alt.asp
	 */
	alt?: string;
}

export type RCComponentElementProps =
	| (Partial<HTMLDivElement> & {
			focus: () => void;
			getValue: () => string;
			setValue: (value: string) => void;
	  })
	| null;
