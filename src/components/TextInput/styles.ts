import styled, { css } from 'styled-components';

import { InputProps } from './types';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 300;
    color: #111114;
`;

const Label = styled.label`
    padding-bottom: 0.5rem;
    font-weight: 700;
`;

const Input = styled.input<InputProps & { showPassword: boolean, isHovering: boolean, isFocused: boolean }>`
    padding: 0.75rem 1rem;
    font-size: 1.2rem;
    border: 1px solid #DCDCE0;
    transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    border-radius: 12px;
    outline: none;
    width: 100%;
    ${props => props.disabled && css`
        opacity: 0.5;
        cursor: not-allowed;
    `}
    ${props => props.isError && css`
        border: 1px solid #F50018;
        background-color: #F500180D;
    `}
    ${props => (props.type === 'password' || props.showPassword) && css`
        border-radius: 12px 0 0 12px;
        border-right: none !important;
    `}
    ${props => (props.isFocused || props.isHovering) && css`
        border: 1px solid ${props.isError ? '#F50018' : '#8900FF'};
    `}
`;

const InputGrid = styled.div`
    display: flex;
    align-items: center;
`;

const PasswordToggleWrapper = styled.div<{
    isError: boolean,
    isHovering: boolean,
    isFocused: boolean,
    disabled: boolean,
}>`
    border: 1px solid #DCDCE0;
    border-radius: 0 12px 12px 0;
    border-left: none !important;
    transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    padding: 0.7rem 1rem;
    cursor: pointer;
    ${props => props.disabled && css`
        opacity: 0.5;
        cursor: not-allowed;
    `}
    ${props => props.isError && css`
        border: 1px solid #F50018;
        background-color: #F500180D;
    `}
    ${props => (props.isFocused || props.isHovering) && css`
        border: 1px solid ${props.isError ? '#F50018' : '#8900FF'};
    `}
`;

export default {
    Label,
    Input,
    Wrapper,
    InputGrid,
    PasswordToggleWrapper,
};
