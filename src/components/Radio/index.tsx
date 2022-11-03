import { useState, ChangeEvent, useCallback } from 'react';

import Styled from './styles';
import { RadioProps } from './types';

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
        <Styled.Group
            direction={direction}
            className={className}
        >
            {options.map((option, index) => {
                const key = `${option}-${index}`;
                return (
                    <Styled.Label
                        key={key}
                        disabled={disabled}
                    >
                        <Styled.Input
                            type="radio"
                            checked={checkedKey === key}
                            onChange={e => handleChange(e, key, option)}
                            disabled={disabled}
                        />
                        <Styled.CustomDot />
                        {option}
                    </Styled.Label>
                );
            })}
        </Styled.Group>
    );
};

export { Radio };
