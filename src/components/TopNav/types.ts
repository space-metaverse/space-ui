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

export type SearchBarProps = {
    options?: string[]
};

export type TopNavProps = {
    user?: UserProps
    routes: RouteProps[]
    options?: PopoverProps['options']
    searchBar?: boolean
    className?: string
    logoRoute?: string
    signInRoute?: string
};
