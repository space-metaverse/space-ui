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
    onSubmit: VoidFunction
    onOption?: Dispatch<SetStateAction<string>>
};

export type TopNavProps = {
    user?: UserProps
    routes: RouteProps[]
    options?: PopoverProps['options']
    searchBar?: SearchBarProps
    className?: string
    logoRoute?: string
    signInRoute?: string
};
