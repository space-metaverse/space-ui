import Styled from './styles';
import { CheckboxProps } from './types';

const Checkbox = ({
    label,
    disabled,
    isChecked = false,
    onChange,
    ...props
}: CheckboxProps) => (
    <Styled.Label
        {...props}
        disabled={disabled}
    >
        <Styled.Input
            type="checkbox"
            checked={isChecked}
            onChange={onChange}
            disabled={disabled}
        />
        <Styled.Checkmark />
        {label}
    </Styled.Label>
);

export { Checkbox };
