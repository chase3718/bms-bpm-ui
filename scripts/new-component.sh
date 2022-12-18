#!/bin/bash

# Check if a component name was provided
if [ -z "$1" ]
then
  echo "Please provide a component name."
  exit 1
fi

# Convert the component name to lowercase
component_name_lowercase=$(echo "$1" | tr '[:upper:]' '[:lower:]')

# Create the component directory
mkdir src/components/$1

# Create the component file
touch src/components/$1/$1.tsx
echo "import React, { forwardRef } from 'react';
import { $1Props, RC$1ElementProps } from 'components/$1';
import './style.scss';

/**
 * @function $1
 * @param {$component_name_lowercaseProps} props
 * @returns {JSX.Element} $1 component
 * @description $1 component
 * @example 
 */
export const $1 = forwardRef((RC$1ElementProps, $1Props) => {
  return (
    <div>
      $1 component
    </div>
  );
});

$1.displayName = '$1';" > src/components/$1/$1.tsx

# Create the model file
touch src/components/$1/${component_name_lowercase}-model.ts
echo "import { BaseProps } from 'model';

/**
 * @interface $1Props
 * @description Input component props
 */
export interface $1Props extends BaseProps {
/**
	 * @property fakeProperty
	 * @description fakeProperty description
	 * @type string
	 * @required No
	 * @example fakeProperty="fake"
	 * @default "fake"
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fakeProperty
	 */
	fakeProperty?: string;
}

export type RC$1ElementProps =
	| (Partial<HTMLDivElement> & {
			focus: () => void;
			getValue: () => string;
			setValue: (value: string) => void;
	  })
	| null;" > src/components/$1/${component_name_lowercase}-model.ts

# Create the tests directory
mkdir src/components/$1/tests

# Create the test file
touch src/components/$1/tests/test.ts

# Create the styles file
touch src/components/$1/style.scss

# Create the exports file
touch src/components/$1/index.ts
echo "export { $1 } from './$1';
export * from './${component_name_lowercase}-model';" > src/components/$1/index.ts