import { BaseProps } from "../../model";

/**
 * @interface LabelProps
 * @description Label component props
 */
export interface LabelProps extends BaseProps {
	/**
	 * @property alt
	 * @description Specifies an alternate text for an image, if the image cannot be displayed
	 * @type string
	 * @required No
	 * @example alt="Alternate text"
	 * @default undefined
	 * @see https://www.w3schools.com/tags/att_Label_alt.asp
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
