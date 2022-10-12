import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert } from '../../components/Alert/Alert';

export default {
    title: 'Example/Alert',
    component: Alert,
    argTypes: {

    },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Woah! Watch out for that tree!',
    type: 'info',
    withIcon: true,
};
Default.parameters = {
    controls: {
        exclude: ['as', 'css'],
    },
};
