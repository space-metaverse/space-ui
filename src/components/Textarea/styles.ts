import styled, { css } from 'styled-components';

import type { TextareaProps } from './types';

const Input = styled.textarea`
    ${({ theme }) => theme.fonts.size.md};
    color: ${({ theme }) => theme.colors.dark['800']};
    width: 100%;
    border: ${({ theme }) => `1px solid ${theme.colors.dark['300']}`};
    resize: none;
    outline: none;
    padding: 0.75rem 1rem;
    transition: ${({ theme }) => theme.transitions.ease};
    border-radius: ${({ theme }) => theme.radius.xl};
    background-color: transparent;

    &::placeholder {
        color: ${({ theme }) => theme.colors.dark['500']};
    }
`;

const Label = styled.label`
    ${({ theme }) => theme.fonts.size.sm};
    color: ${({ theme }) => theme.colors.dark['600']};
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
    margin-bottom: 0.5rem;
`;

const Wrapper = styled.div<TextareaProps>`
    display: flex;
    flex-direction: column;

    &:hover {
        ${Input} {
            border-color: ${({ theme }) => theme.colors.purple['400']};
        }
    }

    ${Label},
    ${Input} {
        font-family: ${({ theme }) => theme.fonts.family.body};
    }

    ${({ theme, disabled, isError }) => !isError && disabled && css`
        ${Label} {
            color: ${theme.colors.dark['500']};
        }

        &:hover {
            ${Input} {
                border-color: ${theme.colors.dark['200']};
            }
        }

        ${Input} {
            cursor: not-allowed;
            border-color: ${theme.colors.dark['200']};
        }
    `}

    ${({ theme, isError }) => isError && css`
        ${Input} {
            border: 1px solid ${theme.colors.red['500']};
            background-color: ${theme.colors.red['100']};
        }

        &:hover {
            ${Input} {
                border: 1px solid ${theme.colors.red['500']};
            }
        }
    `}
`;

export default {
    Label,
    Input,
    Wrapper,
};
