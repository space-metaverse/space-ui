import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TopNav } from '../../components/TopNav';
import { Logout } from '../../icons'

export default {
    title: 'Example/TopNav',
    component: TopNav,
    argTypes: {
    },
} as ComponentMeta<typeof TopNav>;

const props = {
    user: {
        name: 'Space',
        avatar: 'https://tryspace-prod-assets.tryspace-internal.com/files/6845bb12-f3c4-4ab2-b5f5-f7556de39d36.png'
    },
    options: [
        {
            icon: Logout,
            label: 'Logout',
            callback: () => {}
        }
    ],
    className: '',
    logoRoute: '/',
    signInRoute: '',
}

const Template: ComponentStory<typeof TopNav> = (args) => <TopNav {...args} />;

export const Default = Template.bind({});
export const SearchBar = Template.bind({})

Default.args = {
    ...props,
    routes: [
        {
            route: 'https://app.tryspace.com/token',
            label: 'token',
            disabled: true,
            isExternal: true
        },
        {
            route: 'https://app.tryspace.com/litepaper',
            label: 'litepaper',
            disabled: true,
            isExternal: true
        },
        {
            route: 'https://app.tryspace.com/create-space',
            label: 'builder',
            disabled: false,
            isExternal: true
        },
        {
            route: '/marketplace',
            label: 'marketplace',
            disabled: true,
            isExternal: false
        },
        {
            route: 'https://app.tryspace.com/about',
            label: 'about',
            disabled: true,
            isExternal: true
        },
        {
            route: 'https://app.tryspace.com/faq',
            label: 'faq',
            disabled: false,
            isExternal: true
        }
    ],
};
Default.parameters = {
    controls: {
        exclude: ['as', 'css'],
    },
};


SearchBar.args = {
    ...props,
    searchBar: {
        options: [
            'All',
            'Option 1',
            'Option 2',
            'Option 3'
        ],
        onSubmit: () => {},
        onOption: () => {},
        placeholder: 'Search for stores and products'
    },
};
SearchBar.parameters = {
    controls: {
        exclude: ['as', 'css'],
    },
};
