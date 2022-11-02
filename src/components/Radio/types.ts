import { ChangeEvent, HTMLAttributes } from 'react';

export interface RadioProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    options: string[];
    disabled?: boolean;
    direction: 'row' | 'column';
    onChange?: (event: ChangeEvent<HTMLInputElement>, key: string) => void;
}
