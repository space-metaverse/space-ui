import type { ReactNode, HTMLAttributes } from 'react';

export interface ModalProps {
    opened: VoidFunction;
    closed: VoidFunction;
}

export interface ModalBaseProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    title?: string | ReactNode;
}
