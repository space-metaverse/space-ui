import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import styled, { css } from "styled-components";

import { useCallback, useEffect, useRef, useState } from "react";
import { Label } from "../TextInput/TextInput";

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

    ${(props) =>
        (props.isFocused || props.isHovering) &&
        css`
            border: 1px solid ${props.isError ? "#F50018" : "#8900FF"};
        `}

    ${(props) =>
        props.withLabel &&
        css`
            margin-top: 8px;
        `}

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
`;

const PhoneInput = ({
    preferredCountries = ["us", "ca", "br"],
    isError = false,
    value = "",
    label,
    onChange = () => {},
    ...props
}: PhoneInputProps) => {
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>(value);
    const [key, setKey] = useState<number>(0);

    const ref = useRef(null);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    useEffect(() => {
        setKey(key + 1);
    }, [preferredCountries]);

    useEffect(() => {
        if (ref.current) {
            console.log(ref);
        }
    }, []);

    return (
        <>
            {label && <Label>{label}</Label>}
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
                    ref={ref}
                    value={inputValue}
                    preferredCountries={preferredCountries}
                    onPhoneNumberChange={(
                        isValid,
                        value,
                        selectedCountryData,
                        fullNumber,
                        extension
                    ) => {
                        setInputValue(value);
                        onChange(fullNumber);
                    }}
                    onPhoneNumberFocus={useCallback(
                        () => setIsFocused(true),
                        []
                    )}
                    onPhoneNumberBlur={useCallback(
                        () => setIsFocused(false),
                        []
                    )}
                />
            </StyledPhoneInput>
        </>
    );
};

export { PhoneInput };
