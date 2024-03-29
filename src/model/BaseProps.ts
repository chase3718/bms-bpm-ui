import { ReactNode, CSSProperties, ChangeEvent } from "react";

/**
 * @interface BaseProps
 * @description Base properties for all components
 */
export interface BaseProps {
	/**
	 * @property id
	 * @description Specifies a unique id for an element
	 * @type string
	 * @required No
	 * @example id="id1"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id
	 */
	id?: string;
	/**
	 * @property autoFocus
	 * @description Specifies that an <input> element should automatically get focus when the page loads
	 * @type boolean
	 * @required No
	 * @example autoFocus={true}
	 * @default false
	 */
	autoFocus?: boolean;
	/**
	 * @property className
	 * @description Specifies one or more classnames for an element (refers to a class in a style sheet)
	 * @type string
	 * @required No
	 * @example className="class1 class2"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class
	 */
	className?: string;
	/**
	 * @property alias
	 * @description Specifies an alias for an element
	 * @type string
	 * @required No
	 * @example alias="alias1"
	 * @default undefined
	 */
	alias?: string;
	/**
	 * @property disabled
	 * @description Specifies that an <input> element should be disabled
	 * @type boolean
	 * @required No
	 * @example disabled={true}
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * @property children
	 * @description Specifies the children for an element
	 * @type ReactNode
	 * @required No
	 * @example children={<div>children</div>}
	 * @default null
	 * @see https://reactjs.org/docs/react-api.html#reactchildren
	 */
	children?: ReactNode;
	/**
	 * @property width
	 * @description Specifies the width for an element
	 * @type string
	 * @required No
	 * @example width="100px"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/width
	 */
	width?: string;
	/**
	 * @property minWidth
	 * @description Specifies the minimum width for an element
	 * @type string
	 * @required No
	 * @example minWidth="100px"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-width
	 */
	minWidth?: string;
	/**
	 * @property maxWidth
	 * @description Specifies the maximum width for an element
	 * @type string
	 * @required No
	 * @example maxWidth="100px"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-width
	 */
	maxWidth?: string;
	/**
	 * @property height
	 * @description Specifies the height for an element
	 * @type string
	 * @required No
	 * @example height="100px"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/height
	 */
	height?: string;
	/**
	 * @property hidden
	 * @description Specifies that an element is not yet, or is no longer, relevant
	 * @type boolean
	 * @required No
	 * @example hidden={true}
	 * @default false
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden
	 */
	hidden?: boolean;
	/**
	 * @property minHeight
	 * @description Specifies the minimum height for an element
	 * @type string
	 * @required No
	 * @example minHeight="100px"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-height
	 */
	minHeight?: string;
	/**
	 * @property maxHeight
	 * @description Specifies the maximum height for an element
	 * @type string
	 * @required No
	 * @example maxHeight="100px"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-height
	 */
	maxHeight?: string;
	/**
	 * @property margin
	 * @description Specifies the margin for an element
	 * @type string
	 * @required No
	 * @example margin="10px"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
	 */
	margin?: string;
	/**
	 * @property padding
	 * @description Specifies the padding for an element
	 * @type string
	 * @required No
	 * @example padding="10px"
	 * @default undefined
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
	 */
	padding?: string;
	/**
	 * @property style
	 * @description Specifies an inline style for an element
	 * @type CSSProperties
	 * @required No
	 * @example style={{ color: 'red' }}
	 * @default null
	 * @see https://reactjs.org/docs/dom-elements.html#style
	 */
	styles?: CSSProperties;
	/**
	 * @property value
	 * @description Specifies the value for an element
	 * @type any
	 * @required No
	 * @example value={value}
	 */
	value?: any;
	/**
	 * @property setValue
	 * @description Specifies the setValue for an element
	 * @type (value: any) => void
	 * @required No
	 * @example setValue={(value) => setValue(value)}
	 * @default undefined
	 * @see https://reactjs.org/docs/react-component.html#setvalue
	 */
	setValue?: (value: any) => void;
	/**
	 * @property onChange
	 * @description Specifies the onChange for an element
	 * @type (newValue: any, oldValue: any, element: HTMLElement) => void
	 * @required No
	 * @example onChange={(newValue, oldValue, element) => console.log(newValue, oldValue, element)}
	 * @default undefined
	 */
	onChange?: (newValue: any, oldValue: any, element?: ChangeEvent<any>) => void;
}
