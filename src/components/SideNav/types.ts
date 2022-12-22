import type { SVGProps } from '../../icons';

interface ChildrenProps {
    Icon: (props?: SVGProps) => JSX.Element
    route: string
    label: string
    disabled?: boolean
}

export type SimpleOptionProps = Pick<ChildrenProps, 'Icon' | 'label'>;

export interface OptionProps extends SimpleOptionProps {
    route: string | null
    disabled: boolean
    selected?: boolean
    children?: ChildrenProps[]
}

export type OptionComponentProps = OptionProps & {
    show: boolean
    select: (option: SimpleOptionProps, route: string | null) => void
    selected?: boolean
    toggleState: VoidFunction
    activeField?: string
};

export type SideNavProps = {
    title?: string
    routes: OptionProps[]
    goBack?: VoidFunction
    onNavigate?: (route: string) => void
};

export interface OptionStylesProps {
    child?: boolean
    animate?: boolean
    disabled?: boolean
    selected?: boolean
}

export interface WrapperStylesProps {
    dropdown: boolean
}

export interface OptionsStylesProps {
    show?: boolean
    animate: boolean
}
