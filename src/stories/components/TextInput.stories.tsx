import React, { ChangeEvent, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextInput } from '../../components/TextInput';
import styled from 'styled-components';

const CustomTextInput = styled(TextInput)`
    max-width: 20rem;
`

export default {
    title: 'Example/TextInput',
    component: CustomTextInput,
    argTypes: {

    },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => {
    const [value, setValue] = useState('')

    return <CustomTextInput {...args} value={value || args.value} onChange={(e) => setValue(e.target.value)} />
};

export const Text = Template.bind({});
export const Password = Template.bind({});

Text.args = {
    type: 'text',
    label: 'Label',
    value: '',
    isError: '',
    disabled: false,
    placeholder: '',
    showPassword: false,
    onChange: (e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value)
};

Text.parameters = {
    controls: {
        exclude: ['as', 'css'],
    },
};

Password.args = {
    type: 'password',
    label: 'Label',
    value: '',
    isError: '',
    disabled: false,
    placeholder: '',
    showPassword: false,
    onChange: (e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value)
};

Password.parameters = {
    controls: {
        exclude: ['as', 'css'],
    },
};
