import { HTMLAttributes } from 'react';

import Styled from './styles';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    image: string;
}

const Card = ({
    image,
    children,
    ...props
}: CardProps) => (
    <Styled.Wrapper {...props}>
        <Styled.Image src={image} />
        <Styled.Content>
            {children}
        </Styled.Content>
    </Styled.Wrapper>
);

export { Card };
