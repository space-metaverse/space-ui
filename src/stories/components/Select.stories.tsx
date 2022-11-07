import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from '../../components/Select';

export default {
    title: 'Example/Select',
    component: Select,
    argTypes: {

    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'],
    disabled: false,
    selectedOption: '',
};
Default.parameters = {
    controls: {
        exclude: ['as', 'css'],
    },
};
