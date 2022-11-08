import type { Dispatch, SetStateAction, InputHTMLAttributes } from 'react';

export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    isChecked: boolean;
    onChecked?: Dispatch<SetStateAction<boolean>>;
}
