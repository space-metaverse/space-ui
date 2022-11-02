import ButtonStyles from './styles';
import { ButtonProps } from './types';

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
