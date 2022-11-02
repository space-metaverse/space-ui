import type { HTMLAttributes } from 'react';

import type { ButtonProps } from '../Button';

type ActionProps = Omit<ButtonProps, 'size' | 'color'> & {
    size?: ButtonProps['size'];
    color?: ButtonProps['color'];
};

export interface ModalProps {
    opened: VoidFunction;
    closed: VoidFunction;
}

export interface ModalBaseProps extends HTMLAttributes<HTMLDivElement> {
    size?: 'small' | 'medium';
    clear?: VoidFunction;
    close?: boolean;
    shadow?: boolean;
    actions?: {
        primary?: ActionProps;
        secondary?: ActionProps;
    };
    initialValue?: boolean;
    outsideClick?: boolean;
}

export interface StyledModalProps extends Pick<ModalBaseProps, 'size' | 'shadow'> {
    show: boolean;
}
