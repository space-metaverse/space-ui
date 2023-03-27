import type { ChangeEvent, LabelHTMLAttributes } from 'react';

export interface CheckboxProps
    extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'onChange'> {
    label?: string | React.ReactNode;
    disabled?: boolean;
    isChecked: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
