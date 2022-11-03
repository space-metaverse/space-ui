import styled, { css } from 'styled-components';

import { rgba } from '../../helpers';
import type { PopoverStylesProps } from './types';

const transition = (show: boolean, distance: number) => (show ? `${distance + 16}px` : `${distance}px`);

const Box = styled.div<PopoverStylesProps>`
    gap: .25rem;
    opacity: ${({ show }) => (show ? 1 : 0)};
    padding: .5rem;
    position: absolute;
    min-width: 13rem;
    transition: ${({ theme }) => theme.transitions.ease};
    box-shadow: ${({ theme }) => `0px 12px 48px -12px ${rgba(theme.colors.dark['800'], '.12')}`};
    border-radius: ${({ theme }) => theme.radius.xl};
    flex-direction: column;
    pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
    background-color: ${({ theme }) => theme.colors.white};

    ${({
        show,
        position,
        childInfo,
        popoverInfo,
    }) => {
        switch (position) {
            case 'top':
                return css`
                    margin-top: -${transition(show, popoverInfo.height)};
                `;
            case 'left':
                return css`
                    margin-left: -${transition(show, popoverInfo.width - 2)};
                `;
            case 'right':
                return css`
                    margin-left: ${transition(show, childInfo.width - 2)};
                `;
            default:
                return css`
                    margin-top: ${transition(show, childInfo.height)};
                `;
        }
    }}
`;

const Button = styled.button`
    ${({ theme }) => theme.fonts.size.sm};
    gap: .75rem;
    color: ${({ theme }) => theme.colors.dark['800']};
    width: 100%;
    border: none;
    cursor: pointer;
    padding: .75rem;
    display: flex;
    outline: none;
    font-family: ${({ theme }) => theme.fonts.family.sans};
    align-items: center;
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    border-radius: ${({ theme }) => theme.radius.lg};
    text-transform: uppercase;
    background-color: transparent;

    &,
    svg path {
        transition: ${({ theme }) => theme.transitions.ease};
    }

    &:hover {
        color: ${({ theme }) => theme.colors.blue['400']};
        background-color: ${({ theme }) => theme.colors.blue['100']};

        svg path {
            stroke: ${({ theme }) => theme.colors.blue['400']};
        }
    }
`;

const Wrapper = styled.div`
    float: left;
`;

export default {
    Box,
    Button,
    Wrapper,
};
