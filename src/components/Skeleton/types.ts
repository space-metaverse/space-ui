import type { Dispatch, HTMLAttributes, SetStateAction } from 'react';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    run?: boolean;
    onRun?: Dispatch<SetStateAction<boolean>>;
    width?: string | number;
    height?: string | number;
    rounded?: boolean;
}
