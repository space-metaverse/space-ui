import styled from 'styled-components';

import type { StyledModalProps } from './types';

const Base = styled.div<StyledModalProps>`
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    opacity: ${({ show }) => (show ? 1 : 0)};
    position: fixed;
    transition: ${({ theme }) => theme.transitions.easeInOut};
    align-items: center;
    pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
    justify-content: center;
    backdrop-filter: blur(24px);
`;

const Head = styled.div``;

const Title = styled.h6``;

const Body = styled.div``;

const Footer = styled.div``;

const Wrapper = styled.div``;

export default {
    Base,
    Head,
    Body,
    Title,
    Footer,
    Wrapper,
};
