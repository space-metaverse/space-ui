import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toggle } from '../../components/Toggle';

export default {
    title: 'Example/Toggle',
    component: Toggle,
    argTypes: {
        isChecked: {
            control: { type: 'boolean' },
        },
    },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Toggle',
    disabled: false,
    isChecked: false,
};
Default.parameters = {
    controls: {
        exclude: ['as', 'css'],
    },
};
