import type { ChangeEvent } from 'react';

import ToggleStyles from './styles';
import type { ToggleProps } from './types';

const Toggle = ({
    label,
    disabled,
    isChecked = false,
    onChange,
    onChecked,
    className,
    ...props
}: ToggleProps) => {
    const onToggle = (e: ChangeEvent<HTMLInputElement>) => {
        onChecked?.(e.target.checked);

        onChange?.(e);
    };

    return (
        <ToggleStyles.Label
            label={label}
            disabled={disabled}
            className={className}
        >
            {label}

            <ToggleStyles.Input
                {...props}
                type="checkbox"
                checked={isChecked}
                onChange={onToggle}
                disabled={disabled}
            />
            <ToggleStyles.Button />
        </ToggleStyles.Label>
    );
};

export {
    Toggle,
    ToggleStyles,
    type ToggleProps,
};
