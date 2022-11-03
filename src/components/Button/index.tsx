import ButtonStyles from './styles';
import type { ButtonProps } from './types';

const Button = ({
    label = 'Button',
    ...props
}: ButtonProps) => (
    <ButtonStyles
        type="button"
        {...props}
    >
        {label}
    </ButtonStyles>
);

export {
    Button,
    ButtonStyles,
    type ButtonProps,
};
