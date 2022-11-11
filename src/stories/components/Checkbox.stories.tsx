import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '../../components/Checkbox';

export default {
    title: 'Example/Checkbox',
    component: Checkbox,
    argTypes: {
        isChecked: {
            control: { type: 'boolean' },
        },
    },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
    const [checked, setChecked] = useState(false)

    return <Checkbox {...args} isChecked={checked || args.isChecked} onChange={({ target }) => setChecked(target.checked)} />
};

export const Default = Template.bind({});
Default.args = {
    label: 'Checkbox',
    disabled: false,
    isChecked: false,
};
Default.parameters = {
    controls: {
        exclude: ['as', 'css'],
    },
};
