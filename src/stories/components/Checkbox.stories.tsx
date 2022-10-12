import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '../../components/Checkbox/Checkbox';

export default {
    title: 'Example/Checkbox',
    component: Checkbox,
    argTypes: {

    },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Checkbox',
    isChecked: false,
};
Default.parameters = {
    controls: {
        exclude: ['as', 'css'],
    },
};
