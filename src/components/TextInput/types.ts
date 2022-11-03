import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isError?: boolean;
    isFocused?: boolean;
    showPassword?: boolean;
}

export interface TextInputProps extends InputProps {
    label: string;
}
