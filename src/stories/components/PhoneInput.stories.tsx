import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PhoneInput } from "../../components/PhoneInput";

export default {
    title: "Example/PhoneInput",
    component: PhoneInput,
    argTypes: {},
} as ComponentMeta<typeof PhoneInput>;

const Template: ComponentStory<typeof PhoneInput> = (args) => (
    <PhoneInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
    preferredCountries: ["us", "ca", "br"],
    isError: false,
    value: "",
    label: "Phone",
    onChange: (value: string) => console.info(value),
};
Default.parameters = {
    controls: {
        exclude: ["as", "css"],
    },
};
