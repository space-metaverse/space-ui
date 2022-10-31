import { ReactNode, ButtonHTMLAttributes } from 'react';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'green' | 'blue' | 'red' | 'orange' | 'purple' | 'grey' | 'white';

export interface StyledButtonProps {
    size: ButtonSize;
    color: ButtonColor;
    uppercase?: boolean;
}

export interface ButtonProps extends StyledButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
    label: string | ReactNode;
}
