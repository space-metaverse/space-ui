import {
    useMemo,
    useState,
    FocusEvent,
    ChangeEvent,
    useCallback,
} from 'react';

import { EyeClose, EyeOpen } from '../../icons';
import Styled from './styles';
import { TextInputProps } from './types';

const TextInput = ({
    type,
    label = 'Label',
    value = '',
    onBlur,
    isError = false,
    disabled = false,
    onFocus,
    onChange,
    className,
    showPassword = false,
    ...props
}: TextInputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [valueInternal, setValueInternal] = useState('');
    const [showPasswordInternal, setShowPasswordInternal] = useState(false);

    const valueToUse = useMemo(() => value || valueInternal, [value, valueInternal]);
    const showPasswordToUse = useMemo(() => showPassword || showPasswordInternal, [showPassword, showPasswordInternal]);

    const handleBlur = useCallback((e: FocusEvent<HTMLInputElement, Element>) => {
        setIsFocused(false);

        if (onBlur) onBlur(e);
    }, [onBlur]);

    const handleFocus = useCallback((e: FocusEvent<HTMLInputElement, Element>) => {
        setIsFocused(true);

        if (onFocus) onFocus(e);
    }, [onFocus]);

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        if (!disabled) {
            setValueInternal(event.target.value);
            onChange?.(event);
        }
    }, [onChange, disabled]);

    const handlePasswordToggle = useCallback(() => {
        setShowPasswordInternal(prev => !prev);
    }, []);

    return (
        <Styled.Wrapper
            isError={isError}
            disabled={disabled}
            isFocused={isFocused}
            className={className}
        >
            <Styled.Label>{label}</Styled.Label>
            <Styled.InputGrid>
                <Styled.Input
                    type={showPasswordToUse ? 'text' : type}
                    value={valueToUse}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    disabled={disabled}
                    onChange={handleChange}
                    {...props}
                />
                {
                    (type === 'password' || showPasswordToUse) && (
                        <Styled.PasswordToggleWrapper
                            as={showPasswordToUse ? EyeOpen : EyeClose}
                            onClick={handlePasswordToggle}
                            disabled={disabled}
                        />
                    )
                }
            </Styled.InputGrid>
        </Styled.Wrapper>
    );
};

export { TextInput };