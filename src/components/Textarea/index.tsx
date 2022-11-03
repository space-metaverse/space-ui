import TextareaStyles from './styles';
import type { TextareaProps } from './types';

const Textarea = ({
    label,
    isError = false,
    disabled = false,
    className,
    ...props
}: TextareaProps) => (
    <TextareaStyles.Wrapper
        isError={isError}
        disabled={disabled}
        className={className}
    >
        {label && <TextareaStyles.Label>{label}</TextareaStyles.Label>}
        <TextareaStyles.Input
            {...props}
            disabled={disabled}
        />
    </TextareaStyles.Wrapper>
);

export {
    Textarea,
    TextareaStyles,
    type TextareaProps,
};
