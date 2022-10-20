import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal, type ModalProps } from '../../components/Modal';

export default {
    title: 'Example/Modal',
    component: Modal,
    argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
    const ref = useRef<ModalProps>(null);

    return (
        <div>
            <button type="button" onClick={() => ref.current?.opened()}>Show modal</button>

            <Modal ref={ref} {...args} />
        </div>
    )
};

export const Default = Template.bind({});
