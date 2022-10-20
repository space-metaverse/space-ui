import type { HTMLMotionProps } from 'framer-motion';

import type { ButtonProps } from '../Button/Button';

export interface ModalProps {
    opened: VoidFunction;
    closed: VoidFunction;
}

export interface ModalBaseProps extends HTMLMotionProps<'div'> {
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
