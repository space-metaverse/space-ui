import styled, { css } from 'styled-components';

import type { CheckboxProps } from './types';

const checked = css`
    border-color: ${({ theme }) => theme.colors.dark['700']};
    background-color: ${({ theme }) => theme.colors.dark['700']};
`;

const BaseInput = styled.input`
    width: 0;
    height: 0;
    cursor: pointer;
    opacity: 0;
    position: absolute;

    &:checked ~ span::after {
        opacity: 1;
        pointer-events: auto;
    }
`;

const BaseCheck = styled.span`
    width: 1.25rem;
    border: ${({ theme }) => `1px solid ${theme.colors.dark['500']}`};
    height: 1.25rem;
    display: flex;
    transition: ${({ theme }) => theme.transitions.ease};
    align-items: center;
    margin-right: .75rem;
    justify-content: center;

    &::after {
        content: '';
        opacity: 0;
        position: absolute;
        transition: ${({ theme }) => theme.transitions.ease};
        pointer-events: none;
    }
`;

const BaseLabel = styled.label<Pick<CheckboxProps, 'disabled'>>`
    ${({ theme }) => theme.fonts.size.sm};
    width: fit-content;
    color: ${({ theme, disabled }) => (disabled ? theme.colors.dark['600'] : theme.colors.dark['800'])};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    display: flex;
    position: relative;
    user-select: none;
    align-items: center;
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
    font-family: ${({ theme }) => theme.fonts.family.body};

    ${({ disabled }) => disabled && css`
        ${BaseCheck} {
            cursor: not-allowed;
            opacity: .5;
        }
    `}
`;

const Input = styled(BaseInput)`
    &:checked ~ span {
        ${checked};

        &::after {
            top: .25rem;
        }
    }
`;

const Checkmark = styled(BaseCheck)`
    border-radius: ${({ theme }) => theme.radius.sm};
    
    &::after {
        top: .5rem;
        width: 0.3rem;
        height: 0.6rem;
        border: ${({ theme }) => `solid ${theme.colors.white}`};
        transform: rotate(45deg);
        border-width: 0 2px 2px 0;
    }
`;

const Label = styled(BaseLabel)`
    &:hover {
        ${Checkmark} {
            ${checked};
        }
    }
`;

export default {
    Label,
    Input,
    BaseCheck,
    Checkmark,
    BaseInput,
    BaseLabel,
};
