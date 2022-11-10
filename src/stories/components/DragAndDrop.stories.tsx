import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DragAndDrop } from '../../components/DragAndDrop';

export default {
    title: 'Example/DragAndDrop',
    component: DragAndDrop,
    argTypes: {
    },
} as ComponentMeta<typeof DragAndDrop>;

const Template: ComponentStory<typeof DragAndDrop> = (args) => {
    const [files, setFiles] = useState<File[]>([])

    return <DragAndDrop {...args} files={files} onFiles={setFiles} />
};

export const Default = Template.bind({});
Default.args = {
    files: [],
    onFiles: () => {},
    disabled: false
};
Default.parameters = {
    controls: {
        exclude: ['as', 'css'],
    },
};
