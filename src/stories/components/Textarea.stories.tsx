import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Textarea } from '../../components/Textarea';
import styled from 'styled-components';

const CustomTextarea = styled(Textarea)`
    max-width: 25rem;
`

export default {
    title: 'Example/Textarea',
    component: Textarea,
    argTypes: {
        disabled: {
            control: { type: 'boolean' },
        },
        isError: {
            control: { type: 'boolean' },
        },
    },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <CustomTextarea {...args} />;

export const Default = Template.bind({});
Default.args = {
    rows: 5,
    label: 'Label',
    value: '',
    isError: false,
    disabled: false,
    placeholder: 'Hello space',
};
Default.parameters = {
    controls: {
        exclude: ['as', 'css'],
    },
};
