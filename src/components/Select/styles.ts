import styled, { css } from 'styled-components';

import type { SelectStylesProps } from './types';

const Wrapper = styled.div`

`;

const Select = styled.select<{ $isLabel: boolean }>`
    ${({ theme }) => theme.fonts.size.md};
    font-family: ${({ theme }) => theme.fonts.family.body};
    width: 100%;
    color: ${({ theme }) => theme.colors.dark['800']};
    border: ${({ theme }) => `1px solid ${theme.colors.dark['300']}`};
    padding: 1rem 1rem 0.75rem 1rem;
    outline: none;
    transition: ${({ theme }) => theme.transitions.ease};
    border-radius: ${({ theme }) => theme.radius.xl};
    appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: right 0.7rem top 50%;
    background-size: 0.65rem auto;
    cursor: pointer;
    
    ${({ $isLabel }) => $isLabel && css`
        margin-top: 0.5rem;
    `}

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
    padding: 2rem;
    ${({ theme, isSelected }) => isSelected && css`
        color: ${theme.colors.purple['400']};
        background-color: ${theme.colors.purple['100']};
    `}
    &:hover {
        background-color: ${({ theme }) => theme.colors.purple['100']};
    }
`;

const Label = styled.label`
    ${({ theme }) => theme.fonts.size.sm};
    color: ${({ theme }) => theme.colors.dark['600']};
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
    font-family: ${({ theme }) => theme.fonts.family.body};
`;

export default {
    Wrapper,
    Option,
    Select,
    Label
};
