import {
    Info,
    Error,
    Check,
    Alert as AlertSvg,
} from '../../icons';
import { theme } from '../Theme';
import Styled from './styles';
import { AlertProps } from './types';

const Alert = ({
    text,
    type = 'info',
    withIcon = false,
    ...props
}: AlertProps) => (
    <Styled.Wrapper
        {...props}
        type={type}
    >
        {withIcon && (
            <Styled.IconWrapper>
                {type === 'success' && <Check stroke={theme.colors.green['400']} />}
                {type === 'error' && <AlertSvg stroke={theme.colors.red['400']} />}
                {type === 'warning' && <Error stroke={theme.colors.orange['400']} />}
                {type === 'info' && <Info stroke={theme.colors.blue['400']} />}
            </Styled.IconWrapper>
        )}
        <Styled.TextWrapper>
            {text}
        </Styled.TextWrapper>
    </Styled.Wrapper>
);

export { Alert };
