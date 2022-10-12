import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs } from '../../components/Tabs/Tabs';

export default {
    title: 'Example/Tabs',
    component: Tabs,
    argTypes: {

    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
    tabs: ['TAB 1', 'TAB 2', 'TAB 3'],
};
Default.parameters = {
    controls: {
        exclude: ['as', 'css'],
    },
};
