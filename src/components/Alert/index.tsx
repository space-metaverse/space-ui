import {
    Info,
    Error,
    Check,
    Alert as AlertSvg,
} from '../../icons';
import { theme } from '../Theme';
import AlertStyles from './styles';
import type { AlertProps } from './types';

const Alert = ({
    text,
    type = 'info',
    withIcon = false,
    ...props
}: AlertProps) => (
    <AlertStyles.Wrapper
        {...props}
        type={type}
    >
        {withIcon && (
            <AlertStyles.IconWrapper>
                {type === 'success' && <Check stroke={theme.colors.green['400']} />}
                {type === 'error' && <AlertSvg stroke={theme.colors.red['400']} />}
                {type === 'warning' && <Error stroke={theme.colors.orange['400']} />}
                {type === 'info' && <Info stroke={theme.colors.blue['400']} />}
            </AlertStyles.IconWrapper>
        )}
        <AlertStyles.TextWrapper>
            {text}
        </AlertStyles.TextWrapper>
    </AlertStyles.Wrapper>
);

export {
    Alert,
    AlertStyles,
    type AlertProps,
};
