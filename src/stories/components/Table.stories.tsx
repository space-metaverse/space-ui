import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chip } from '../../components/Chip';
import { Table } from '../../components/Table';
import { Share } from '../../icons';
import batman from '../assets/batman.png';
import blueShoesImage from '../assets/blue-shoes.png';
import nikeImage from '../assets/nike.png';

export default {
    title: 'Example/Table',
    component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

const CustomTableCell = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Image = styled.img`
    height: 4rem;
    width: 4rem;
    border-radius: 20px;
`;

export const Default = Template.bind({});
Default.args = {
    rows: [
        {
            spaceName: <CustomTableCell>
                <Image src={nikeImage} />
                {' '}
                Soho Ski Club
            </CustomTableCell>,
            users: 10382,
            products: 24,
            events: 2,
            orders: 4,
            action: <Chip label="View" color="blue" />,
            share: <Share style={{ height: '2rem' }} />,
            key: '1',
        },
        {
            spaceName: <CustomTableCell>
                <Image src={blueShoesImage} />
                {' '}
                Nike Store
            </CustomTableCell>,
            users: 15562,
            products: 120,
            events: 0,
            orders: 16,
            action: <Chip label="Buy" color="red" />,
            share: <Share style={{ height: '2rem' }} />,
            key: '2',
        },
        {
            spaceName: <CustomTableCell>
                <Image src={batman} />
                {' '}
                Batman
            </CustomTableCell>,
            users: 9240,
            products: 6,
            events: 0,
            orders: 0,
            action: <Chip label="Share" color="orange" />,
            share: <Share style={{ height: '2rem' }} />,
            key: '3',
        },
    ],
    columns: ['Space Name', 'Users', 'Products', 'Events', 'Orders', 'Action', 'Share'],
    withBorder: false,
    onRowClick: (row: any) => console.log(row),
};
Default.parameters = {
    controls: {
        exclude: ['as', 'css'],
    },
};
