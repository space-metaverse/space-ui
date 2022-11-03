import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Skeleton } from "../../components/Skeleton";

export default {
    title: "Example/Skeleton",
    component: Skeleton,
    argTypes: {},
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
    <Skeleton {...args} />
);

export const Default = Template.bind({});
Default.args = {
    run: true,
    width: "100%",
    height: "4rem",
    rounded: true,
};
Default.parameters = {
    controls: {
        exclude: ["as", "css"],
    },
};
