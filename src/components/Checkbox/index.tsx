import CheckboxStyles from './styles';
import { CheckboxProps } from './types';

const Checkbox = ({
    label,
    disabled,
    isChecked = false,
    onChange,
    ...props
}: CheckboxProps) => (
    <CheckboxStyles.Label
        {...props}
        disabled={disabled}
    >
        <CheckboxStyles.Input
            type="checkbox"
            checked={isChecked}
            onChange={onChange}
            disabled={disabled}
        />
        <CheckboxStyles.Checkmark />
        {label}
    </CheckboxStyles.Label>
);

export {
    Checkbox,
    CheckboxStyles,
    type CheckboxProps,
};
