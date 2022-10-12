import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chip } from '../../components/Chip/Chip';

export default {
    title: 'Example/Chip',
    component: Chip,
    argTypes: {

    },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Chip',
    color: 'blue',
};
Default.parameters = {
    controls: {
        exclude: ['as', 'css'],
    },
};
