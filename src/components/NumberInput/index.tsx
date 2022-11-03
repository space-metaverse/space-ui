import {
    useMemo,
    useState,
    useCallback,
    type ChangeEvent,
} from 'react';

import { Plus as PlusIcon, Minus as MinusIcon } from '../../icons';
import NumberInputStyles from './styles';
import type { NumberInputProps } from './types';

const NumberInput = ({
    value = 0,
    label,
    isError = false,
    disabled = false,
    onChange,
    className,
    ...props
}: NumberInputProps) => {
    const [valueInternal, setValueInternal] = useState<number>(0);

    const valueToUse = useMemo(() => value || valueInternal, [value, valueInternal]);

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        if (!disabled) {
            setValueInternal(Number(event.target.value));
            onChange?.(event);
        }
    }, [disabled, onChange]);

    const handlePlus = useCallback(() => {
        !disabled && setValueInternal(prev => prev + 1);
    }, [disabled]);

    const handleMinus = useCallback(() => {
        !disabled && setValueInternal(prev => prev - 1);
    }, [disabled]);

    return (
        <NumberInputStyles.Wrapper
            isError={isError}
            disabled={disabled}
            className={className}
        >
            {label && <NumberInputStyles.Label>{label}</NumberInputStyles.Label>}
            <NumberInputStyles.InputGrid>
                <NumberInputStyles.Icon
                    as={MinusIcon}
                    onClick={handleMinus}
                />
                <NumberInputStyles.Input
                    {...props}
                    type="number"
                    value={valueToUse}
                    onChange={handleChange}
                    disabled={disabled}
                />
                <NumberInputStyles.Icon
                    as={PlusIcon}
                    onClick={handlePlus}
                />
            </NumberInputStyles.InputGrid>
        </NumberInputStyles.Wrapper>
    );
};

export {
    NumberInput,
    NumberInputStyles,
    type NumberInputProps,
};
