import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from '../../components/Card/Card';
import { Chip } from '../../components/Chip/Chip';
import nikeImage from '../assets/nike.png';

export default {
    title: 'Example/Card',
    component: Card,
    argTypes: {

    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    image: nikeImage,
    children: <>
        <h2>Soho Ski Club</h2>
        <p>Phygital</p>
        <small>Price: $123.12</small>
        <Chip color="blue" label="Buy Me" style={{ marginTop: '1rem' }} />
    </>,
};
Default.parameters = {
    controls: {
        exclude: ['as', 'css'],
    },
};
