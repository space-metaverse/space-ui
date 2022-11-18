import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from '../../components/Pagination';

export default {
    title: 'Example/Pagination',
    component: Pagination,
    argTypes: {
    },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
    const [page, setPage] = useState(1)

    return <Pagination {...args} currentPage={args.currentPage > 1 ? args.currentPage : page} onPage={setPage} />
};

export const Default = Template.bind({});
Default.args = {
    onPage: (page: number) => {},
    pageSize: 20,
    totalCount: 400,
    currentPage: 1,
    siblingCount: 1,
};
Default.parameters = {
    controls: {
        exclude: ['as', 'css'],
    },
};
