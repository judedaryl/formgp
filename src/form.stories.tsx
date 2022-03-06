import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Form from './form';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Forms/Example",
    component: Form,
} as ComponentMeta<typeof Form>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Simple = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
    values: {
        name: '',
        nickName: ''
    }
};

export const UsingErrors = Template.bind({});
UsingErrors.args = {
    values: {
        name: '',
        nickName: ''
    },
    withError: true
};

export const UsingEventHandlers = Template.bind({});
UsingEventHandlers.args = {
    values: {
        name: '',
        nickName: ''
    },
    withError: true,
    useEventHandler: true
};