import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from '../../components/Radio';

export default {
    title: 'Example/Radio',
    component: Radio,
    argTypes: {

    },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: ['Option 1', 'Option 2', 'Option 3'],
    disabled: false,
    direction: 'row',
};
Default.parameters = {
    controls: {
        exclude: ['as', 'css'],
    },
};
