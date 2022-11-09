import styled, { css } from 'styled-components';

import type { ToggleProps } from './types';

const Input = styled.input`
    width: 0;
    height: 0;
    cursor: pointer;
    opacity: 0;
    position: absolute;

    &:checked ~ span {
        background-color: ${({ theme }) => theme.colors.green['400']};

        &::after {
            left: 1.3rem;
        }
    }
`;

const Button = styled.span`
    width: 2.25rem;
    height: 1rem;
    display: flex;
    position: relative;
    transition: ${({ theme }) => theme.transitions.ease};
    align-items: center;
    border-radius: ${({ theme }) => theme.radius['3xl']};
    background-color: ${({ theme }) => theme.colors.dark['300']};

    &::after {
        left: 3px;
        width: .75rem;
        height: .75rem;
        content: '';
        position: absolute;
        transition: ${({ theme }) => theme.transitions.ease};
        border-radius: ${({ theme }) => theme.radius['3xl']};
        pointer-events: none;
        background-color: ${({ theme }) => theme.colors.white};
    }
`;

const Label = styled.label<Pick<ToggleProps, 'label' | 'disabled'>>`
    ${({ theme }) => theme.fonts.size.sm};
    width: fit-content;
    color: ${({ theme, disabled }) => (disabled ? theme.colors.dark['500'] : theme.colors.dark['800'])};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    display: flex;
    position: relative;
    user-select: none;
    align-items: center;
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
    font-family: ${({ theme }) => theme.fonts.family.body};

    ${({ label }) => label && css`
        ${Button} {
            margin-left: .75rem;
        }
    `}
    
    ${({ theme, disabled }) => disabled && css`
        ${Button} {
            cursor: not-allowed;
            background-color: ${theme.colors.dark['200']} !important;
        }
    `}
`;

export default {
    Input,
    Label,
    Button,
};
