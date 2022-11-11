import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isError?: string;
    isFocused?: boolean;
    showPassword?: boolean;
}

export interface InputStylesProps extends Pick<InputProps, 'disabled' | 'isFocused'> {
    isError: boolean
}

export interface TextInputProps extends InputProps {
    label: string;
}
