import type { Dispatch, SetStateAction } from 'react';

export interface BulletProps {
    disabled?: boolean
    selected?: boolean
}

export interface UsePaginationProps {
    pageSize: number
    totalCount: number
    currentPage: number
    siblingCount?: number
}

export interface PaginationProps extends UsePaginationProps {
    onPage: Dispatch<SetStateAction<number>>
    className?: string
}
