import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toggle } from '../../components/Toggle';

export default {
    title: 'Example/Toggle',
    component: Toggle,
    argTypes: {

    },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
    checked: false,
};
Default.parameters = {
    controls: {
        exclude: ['as', 'css'],
    },
};
