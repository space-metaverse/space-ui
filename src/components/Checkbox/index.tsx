import CheckboxStyles from './styles';
import type { CheckboxProps } from './types';

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
        <>
            <CheckboxStyles.Input
                type="checkbox"
                checked={isChecked}
                onChange={onChange}
                disabled={disabled}
            />
            <CheckboxStyles.Checkmark />
            <div>{label}</div>
        </>
    </CheckboxStyles.Label>
);

export {
    Checkbox,
    CheckboxStyles,
    type CheckboxProps,
};
