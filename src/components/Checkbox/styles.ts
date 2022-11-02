import styled, { css } from 'styled-components';

const checked = css`
    border-color: ${({ theme }) => theme.colors.dark['700']};
    background-color: ${({ theme }) => theme.colors.dark['700']};
`;

const Input = styled.input`
    width: 0;
    height: 0;
    cursor: pointer;
    opacity: 0;
    position: absolute;

    &:checked ~ span {
        ${checked};

        &::after {
            top: .25rem;
            opacity: 1;
            pointer-events: auto;
        }
    }
`;

const Checkmark = styled.span`
    width: 1.25rem;
    border: ${({ theme }) => `1px solid ${theme.colors.dark['500']}`};
    height: 1.25rem;
    display: flex;
    transition: ${({ theme }) => theme.transitions.ease};
    align-items: center;
    margin-right: .75rem;
    border-radius: ${({ theme }) => theme.radius.sm};
    justify-content: center;
    
    &::after {
        top: .5rem;
        width: 0.3rem;
        height: 0.6rem;
        border: solid white;
        content: '';
        opacity: 0;
        position: absolute;
        transform: rotate(45deg);
        transition: ${({ theme }) => theme.transitions.ease};
        border-width: 0 2px 2px 0;
        pointer-events: none;
    }
`;

const Label = styled.label`
    ${({ theme }) => theme.fonts.size.sm};
    width: fit-content;
    color: ${({ theme }) => theme.colors.dark['800']};
    cursor: pointer;
    display: flex;
    position: relative;
    user-select: none;
    align-items: center;
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
    font-family: ${({ theme }) => theme.fonts.family.body};

    &:hover {
        ${Checkmark} {
            ${checked};
        }
    }
`;

export default {
    Label,
    Input,
    Checkmark,
};
