import { useState } from 'react';
import PhoneInputInternational from 'react-phone-input-international';

import Styled from '../TextInput/styles';
import PhoneInputStyles, { Wrapper } from './styles';

type PhoneInputProps = {
    mainCountry: string;
    isError?: boolean;
    value?: string;
    label?: string;
    enableSearch?: boolean;
    disableSearchIcon?: boolean;
    onChange?: (value: string) => void;
};
const PhoneInput = ({
    label,
    value = '',
    isError = false,
    enableSearch = true,
    disableSearchIcon = false,
    onChange = () => {},
    mainCountry = 'ca',
    ...props
}: PhoneInputProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isHovering, setIsHovering] = useState<boolean>(false);

    return (
        <Wrapper>
            {label && <Styled.Label>{label}</Styled.Label>}

            <PhoneInputStyles
                isError={isError}
                withLabel={!!label}
                isFocused={isFocused}
                isHovering={isHovering}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                {...props}
            >
                <PhoneInputInternational
                    country={mainCountry}
                    value={value}
                    enableSearch={enableSearch}
                    disableSearchIcon={disableSearchIcon}
                    onChange={onChange}
                    onBlur={() => setIsFocused(false)}
                    onFocus={() => setIsFocused(true)}
                />
            </PhoneInputStyles>
        </Wrapper>
    );
};

export { PhoneInput, PhoneInputStyles };
export type { PhoneInputProps };
