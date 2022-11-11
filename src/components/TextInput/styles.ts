import styled, { css } from 'styled-components';

import type { InputProps } from './types';

const Label = styled.label`
    ${({ theme }) => theme.fonts.size.sm};
    color: ${({ theme }) => theme.colors.dark['600']};
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
    margin-bottom: 0.5rem;
`;

const Input = styled.input`
    ${({ theme }) => theme.fonts.size.md};
    color: ${({ theme }) => theme.colors.dark['800']};
    width: 100%;
    border: none;
    outline: none;
    padding: 0.75rem 1rem;
    background-color: transparent;

    &::placeholder {
        color: ${({ theme }) => theme.colors.dark['500']};
    }
`;

const InputGrid = styled.div`
    border: ${({ theme }) => `1px solid ${theme.colors.dark['300']}`};
    display: flex;
    transition: ${({ theme }) => theme.transitions.ease};
    align-items: center;
    border-radius: ${({ theme }) => theme.radius.xl};
`;

const PasswordToggleWrapper = styled.div`
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: ${({ theme }) => theme.transitions.ease};
`;

const focused = css`
    ${InputGrid} {
        border-color: ${({ theme }) => theme.colors.purple['400']};
    }
`;

const Wrapper = styled.div<InputProps>`
    display: flex;
    font-family: ${({ theme }) => theme.fonts.family.body};
    flex-direction: column;

    &:hover {
        ${focused}
    }

    ${({ isFocused, disabled }) => !disabled && isFocused && css`
        ${focused}
    `}

    ${({ theme, disabled, isError }) => !isError && disabled && css`
        ${Label} {
            color: ${theme.colors.dark['500']};
        }

        &:hover {
            ${InputGrid} {
                border-color: ${theme.colors.dark['200']};
            }
        }

        ${Input} {
            cursor: not-allowed;
        }

        ${InputGrid} {
            border-color: ${theme.colors.dark['200']};
        }
    `}

    ${({ theme, isError }) => isError && css`
        ${InputGrid} {
            border-color: ${theme.colors.red['500']};
            background-color: ${theme.colors.red['100']};
        }

        &:hover {
            ${InputGrid} {
                border-color: ${theme.colors.red['500']};
            }
        }
    `}
`;

export default {
    Label,
    Input,
    Wrapper,
    InputGrid,
    PasswordToggleWrapper,
};
