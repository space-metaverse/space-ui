import type { Dispatch, SetStateAction, SelectHTMLAttributes } from 'react';

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
    options: string[];
    label?: string;
    onChange?: Dispatch<SetStateAction<string>>;
    selectedOption?: string;
}

export interface SelectStylesProps {
    isSelected: boolean;
}
