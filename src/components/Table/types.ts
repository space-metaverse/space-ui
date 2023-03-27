import type { TableHTMLAttributes } from 'react';

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
    rows: any[];
    columns?: string[];
    withBorder?: boolean;
    onRowClick?: (row: any) => void;
}

export type ColumnFilters = Record<string, 'up' | 'down' | 'none'>;
