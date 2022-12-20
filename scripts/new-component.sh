#!/bin/bash

# Check if the required number of arguments is provided
if [ $# -lt 1 ]; then
  echo "Usage: $0 component_name"
  exit 1
fi

# Set the component name and create the component folder
component_name=$1
component_folder=src/components/${component_name}
mkdir -p $component_folder

# Create the component files and include an empty echo statement
echo "export { ${component_name} } from \"./${component_name}\";" > "$component_folder/index.ts"

echo "import { BaseProps } from \"../../model\";

/**
 * @interface ${component_name}Props
 * @description ${component_name} component props
 */
export interface ${component_name}Props extends BaseProps {
	/**
	 * @property alt
	 * @description Specifies an alternate text for an image, if the image cannot be displayed
	 * @type string
	 * @required No
	 * @example alt=\"Alternate text\"
	 * @default undefined
	 * @see https://www.w3schools.com/tags/att_${component_name}_alt.asp
	 */
	alt?: string;
}

export type RCComponentElementProps =
	| (Partial<HTMLDivElement> & {
			focus: () => void;
			getValue: () => string;
			setValue: (value: string) => void;
	  })
	| null;" > "$component_folder/${component_name}-model.ts"

echo "import React from \"react\";
import { ComponentStory, ComponentMeta } from \"@storybook/react\";
import { ${component_name} } from \"./${component_name}\";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: \"ReactComponentLibrary/${component_name}\",
	component: ${component_name},
} as ComponentMeta<typeof ${component_name}>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ${component_name}> = (args) => <${component_name} {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
	placeholder: \"Hello world!\",
};" > "$component_folder/${component_name}.stories.tsx"

echo "import React from \"react\";
import { render } from \"@testing-library/react\";

import { ${component_name} } from \"./${component_name}\";

describe(\"${component_name}\", () => {
	test(\"Renders the ${component_name} component\", () => {
		render(<${component_name}></${component_name}>);
	});
});" > "$component_folder/${component_name}.test.tsx"

echo "
import React from \"react\";
import { ${component_name}Props, RC${component_name}ElementProps } from \"./${component_name}-model\";
import \"./style.scss\";

/**
 * @function ${component_name}
 * @param {${component_name}Props} props
 * @returns {JSX.Element} ${component_name} component
 * @description ${component_name} component
 * @example <${component_name} id=\"${component_name}\" className=\"${component_name}\" icon={faSearch} iconPosition=\"left\" iconOnClick={() => console.log('icon clicked')} />
 */
export const ${component_name} = React.forwardRef<RC${component_name}ElementProps, ${component_name}Props>(
	(
		{
			id,
			className,
			alias,
			children,
			width,
			minWidth,
			maxWidth,
			height,
			minHeight,
			maxHeight,
			styles,

			alt,
		},
		ref
	) => {

		const ${component_name}Props = {
			id,
			alt,
		};
		const styleProps = {
			...styles,
			width,
			minWidth,
			maxWidth,
			height,
			minHeight,
			maxHeight,
		};

		const style = Object.entries(styleProps).reduce((acc, [key, value]) => {
			if (value) acc[key] = value;
			return acc;
		}, {} as any);

		return (
			<span
				style={style}
				className={\`type-${component_name}\${className ? \" \" + className : \"\"}\`}
			>
				<${component_name} {...${component_name}Props}></${component_name}>
			</span>
		);
	}
);

${component_name}.displayName = \"${component_name}\";" > "$component_folder/${component_name}.tsx"

echo "@import \"../../globals.scss\";" > "$component_folder/style.scss"
