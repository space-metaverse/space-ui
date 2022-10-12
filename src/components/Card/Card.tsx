import { HTMLAttributes } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    font-family: Aeroport;
    border-radius: 16px;
    border: 1px solid #F0F0F5;
    width: fit-content;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    } 
`;

const CardImage = styled.img`
    border-radius: 16px 16px 0px 0px;
    width: 100%;
    object-fit: cover;
`;

const CardContent = styled.div`
    padding: 0 1.5rem 1.5rem 1.5rem;
`;

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    image: string;
}

const Card = ({
    image,
    children,
    ...props
}: CardProps) => (
    <CardWrapper {...props}>
        <CardImage src={image} />
        <CardContent>
            {children}
        </CardContent>
    </CardWrapper>
);

export { Card };