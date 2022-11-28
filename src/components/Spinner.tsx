import type { HTMLAttributes } from 'react';

import styled, { keyframes } from 'styled-components';

const sizes = {
    small: '2rem',
    large: '3.5rem',
    medium: '2.5rem',
};

interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
    size?: 'small' | 'medium' | 'large'
}

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.span.attrs({
    className: 'spinner',
})<SpinnerProps>`
    width: ${({ size = 'medium' }) => sizes[size]};
    height: ${({ size = 'medium' }) => sizes[size]};
    border: ${({ theme }) => `4px solid ${theme.colors.dark['200']}`};
    display: inline-block;
    animation: ${rotate} 1.1s infinite linear;
    border-radius: ${({ theme }) => theme.radius.full};
    border-top-color: ${({ theme }) => theme.colors.blue['400']};
`;

export {
    Spinner,
    type SpinnerProps,
};
