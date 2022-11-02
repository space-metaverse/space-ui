import styled, { css, DefaultTheme } from 'styled-components';

import { AlertProps } from './types';

const types: Record<string, keyof DefaultTheme['colors']> = {
    info: 'blue',
    error: 'red',
    warning: 'orange',
    success: 'green',
};

const TextWrapper = styled.div`
    ${({ theme }) => theme.fonts.size.sm};
    padding: 0.5rem 1rem;
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
    font-family: ${({ theme }) => theme.fonts.family.body};
`;

const IconWrapper = styled.div`
    padding: 0.5rem 0.625rem;
    border-radius: ${({ theme }) => `${theme.radius.xl} 0 0 ${theme.radius.xl}`};
`;

const Wrapper = styled.div<Omit<AlertProps, 'text'>>`
    width: fit-content;
    display: flex;
    align-items: center;
    border-radius: ${({ theme }) => theme.radius.xl};

    ${({ type, theme }) => css`
        &,
        ${IconWrapper} {
            color: ${theme.colors[types[type]]['400']};
            background-color: ${theme.colors[types[type]]['100']};
        }
    `}};
`;

export default {
    Wrapper,
    TextWrapper,
    IconWrapper,
};
