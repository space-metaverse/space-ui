import React, { ChangeEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextInput } from '../../components/TextInput';
import styled from 'styled-components';

const CustomTextInput = styled(TextInput)`
    input {
        max-width: 20rem;
    }
`

export default {
    title: 'Example/TextInput',
    component: CustomTextInput,
    argTypes: {

    },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <CustomTextInput {...args} />;

export const Text = Template.bind({});
export const Password = Template.bind({});

Text.args = {
    label: 'Label',
    disabled: false,
    isError: false,
    value: '',
    placeholder: '',
    type: 'text',
    showPassword: false,
    onChange: (e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value)
};

Text.parameters = {
    controls: {
        exclude: ['as', 'css'],
    },
};

Password.args = {
    label: 'Label',
    disabled: false,
    isError: false,
    value: '',
    placeholder: '',
    type: 'password',
    showPassword: false,
    onChange: (e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value)
};

Password.parameters = {
    controls: {
        exclude: ['as', 'css'],
    },
};
