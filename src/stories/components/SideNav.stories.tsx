import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SideNav } from '../../components/SideNav';
import {
  NFT,
  User,
  Wallet,
  Avatar,
  Friends,
  Profile,
  Security,
  Collection,
  FriendsAdd,
  FriendsList,
  FriendsRequests,
  ConnectedWallets,
  ConnectNewWallet
} from '../../icons'

export default {
  title: 'Example/SideNav',
  component: SideNav,
  argTypes: {
  },
} as ComponentMeta<typeof SideNav>;

const Template: ComponentStory<typeof SideNav> = (args) => <SideNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Account Settings',
  routes: [
    {
      Icon: User,
      label: 'Profile',
      route: null,
      disabled: false,
      children: [
        {
          Icon: Profile,
          route: '/profile/information',
          label: 'Profile Information',
          disabled: false
        },
        {
          Icon: Avatar,
          route: '/profile/avatars',
          label: 'Avatars',
          disabled: true
        },
        {
          Icon: Security,
          route: '/profile/security',
          label: 'Security Settings',
          disabled: false
        }
      ]
    },
    {
      Icon: Friends,
      label: 'Friends',
      route: null,
      disabled: true,
      children: [
        {
          Icon: FriendsList,
          route: '/friends/your-friends',
          label: 'Your Friends'
        },
        {
          Icon: FriendsAdd,
          route: '/friends/add-friend',
          label: 'Add Friend'
        },
        {
          Icon: FriendsRequests,
          route: '/friends/manage',
          label: 'Manage Requests'
        }
      ]
    },
    {
      Icon: Wallet,
      route: null,
      label: 'Connected Wallets',
      disabled: false,
      children: [
        {
          Icon: ConnectedWallets,
          route: '/wallet',
          label: 'Active Wallets'
        },
        {
          Icon: ConnectNewWallet,
          route: '/wallet/connect',
          label: 'Connect New Wallet'
        }
      ]
    },
    {
      Icon: NFT,
      label: 'NFT Inventory',
      route: '/nft-inventory',
      disabled: true
    },
    {
      Icon: Collection,
      label: 'Space Inventory',
      route: '/space-inventory',
      disabled: true
    }
  ],
};
Default.parameters = {
  controls: {
    exclude: ['as', 'css'],
  },
};
