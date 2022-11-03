import { useState, useCallback, type ChangeEvent } from 'react';

import RadioStyles from './styles';
import type { RadioProps } from './types';

const Radio = ({
    options = ['Option 1', 'Option 2', 'Option 3'],
    direction = 'row',
    onChange,
    disabled,
    className,
}: RadioProps) => {
    const [checkedKey, setCheckedKey] = useState<string>('');

    const handleChange = useCallback((
        event: ChangeEvent<HTMLInputElement>,
        key: string,
        option: string,
    ) => {
        setCheckedKey(key);
        onChange?.(event, option);
    }, [onChange]);

    return (
        <RadioStyles.Group
            direction={direction}
            className={className}
        >
            {options.map((option, index) => {
                const key = `${option}-${index}`;
                return (
                    <RadioStyles.Label
                        key={key}
                        disabled={disabled}
                    >
                        <RadioStyles.Input
                            type="radio"
                            checked={checkedKey === key}
                            onChange={e => handleChange(e, key, option)}
                            disabled={disabled}
                        />
                        <RadioStyles.CustomDot />
                        {option}
                    </RadioStyles.Label>
                );
            })}
        </RadioStyles.Group>
    );
};

export {
    Radio,
    RadioStyles,
    type RadioProps,
};
