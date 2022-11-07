import styled, { css } from 'styled-components';

import { rgba } from '../../helpers';
import type { StyledButtonProps } from './types';

const appearance = (color: string, hover: string, outline: boolean) => css`
    color: ${({ theme }) => (!outline ? theme.colors.white : color)};
    border-color: ${color};
    background-color: ${!outline ? color : 'transparent'};

    &:hover {
        color: ${!outline ? undefined : hover};
        box-shadow: ${!outline ? `0px 12px 48px -12px ${rgba(color, '.48')}` : undefined};
        border-color: ${hover};
        background-color: ${!outline ? hover : 'transparent'};
    }
`;

export default styled.button.attrs<StyledButtonProps>(({ size, color }) => ({
    size: size || 'medium',
    color: color || 'blue',
}))<StyledButtonProps>`
    ${({ theme }) => theme.fonts.size.md};
    border: 1px solid;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    display: flex;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    transition: ${({ theme }) => theme.transitions.ease};
    font-family: ${({ theme }) => theme.fonts.family.sans};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    border-radius: ${({ theme }) => theme.radius.full};
    align-content: center;
    justify-content: center;

    ${({ size }) => {
        switch (size) {
            case 'medium':
                return css`
                    padding: 1rem 1.25rem;
                    min-width: 12rem;
                `;
            case 'large':
                return css`
                    padding: 1.25rem 1.5rem;
                    min-width: 14rem;
                `;

            default:
                return css`
                    padding: 0.625rem 1rem;
                    min-width: 10rem;
                `;
        }
    }}

    ${({ color, theme, outline = false }) => {
        switch (color) {
            case 'green':
                return appearance(theme.colors.green['400'], theme.colors.green['500'], outline);

            case 'red':
                return appearance(theme.colors.red['400'], theme.colors.red['500'], outline);

            case 'orange':
                return appearance(theme.colors.orange['400'], theme.colors.orange['500'], outline);

            case 'purple':
                return appearance(theme.colors.purple['400'], theme.colors.purple['500'], outline);

            case 'grey':
                return appearance(theme.colors.dark['600'], theme.colors.dark['500'], outline);

            case 'white':
                return css`
                color: ${theme.colors.blue['400']};
                border-color: ${theme.colors.white};
                background-color: ${theme.colors.white};
                &:hover {
                    background-color: ${theme.colors.blue['100']};
                    background-color: ${theme.colors.blue['100']};
                }
            `;

        case 'white-red':
            return css`
                    color: ${theme.colors.red['400']};
                    border-color: ${theme.colors.white};
                    background-color: ${theme.colors.white};
                    &:hover {
                        background-color: ${theme.colors.red['100']};
                        background-color: ${theme.colors.red['100']};
                    }
                `;

            default:
                return css`
                    ${appearance(theme.colors.blue['400'], theme.colors.blue['500'], outline)}

                    &:focus {
                        color: ${theme.colors.white};
                        background-color: ${theme.colors.blue['600']};
                    }
                `;
        }
    }}
`;
