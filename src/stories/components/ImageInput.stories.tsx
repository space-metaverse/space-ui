import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ImageInput } from "../../components/ImageInput/ImageInput";

export default {
    title: "Example/ImageInput",
    component: ImageInput,
    argTypes: {},
} as ComponentMeta<typeof ImageInput>;

const Template: ComponentStory<typeof ImageInput> = (args) => (
    <ImageInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
    header: "Upload your Avatar",
    button: {
        label: "Upload",
        size: "medium",
        color: "blue",
    },
    width: 600,
    height: 144,
    onFile: console.log,
    changeLabelWhenFileSelected: false,
    showDummyAvatar: true,
};
Default.parameters = {
    controls: {
        exclude: ["as", "css"],
    },
};
