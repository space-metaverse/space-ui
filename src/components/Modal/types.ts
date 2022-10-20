import type { HTMLAttributes } from 'react';

import type { ButtonProps } from '../Button/Button';

export interface ModalProps {
    opened: VoidFunction;
    closed: VoidFunction;
}

export interface ModalBaseProps extends HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md';
    clear?: VoidFunction;
    close?: boolean;
    shadow?: boolean;
    actions?: {
        primary?: ButtonProps;
        secondary?: ButtonProps;
    };
    initialValue?: boolean;
    outsideClick?: boolean;
}

export interface StyledModalProps extends Pick<ModalBaseProps, 'size' | 'shadow'> {
    show: boolean;
}
