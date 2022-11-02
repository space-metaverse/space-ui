import { ChangeEvent, LabelHTMLAttributes } from 'react';

import Styled from './styles';

interface CheckboxProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'onChange'> {
    label?: string;
    isChecked: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({
    label,
    isChecked = false,
    onChange,
    ...props
}: CheckboxProps) => (
    <Styled.Label {...props}>
        <Styled.Input
            type="checkbox"
            checked={isChecked}
            onChange={onChange}
        />
        <Styled.Checkmark />
        {label}
    </Styled.Label>
);

export { Checkbox };
