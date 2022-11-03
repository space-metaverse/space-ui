import type { ChangeEvent, HTMLAttributes } from 'react';

export interface NumberInputProps extends HTMLAttributes<HTMLDivElement> {
    label?: string;
    value?: number;
    isError?: boolean;
    disabled?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
