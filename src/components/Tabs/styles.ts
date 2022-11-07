import styled from 'styled-components';

import type { StyledTabProps } from './types';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
`;

const Tab = styled.span<StyledTabProps>`
    ${({ theme }) => theme.fonts.size.sm};
    color: ${({ theme }) => theme.colors.dark['800']};
    cursor: pointer;
    padding: 0.875rem 2rem;
    flex-grow: 1;
    text-align: center;
    transition: ${({ theme }) => theme.transitions.ease};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    border-bottom: ${({ theme, activeTab }) => `2px solid ${(activeTab ? theme.colors.blue['400'] : 'transparent')}`};
    letter-spacing: 1px;
`;

export default {
    Tab,
    Wrapper,
};
