import Styled from './styles';
import { SkeletonProps } from './types';

const Skeleton = ({
    children,
    ...rest
}: SkeletonProps) => (
    <Styled {...rest}>
        {children}
    </Styled>
);

export { Skeleton };
