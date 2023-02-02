import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FieldSet } from "./FieldSet";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "ReactComponentLibrary/FieldSet",
	component: FieldSet,
} as ComponentMeta<typeof FieldSet>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FieldSet> = (args) => <FieldSet {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
	placeholder: "Hello world!",
};
