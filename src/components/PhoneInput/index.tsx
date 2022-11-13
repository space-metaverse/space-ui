import "react-intl-tel-input/dist/main.css";

import { useEffect, useState } from "react";
import IntlTelInput from "react-intl-tel-input";

import Styled from "../TextInput/styles";
import PhoneInputStyles, { Wrapper } from "./styles";

type PhoneInputProps = {
	preferredCountries: string[];
	isError?: boolean;
	value?: string;
	label?: string;
	onChange?: (value: string) => void;
};

const regexInput = /[^0-9+()-]/gi;

const PhoneInput = ({
	label,
	value = "",
	isError = false,
	onChange = () => {},
	preferredCountries = ["us", "ca", "br"],
	...props
}: PhoneInputProps) => {
	const [key, setKey] = useState<number>(0);
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState(value);
	const [isHovering, setIsHovering] = useState<boolean>(false);

	useEffect(() => {
		setInputValue(value.replace(regexInput, ""));
	}, [value]);

	useEffect(() => {
		setKey((k) => k + 1);
	}, [preferredCountries]);

	return (
		<Wrapper>
			{label && <Styled.Label>{label}</Styled.Label>}

			<PhoneInputStyles
				key={key}
				isError={isError}
				withLabel={!!label}
				isFocused={isFocused}
				isHovering={isHovering}
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}
				{...props}
			>
				<IntlTelInput
					value={inputValue}
					autoHideDialCode={false}
					separateDialCode={false}
					preferredCountries={preferredCountries}
					onPhoneNumberChange={(
						isValid,
						newValue,
						selectedCountryData,
						fullNumber,
					) => {
						onChange(fullNumber.replace(regexInput, ""));
						setInputValue(newValue.replace(regexInput, ""));
					}}
					onPhoneNumberBlur={() => setIsFocused(false)}
					onPhoneNumberFocus={() => setIsFocused(true)}
				/>
			</PhoneInputStyles>
		</Wrapper>
	);
};

export { PhoneInput, PhoneInputStyles, type PhoneInputProps };
