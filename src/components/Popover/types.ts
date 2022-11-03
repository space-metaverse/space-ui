import type { HTMLAttributes } from 'react';

import type { SVGProps } from '../../icons';

export type PositionProps = 'top' | 'bottom' | 'left' | 'right';

export type ElementInfo = {
    width: number;
    height: number;
};

export type PopoverOptionProps = {
    icon?: (props: SVGProps) => JSX.Element;
    label: string;
    callback: VoidFunction;
};

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
    options: PopoverOptionProps[];
    onHover?: boolean;
    position?: PositionProps;
    keepOpenOnClick?: boolean;
}

export interface PopoverStylesProps extends Pick<PopoverProps, 'position'> {
    show: boolean;
    childInfo: ElementInfo;
    popoverInfo: ElementInfo;
}
