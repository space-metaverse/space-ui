import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ImageInput } from "../../components/ImageInput";

export default {
    title: "Example/ImageInput",
    component: ImageInput,
    argTypes: {},
} as ComponentMeta<typeof ImageInput>;

const Template: ComponentStory<typeof ImageInput> = (args) => {
    const [file, setFile] = useState<File | null>(null)

    return <ImageInput {...args} file={file} onFile={setFile} />
};

export const Default = Template.bind({});
Default.args = {
    file: null,
    header: "Upload your Avatar",
    button: {
        label: "Upload",
        size: "small",
        color: "blue",
        outline: true
    },
    width: 600,
    onFile: console.log,
    showDummyAvatar: true,
    changeLabelWhenFileSelected: false,
};
Default.parameters = {
    controls: {
        exclude: ["as", "css"],
    },
};
