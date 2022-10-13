import { useMemo, useState, useCallback, TableHTMLAttributes } from 'react';
import { Selector } from '../../icons';
import styled from 'styled-components';

const TableWrapper = styled.table`
    table-layout: fixed;
    width: 100%;
    white-space: nowrap;
    font-family: Aeroport;
    border-spacing: 0;
`;

const TableHead = styled.thead`
    background-color: #FAFAFC;
    border-radius: 20px;
    color: #71717A;
`;

const TableHeadRow = styled.tr`
    background-color: #FAFAFC;
    border-radius: 20px;
`;

const TableHeadData = styled.th`
    padding: 0.75rem 1.5rem;
    color: #71717A;
    cursor: pointer;
    overflow: hidden;
    &:hover {
        color: #111114;
    }
    &:first-child {
        border-radius: 20px 0 0 20px;
    }
    &:last-child {
        border-radius: 0 20px 20px 0;
    }
`;

const TableHeadGrid = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 0.5rem;
`;

const TableBody = styled.tbody`
    color: #111114;
`;

const TableBodyRow = styled.tr``;

const TableBodyData = styled.td`
    padding: 1rem 1rem 1rem 2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
    columns?: string[];
    rows: any[];
    className?: string;
}

type ColumnFilters = Record<string, 'up' | 'down' | 'none'>;

const Table = ({
    columns = [],
    rows = [],
    className
}: TableProps) => {
    const [columnFilters, setColumnFilters] = useState<ColumnFilters>({});

    const handleColumnFilter = useCallback((column: string) => {
        setColumnFilters((prev) => {
            const currentFilter = prev[column] || 'none';
            return {
                [column]: currentFilter === 'up' ? 'down' : 'up',
            };
        });
    }, []);

    const filteredRows = useMemo(() => {
        const columnFilterEntries = Object.entries(columnFilters);
        if (columnFilterEntries.length === 0) {
            return rows;
        }
        return rows.sort((a, b) => {
            const aValues: any[] = Object.values(a);
            const bValues: any[] = Object.values(b);
            for (const [column, filter] of columnFilterEntries) {
                const index = columns.indexOf(column);
                if (aValues[index] < bValues[index]) {
                    return filter === 'up' ? 1 : -1;
                }
                if (aValues[index] > bValues[index]) {
                    return filter === 'up' ? -1 : 1;
                }
            }
            return 0;
        });
    }, [rows, columns, columnFilters]);

    return (
        <TableWrapper className={className}>
            <TableHead>
                <TableHeadRow>
                    {
                        columns.map((column, index) => (
                            <TableHeadData key={`${column}-${index.toString()}`} onClick={() => handleColumnFilter(column)}>
                                <TableHeadGrid>
                                    {
                                        (typeof Object.values(rows?.[0])?.[index] === 'number' ||
                                            typeof Object.values(rows?.[0])?.[index] === 'string') && (
                                            <Selector
                                                beforeInjection={(svg: any) => {
                                                    const [upArrow, downArrow] = svg.querySelectorAll('path');
                                                    if (columnFilters[column] === 'up') {
                                                        upArrow.style.stroke = '#111114';
                                                        downArrow.style.stroke = '#B0B0B8';
                                                    } else if (columnFilters[column] === 'down') {
                                                        downArrow.style.stroke = '#111114';
                                                        upArrow.style.stroke = '#B0B0B8';
                                                    } else {
                                                        upArrow.style.stroke = '#B0B0B8';
                                                        downArrow.style.stroke = '#B0B0B8';
                                                    }
                                                }}
                                            />
                                        )
                                    }
                                    {column}
                                </TableHeadGrid>
                            </TableHeadData>
                        ))
                    }
                </TableHeadRow>
            </TableHead>
            <TableBody>
                {
                    filteredRows.map((row, index) => (
                        <TableBodyRow key={`${row}-${index.toString()}`}>
                            {
                                Object.values(row).map((data: any, idx) => (
                                    <TableBodyData key={`${data}-${idx.toString()}`}>{data}</TableBodyData>
                                ))
                            }
                        </TableBodyRow>
                    ))
                }
            </TableBody>
        </TableWrapper>
    );
};

export { Table };
