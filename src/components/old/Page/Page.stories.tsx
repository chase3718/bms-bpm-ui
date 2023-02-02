import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Page } from "./Page";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "ReactComponentLibrary/Page",
	component: Page,
} as ComponentMeta<typeof Page>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
	placeholder: "Hello world!",
};
