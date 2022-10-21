import {
    ChangeEvent, InputHTMLAttributes, useCallback, useMemo, useState,
} from 'react';

import styled, { css } from 'styled-components';

import { EyeClose, EyeOpen } from '../../icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isError?: boolean;
    showPassword?: boolean;
}

interface TextInputProps extends InputProps {
    label: string;
}

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 300;
    color: #111114;
`;

const Label = styled.label`
    padding-bottom: 0.5rem;
    font-weight: 700;
`;

const Input = styled.input<InputProps & { showPassword: boolean, isHovering: boolean, isFocused: boolean }>`
    padding: 0.75rem 1rem;
    font-size: 1.2rem;
    border: 1px solid #DCDCE0;
    transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    border-radius: 12px;
    outline: none;
    width: 100%;
    ${(props) => props.disabled && css`
        opacity: 0.5;
        cursor: not-allowed;
    `}
    ${(props) => props.isError && css`
        border: 1px solid #F50018;
        background-color: #F500180D;
    `}
    ${(props) => (props.type === 'password' || props.showPassword) && css`
        border-radius: 12px 0 0 12px;
        border-right: none !important;
    `}
    ${(props) => (props.isFocused || props.isHovering) && css`
        border: 1px solid ${props.isError ? '#F50018' : '#8900FF'};
    `}
`;

const InputGrid = styled.div`
    display: flex;
    align-items: center;
`;

const PasswordToggleWrapper = styled.div<{
    isError: boolean,
    isHovering: boolean,
    isFocused: boolean,
    disabled: boolean,
}>`
    border: 1px solid #DCDCE0;
    border-radius: 0 12px 12px 0;
    border-left: none !important;
    transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    padding: 0.7rem 1rem;
    cursor: pointer;
    ${(props) => props.disabled && css`
        opacity: 0.5;
        cursor: not-allowed;
    `}
    ${(props) => props.isError && css`
        border: 1px solid #F50018;
        background-color: #F500180D;
    `}
    ${(props) => (props.isFocused || props.isHovering) && css`
        border: 1px solid ${props.isError ? '#F50018' : '#8900FF'};
    `}
`;

const TextInput = ({
    type,
    label = 'Label',
    disabled = false,
    className,
    value = '',
    isError = false,
    placeholder = '',
    showPassword = false,
    onChange,
    ...props
}: TextInputProps) => {
    const [valueInternal, setValueInternal] = useState<string>('');
    const [showPasswordInternal, setShowPasswordInternal] = useState<boolean>(false);
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const valueToUse = useMemo(() => value || valueInternal, [value, valueInternal]);
    const showPasswordToUse = useMemo(() => showPassword || showPasswordInternal, [showPassword, showPasswordInternal]);

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        if (! disabled) {
            setValueInternal(event.target.value);
            onChange?.(event);
        }
    }, [onChange, disabled]);

    const handlePasswordToggle = useCallback(() => {
        setShowPasswordInternal((prev) => ! prev);
    }, []);

    return (
        <InputWrapper
            className={className}
            onMouseEnter={useCallback(() => setIsHovering(true), [])}
            onMouseLeave={useCallback(() => setIsHovering(false), [])}
        >
            <Label>{label}</Label>
            <InputGrid>
                <Input
                    type={showPasswordToUse ? 'text' : type}
                    onChange={handleChange}
                    disabled={disabled}
                    isError={isError}
                    placeholder={placeholder}
                    value={valueToUse}
                    showPassword={showPasswordToUse}
                    isHovering={isHovering}
                    isFocused={isFocused}
                    onFocus={useCallback(() => setIsFocused(true), [])}
                    onBlur={useCallback(() => setIsFocused(false), [])}
                    {...props}
                />
                {
                    (type === 'password' || showPasswordToUse) && (
                        <PasswordToggleWrapper
                            onClick={handlePasswordToggle}
                            isError={isError}
                            disabled={disabled}
                            isHovering={isHovering}
                            isFocused={isFocused}
                        >
                            {showPasswordToUse ? <EyeOpen /> : <EyeClose />}
                        </PasswordToggleWrapper>
                    )
                }
            </InputGrid>
        </InputWrapper>
    );
};

export { TextInput };
