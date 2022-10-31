import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isError?: boolean;
    showPassword?: boolean;
}

export interface TextInputProps extends InputProps {
    label: string;
}
