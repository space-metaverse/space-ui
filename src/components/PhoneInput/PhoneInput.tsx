import { useCallback, useEffect, useState } from 'react';
import IntlTelInput from 'react-intl-tel-input';

import 'react-intl-tel-input/dist/main.css';
import styled, { css } from 'styled-components';

import arrow from '../../assets/arrow.svg';
import Styled from '../TextInput/styles';

type PhoneInputProps = {
    preferredCountries: string[];
    isError?: boolean;
    value?: string;
    label?: string;
    onChange?: (value: string) => void;
};

const StyledPhoneInput = styled.div<{
    isFocused: boolean;
    isHovering: boolean;
    isError: boolean;
    withLabel: boolean;
}>`
    border: 1px solid #dcdce0;
    padding: 12px 12px 12px 16px;
    border-radius: 12px;

    ${props => (props.isFocused || props.isHovering) && css` border: 1px solid ${props.isError ? '#F50018' : '#8900FF'}; `}

    ${props => props.withLabel && css` margin-top: 8px; `}

    .selected-flag {
        border-right: 1px solid #dcdce0;
        margin-right: 8px;
    }

    input {
        font-family: "Aeroport";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        border: 0;
        outline: 0;
        height: 18px;

        &.selected-flag {
            border-right: 1px solid #dcdce0;
        }

        &::placeholder {
            color: #b0b0b8;
        }
    }

    .intl-tel-input .flag-container .arrow.up:after {
        content: " ";
    }

    .intl-tel-input .flag-container .arrow.down:after {
        content: " ";
    }

    .intl-tel-input .flag-container .arrow.down, .intl-tel-input .flag-container .arrow.up {
        background: url(${arrow}) no-repeat center;
        width: 10px;
        height: 10px;
    }

    .intl-tel-input .flag-container .arrow.up {
        transform: rotate(180deg);
    }
`;

const PhoneInput = ({
    preferredCountries = ['us', 'ca', 'br'],
    isError = false,
    value = '',
    label,
    onChange = () => {},
    ...props
}: PhoneInputProps) => {
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>(value);
    const [key, setKey] = useState<number>(0);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    useEffect(() => {
        setKey(k => k + 1);
    }, [preferredCountries]);

    return (
        <>
            {label && <Styled.Label>{label}</Styled.Label>}

            <StyledPhoneInput
                key={key}
                withLabel={!!label}
                isFocused={isFocused}
                isHovering={isHovering}
                isError={isError}
                onMouseEnter={useCallback(() => setIsHovering(true), [])}
                onMouseLeave={useCallback(() => setIsHovering(false), [])}
                {...props}
            >
                <IntlTelInput
                    value={inputValue}
                    preferredCountries={preferredCountries}
                    autoHideDialCode={false}
                    separateDialCode={false}
                    format
                    onPhoneNumberChange={(
                        isValid,
                        newValue,
                        selectedCountryData,
                        fullNumber,
                        extension,
                    ) => {
                        setInputValue(newValue);
                        onChange(fullNumber);
                    }}
                    onPhoneNumberFocus={useCallback(() => setIsFocused(true), [])}
                    onPhoneNumberBlur={useCallback(() => setIsFocused(false), [])}
                />
            </StyledPhoneInput>
        </>
    );
};

export { PhoneInput };
