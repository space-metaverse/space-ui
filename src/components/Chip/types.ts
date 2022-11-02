import type { HTMLAttributes } from 'react';

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    color: 'grey' | 'blue' | 'green' | 'orange' | 'red';
}
