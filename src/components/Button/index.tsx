import Styled from './styles';
import { ButtonProps } from './types';

const Button = ({
    label = 'Button',
    ...props
}: ButtonProps) => (
    <Styled
        type="button"
        {...props}
    >
        {label}
    </Styled>
);

export {
    Button,
};
