import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const Base = styled(motion.div)`
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(24px);
`;

const Head = styled.div``;

const Title = styled.h6``;

const Body = styled.div``;

const Footer = styled.div``;

const Wrapper = styled(motion.div)``;

export default {
    Base,
    Head,
    Body,
    Title,
    Footer,
    Wrapper,
};
