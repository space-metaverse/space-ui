import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Popover } from "../../components/Popover";
import { Button } from "../../components/Button";
import { Edit, Delete } from "../../icons";

export default {
    title: "Example/Popover",
    component: Popover,
    argTypes: {},
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
    <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Popover {...args}>
            <Button size="medium" color="blue" label="Toggle Popover" />
        </Popover>
    </div>
);

export const Default = Template.bind({});
Default.args = {
    keepOpenOnClick: false,
    position: "bottom",
    onHover: false,
    options: [
        {
            icon: () => <Edit />,
            label: "Edit",
            callback: () => console.log("edit"),
        },
        {
            icon: () => <Delete />,
            label: "Delete",
            callback: () => console.log("delete"),
        },
    ],
};
Default.parameters = {
    controls: {
        exclude: ["as", "css"],
    },
};
