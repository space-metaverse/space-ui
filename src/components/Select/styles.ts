import styled, { css } from 'styled-components';

import type { SelectStylesProps } from './types';

const Wrapper = styled.select`
    ${({ theme }) => theme.fonts.size.md};
    width: 100%;
    color: ${({ theme }) => theme.colors.dark['800']};
    border: ${({ theme }) => `1px solid ${theme.colors.dark['300']}`};
    padding: 0.75rem 1rem;
    outline: none;
    transition: ${({ theme }) => theme.transitions.ease};
    border-radius: ${({ theme }) => theme.radius.xl};

    ${({ theme, disabled }) => (disabled
        ? css`
            cursor: not-allowed;
            border-color: ${theme.colors.dark['200']};
        `
        : css`
            &:hover,
            &:focus {
                border-color: ${theme.colors.purple['400']};
            }
        `)}
`;

const Option = styled.option<SelectStylesProps>`
    padding: 1rem;
    ${({ theme, isSelected }) => isSelected && css`
        color: ${theme.colors.purple['400']};
        background-color: ${theme.colors.purple['100']};
    `}
    &:hover {
        background-color: ${({ theme }) => theme.colors.purple['100']};
    }
`;

export default {
    Option,
    Wrapper,
};
