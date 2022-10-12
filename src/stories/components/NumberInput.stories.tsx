import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NumberInput } from '../../components/NumberInput/NumberInput';
import styled from 'styled-components';

const CustomNumberInput = styled(NumberInput)`
    max-width: 25rem;
`

export default {
    title: 'Example/NumberInput',
    component: NumberInput,
    argTypes: {
        disabled: {
            control: { type: 'boolean' },
        },
        isError: {
            control: { type: 'boolean' },
        },
    },
} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = (args) => <CustomNumberInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    disabled: false,
    isError: false,
    value: 0,
};
Default.parameters = {
    controls: {
        exclude: ['as', 'css'],
    },
};
