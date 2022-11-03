import type { HTMLAttributes } from 'react';

export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    text: string;
    type: AlertType;
    withIcon?: boolean;
}
