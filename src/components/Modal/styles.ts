import styled, { css } from 'styled-components';

import { animations } from '../Theme';
import type { StyledModalProps } from './types';

const sizes = {
    sm: '384px',
    md: '682px',
};

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    box-shadow: 0px 48px 48px -48px rgba(0, 0, 0, 0.24);
    border-radius: ${({ theme }) => theme.radius['3xl']};
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
`;

const Base = styled.div<StyledModalProps>`
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    opacity: ${({ show }) => (show ? 1 : 0)};
    z-index: ${({ show }) => (show ? 999 : -1)};
    position: fixed;
    transition: ${({ theme }) => theme.transitions.ease};
    align-items: center;
    pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
    justify-content: center;
    backdrop-filter: blur(24px);

    ${({ show }) => show && css`
        ${Wrapper} {
            ${animations.bounce};
        }
    `}

    ${({ size = 'sm' }) => css`
        ${Wrapper} {
            max-width: ${sizes[size]};
        }
    `}
`;

const Head = styled.div`
    padding: 24px 32px;
    position: relative;

    svg {
        color: ${({ theme }) => theme.colors.dark[500]};
        right: 32px;
        cursor: pointer;
        position: absolute;
    }
`;

const Title = styled.h6`
    ${({ theme }) => theme.fonts.size['2xl']};
    color: ${({ theme }) => theme.colors.dark[800]};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

const Body = styled.div``;

const Footer = styled.div``;

export default {
    Base,
    Head,
    Body,
    Title,
    Footer,
    Wrapper,
};
