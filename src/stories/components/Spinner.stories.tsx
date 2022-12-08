import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spinner } from '../../components/Spinner';

export default {
    title: 'Example/Spinner',
    component: Spinner,
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'inline-radio' },
        },
    },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 'medium',
};
Default.parameters = {
    controls: {
        exclude: ['as', 'css'],
    },
};
