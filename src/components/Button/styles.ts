import styled, { css } from 'styled-components';

import { rgba } from '../../helpers';
import { StyledButtonProps } from './types';

export default styled.button.attrs<StyledButtonProps>(({ size, color }) => ({
    size: size || 'medium',
    color: color || 'blue',
}))<StyledButtonProps>`
    color: ${({ theme }) => theme.colors.white};
    border: none;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    display: flex;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    transition: ${({ theme }) => theme.transitions.ease};
    font-family: ${({ theme }) => theme.fonts.family};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    border-radius: ${({ theme }) => theme.radius.full};
    align-content: center;
    justify-content: center;

    ${({ size }) => {
        switch (size) {
            case 'medium':
                return css`
                    ${({ theme }) => theme.fonts.size.lg};
                    padding: 1rem 1rem;
                    min-width: 12rem;
                `;
            case 'large':
                return css`
                    ${({ theme }) => theme.fonts.size.xl};
                    padding: 1.25rem 1.5rem;
                    min-width: 14rem;
                `;

            default:
                return css`
                    ${({ theme }) => theme.fonts.size.sm};
                    padding: 0.75rem 1rem;
                    min-width: 10rem;
                `;
        }
    }}

    ${({ color, theme }) => {
        switch (color) {
            case 'green':
                return css`
                    background-color: ${theme.colors.green['400']};
                    &:hover {
                        box-shadow: ${`0px 12px 48px -12px ${rgba(theme.colors.green['400'], '.48')}`};
                        background-color: ${theme.colors.green['500']};
                    }
                `;

            case 'red':
                return css`
                    background-color: ${theme.colors.red['400']};
                    &:hover {
                        box-shadow: ${`0px 12px 48px -12px ${rgba(theme.colors.red['400'], '.48')}`};
                        background-color: ${theme.colors.red['500']};
                    }
                `;
            case 'orange':
                return css`
                    background-color: ${theme.colors.orange['400']};
                    &:hover {
                        box-shadow: ${`0px 12px 48px -12px ${rgba(theme.colors.orange['400'], '.48')}`};
                        background-color: ${theme.colors.orange['500']};
                    }
                `;
            case 'purple':
                return css`
                    background-color: ${theme.colors.purple['400']};
                    &:hover {
                        box-shadow: ${`0px 12px 48px -12px ${rgba(theme.colors.purple['400'], '.48')}`};
                        background-color: ${theme.colors.purple['500']};
                    }
                `;
            case 'grey':
                return css`
                    background-color: ${theme.colors.dark['600']};
                    &:hover {
                        box-shadow: ${`0px 12px 48px -12px ${rgba(theme.colors.dark['600'], '.48')}`};
                        background-color: ${theme.colors.dark['500']};
                    }
                `;
            case 'white':
                return css`
                    color: ${theme.colors.blue['400']};
                    background-color: ${theme.colors.white};
                    &:hover {
                        background-color: ${theme.colors.dark['100']};
                    }
                `;

            default:
                return css`
                    background-color: ${theme.colors.blue['400']};
                    &:hover {
                        box-shadow: ${`0px 12px 48px -12px ${rgba(theme.colors.blue['400'], '.48')}`};
                        background-color: ${theme.colors.blue['500']};
                    }
                    &:focus {
                        background-color: ${theme.colors.blue['600']};
                    }
                `;
        }
    }}
`;
