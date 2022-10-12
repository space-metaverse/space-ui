import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

const StyledChip = styled.div<{ color: string }>`
    font-family: Aeroport;
    padding: 0.25rem 1rem;
    width: fit-content;
    border-radius: 20px;
    ${props => {
        switch (props.color) {
            case 'grey':
                return css`
                    background-color: #71717A1F;
                    color: #71717A;
                `
            case 'blue':
                return css`
                    background-color: #3332FE1F;
                    color: #3332FE;
                `
            case 'green':
                return css`
                    background-color: #00CC5F1F;
                    color: #00CC5F;
                `
            case 'orange':
                return css`
                    background-color: #FF78001F;
                    color: #FF7800;
                `
            case 'red':
                return css`
                    background-color: #F500181F;
                    color: #F50018;
                `
        }
    }}
`;

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    color: 'grey' | 'blue' | 'green' | 'orange' | 'red';
}

const Chip = ({
    label = 'Chip',
    color = 'blue',
    className,
    ...props
}: ChipProps) => (
    <StyledChip color={color} className={className} {...props}>
        {label}
    </StyledChip>
);

export { Chip };
