import SkeletonStyles from './styles';
import type { SkeletonProps } from './types';

const Skeleton = ({
    children,
    ...rest
}: SkeletonProps) => (
    <SkeletonStyles {...rest}>
        {children}
    </SkeletonStyles>
);

export {
    Skeleton,
    SkeletonStyles,
    type SkeletonProps,
};
