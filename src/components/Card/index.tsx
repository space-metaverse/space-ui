import { HTMLAttributes } from 'react';

import CardStyles from './styles';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    image: string;
}

const Card = ({
    image,
    children,
    ...props
}: CardProps) => (
    <CardStyles.Wrapper {...props}>
        <CardStyles.Image src={image} />
        <CardStyles.Content>
            {children}
        </CardStyles.Content>
    </CardStyles.Wrapper>
);

export {
    Card,
    CardStyles,
    type CardProps,
};
