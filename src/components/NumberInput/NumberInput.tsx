import {
    useMemo,
    useState,
    ChangeEvent,
    useCallback,
    HTMLAttributes,
} from 'react';

import styled, { css } from 'styled-components';

import { Plus as PlusIcon, Minus as MinusIcon } from '../../icons';

const InputWrapper = styled.div<{ disabled: boolean, isError: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    font-size: 1.2rem;
    border: 1px solid #DCDCE0;
    transition: background-color 0.2s ease-in-out;
    border-radius: 12px;
    color: #111114;
    ${(props) => props.disabled && css`
        opacity: 0.5;
        cursor: not-allowed;
    `}
    ${(props) => props.isError && css`
        border: 1px solid #F50018;
        background-color: #F500180D;
    `}
`;

const Input = styled.input<{ isError: boolean }>`
    font-family: Aeroport Light;
    padding-bottom: 0.5rem;
    font-weight: 700;
    outline: none;
    border: none;
    text-align: center;
    padding: 0;
    font-size: 1.2rem;
    ${(props) => props.isError && css`
        background-color: #f5001803;
    `}
`;

const Plus = styled(PlusIcon)`
    padding: 0.7rem;
    border-radius: 0 12px 12px 0;
    cursor: pointer;
    &:hover {
        background-color: #71717A1F;
    }
`;

const Minus = styled(MinusIcon)`
    padding: 0.7rem;
    border-radius: 12px 0 0 12px;
    cursor: pointer;
    &:hover {
        background-color: #71717A1F;
    };
`;

interface NumberInputProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    value?: number;
    isError?: boolean;
    disabled?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput = ({
    disabled = false,
    value = 0,
    isError = false,
    className,
    onChange,
    ...props
}: NumberInputProps) => {
    const [valueInternal, setValueInternal] = useState<number>(0);

    const valueToUse = useMemo(() => value || valueInternal, [value, valueInternal]);

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        if (! disabled) {
            setValueInternal(Number(event.target.value));
            onChange?.(event);
        }
    }, [disabled, onChange]);

    const handlePlus = useCallback(() => {
        ! disabled && setValueInternal((prev) => prev + 1);
    }, [disabled]);

    const handleMinus = useCallback(() => {
        ! disabled && setValueInternal((prev) => prev - 1);
    }, [disabled]);

    return (
        <InputWrapper disabled={disabled} isError={isError} className={className}>
            <Minus onClick={handleMinus} />
            <Input
                type="number"
                value={valueToUse}
                onChange={handleChange}
                disabled={disabled}
                isError={isError}
                {...props}
            />
            <Plus onClick={handlePlus} />
        </InputWrapper>
    );
};

export { NumberInput };
