import { ButtonHTMLAttributes, ReactNode } from 'react';

import styled, { css } from 'styled-components';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'green' | 'blue' | 'red' | 'orange' | 'purple' | 'grey' | 'white';

export const StyledButton = styled.button<{
    size: ButtonSize,
    color: ButtonColor,
}>`
    display: flex;
    align-content: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    border: none;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    transition: background-color 0.2s ease-in-out;
    font-family: Aeroport;
    border-radius: 100px;
    ${(props) => {
        switch (props.size) {
        case 'small':
            return css`
                    font-size: 0.75rem;
                    padding: 0.75rem 1rem;
                    min-width: 10rem;
                `;
        case 'medium':
            return css`
                    font-size: 1rem;
                    padding: 1rem 1rem;
                    min-width: 12rem;
                `;
        case 'large':
            return css`
                    font-size: 1.25rem;
                    padding: 1.25rem 1.5rem;
                    min-width: 14rem;
                `;
        }
    }}
    ${(props) => {
        switch (props.color) {
        case 'green':
            return css`
                    background-color: #00CC5F;
                    &:hover {
                        background-color: #02c15b;
                    }
                `;
        case 'blue':
            return css`
                    background-color: #3332FE;
                    &:hover {
                        background-color: #1e25e9;
                    }
                `;
        case 'red':
            return css`
                    background-color: #F50018;
                    &:hover {
                        background-color: #d30015;
                    }
                `;
        case 'orange':
            return css`
                    background-color: #FF7800;
                    &:hover {
                        background-color: #ed6f00;
                    }
                `;
        case 'purple':
            return css`
                    background-color: #8900FF;
                    &:hover {
                        background-color: #7e00eb;
                    }
                `;
        case 'grey':
            return css`
                    background-color: #71717A;
                    &:hover {
                        background-color: #696972;
                    }
                `;
        case 'white':
            return css`
                    background-color: #FFFFFF;
                    &:hover {
                        background-color: #f5f5f5;
                    }
                `;
        }
    }}
`;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string | ReactNode;
    size: ButtonSize;
    color: ButtonColor;
}

const Button = ({
    label = 'Button',
    size = 'medium',
    color = 'blue',
    ...props
}: ButtonProps) => (
    <StyledButton
        type="button"
        size={size}
        color={color}
        {...props}
    >
        {label}
    </StyledButton>
);

export { Button };
