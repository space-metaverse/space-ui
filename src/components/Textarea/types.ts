import type { InputHTMLAttributes } from 'react';

export interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    isError?: boolean;
}
