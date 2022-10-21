import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal, type ModalProps } from '../../components/Modal';

export default {
    title: 'Example/Modal',
    component: Modal,
    argTypes: {
        size: {
            options: ['small', 'medium'],
            control: { type: 'inline-radio' },
            defaultValue: 'small',
        },
        title: {
            control: { type: 'text' },
            defaultValue: 'Hello space',
        },
        clear: {
            table: {
                type: {
                    detail: 'Function that will be executed when modal opens and closes.',
                    summary: 'Function',
                },
            },
            control: { type: null },
        },
        close: {
            control: { type: 'boolean' },
            defaultValue: true,
        },
        shadow: {
            control: { type: 'boolean' },
            defaultValue: true,
        },
        actions: {
            control: { type: 'object' },
            defaultValue: {
                primary: {
                    size: 'small',
                    color: 'blue',
                    label: 'Save',
                },
                secondary: {
                    size: 'small',
                    color: 'grey',
                    label: 'Cancel',
                }
            },
        },
        initialValue: {
            control: { type: 'boolean' },
            defaultValue: false,
        },
        outsideClick: {
            control: { type: 'boolean' },
            defaultValue: true,
        },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
    const ref = useRef<ModalProps>(null);

    return (
        <div>
            <button type="button" onClick={() => ref.current?.opened()}>Show modal</button>

            <Modal 
                ref={ref} 
                {...args} 
            >
                <p style={{ padding: '48px 0' }}>Hello space</p>
            </Modal>
        </div>
    )
};

export const Default = Template.bind({});