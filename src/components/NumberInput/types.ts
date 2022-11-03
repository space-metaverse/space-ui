import type { ChangeEvent, InputHTMLAttributes } from 'react';

export interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    value?: number;
    isError?: boolean;
    disabled?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
