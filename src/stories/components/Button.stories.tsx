import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../components/Button';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'inline-radio' },
        },
        color: {
            options: ['green', 'blue', 'red', 'orange', 'purple', 'grey', 'white'],
            control: { type: 'inline-radio' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 'medium',
    color: 'blue',
    label: 'Button',
    disabled: false,
};
Default.parameters = {
    controls: {
        exclude: ['as', 'css'],
    },
};
