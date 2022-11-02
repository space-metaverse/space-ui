import styled, { css } from 'styled-components';

import { SkeletonProps } from './types';

export default styled.div<SkeletonProps>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    display: flex;
    border-radius: ${({ theme, rounded }) => (rounded ? theme.radius.full : theme.radius.lg)};
    
    &:after {
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        content: "";
        overflow: hidden;
        position: absolute;
        border-radius: ${({ theme }) => theme.radius['2xl']};
        pointer-events: none;
    }

    ${({ run }) => run && css`
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

        @keyframes pulse {
            0%, 100% {
                opacity: 1;
            }
            
            50% {
                opacity: .5;
            }
        };

        background-color: #eee;
    `}
`;
