import type { Dispatch, HTMLAttributes, SetStateAction } from 'react';

import { type PopoverProps } from '../Popover';

type UserProps = {
    name: string
    avatar: string | null
};

type RouteProps = {
    route: string
    label: string
    disabled?: boolean
    isExternal?: boolean
};

export type SearchBarProps = HTMLAttributes<HTMLInputElement> & {
    options?: string[]
    onClose?: VoidFunction
    onSubmit: (value: string) => void
    onOption?: Dispatch<SetStateAction<string>>
};

export type TopNavProps = {
    user?: UserProps
    routes: RouteProps[]
    options?: PopoverProps['options']
    searchBar?: Omit<SearchBarProps, 'onClose'>
    className?: string
    logoRoute?: string
    signInRoute?: string
};
