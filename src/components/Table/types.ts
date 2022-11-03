import type { TableHTMLAttributes } from 'react';

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
    rows: any[];
    columns?: string[];
    withBorder?: boolean;
}

export type ColumnFilters = Record<string, 'up' | 'down' | 'none'>;
