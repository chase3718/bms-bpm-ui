import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Field } from "./Field";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "ReactComponentLibrary/Field",
	component: Field,
} as ComponentMeta<typeof Field>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Field> = (args) => <Field {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
	placeholder: "Hello world!",
	labelText: "Hello world!",
};
