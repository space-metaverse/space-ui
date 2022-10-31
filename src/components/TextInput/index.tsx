import {
    useMemo,
    useState,
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
    isError = false,
    disabled = false,
    onChange,
    className,
    showPassword = false,
    ...props
}: TextInputProps) => {
    const [valueInternal, setValueInternal] = useState<string>('');
    const [showPasswordInternal, setShowPasswordInternal] = useState<boolean>(false);
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const valueToUse = useMemo(() => value || valueInternal, [value, valueInternal]);
    const showPasswordToUse = useMemo(() => showPassword || showPasswordInternal, [showPassword, showPasswordInternal]);

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
            className={className}
            onMouseEnter={useCallback(() => setIsHovering(true), [])}
            onMouseLeave={useCallback(() => setIsHovering(false), [])}
        >
            <Styled.Label>{label}</Styled.Label>
            <Styled.InputGrid>
                <Styled.Input
                    type={showPasswordToUse ? 'text' : type}
                    onChange={handleChange}
                    disabled={disabled}
                    isError={isError}
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
                        <Styled.PasswordToggleWrapper
                            onClick={handlePasswordToggle}
                            isError={isError}
                            disabled={disabled}
                            isHovering={isHovering}
                            isFocused={isFocused}
                        >
                            {showPasswordToUse ? <EyeOpen /> : <EyeClose />}
                        </Styled.PasswordToggleWrapper>
                    )
                }
            </Styled.InputGrid>
        </Styled.Wrapper>
    );
};

export { TextInput };
