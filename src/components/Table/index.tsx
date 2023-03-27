import { useMemo, useState, useCallback } from 'react';

import { Selector } from '../../icons';
import { theme } from '../Theme';
import TableStyles from './styles';
import type { TableProps, ColumnFilters } from './types';

const Table = ({
    rows = [],
    columns = [],
    withBorder,
    onRowClick,
    ...rest
}: TableProps) => {
    const [columnFilters, setColumnFilters] = useState<ColumnFilters>({});

    const handleColumnFilter = useCallback((column: string) => {
        setColumnFilters(prev => {
            const currentFilter = prev[column] || 'none';
            return {
                [column]: currentFilter === 'up' ? 'down' : 'up',
            };
        });
    }, []);

    const filteredRows = useMemo(() => {
        const columnFilterEntries = Object.entries(columnFilters);
        if (columnFilterEntries.length === 0) return rows;
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
        <TableStyles.Wrapper
            {...rest}
            withBorder={withBorder}
        >
            <TableStyles.Head>
                <TableStyles.HeadRow>
                    {
                        columns.map((column, index) => (
                            <TableStyles.HeadData
                                key={`${column}-${index.toString()}`}
                                scope="col"
                                onClick={() => handleColumnFilter(column)}
                            >
                                <TableStyles.HeadGrid>
                                    {/* {
                                        (typeof Object.values(rows?.[0])?.[index] === 'number'
                                            ?? typeof Object.values(rows?.[0])?.[index] === 'string') && (
                                            <Selector
                                                beforeInjection={(svg: any) => {
                                                    const [upArrow, downArrow] = svg.querySelectorAll('path');
                                                    if (columnFilters[column] === 'up') {
                                                        upArrow.style.stroke = theme.colors.dark['600'];
                                                        downArrow.style.stroke = theme.colors.dark['500'];
                                                    } else if (columnFilters[column] === 'down') {
                                                        downArrow.style.stroke = theme.colors.dark['600'];
                                                        upArrow.style.stroke = theme.colors.dark['500'];
                                                    } else {
                                                        upArrow.style.stroke = theme.colors.dark['500'];
                                                        downArrow.style.stroke = theme.colors.dark['500'];
                                                    }
                                                }}
                                            />
                                        )
                                    } */}
                                    {column}
                                </TableStyles.HeadGrid>
                            </TableStyles.HeadData>
                        ))
                    }
                </TableStyles.HeadRow>
            </TableStyles.Head>
            <TableStyles.Body>
                {
                    filteredRows.map((row, index) => (
                        <TableStyles.BodyRow key={`${row}-${index.toString()}`} onClick={() => onRowClick?.(row)} $clickable={!!onRowClick}>
                            {
                                Object.entries(row).map(([key, value]: any, idx) => (
                                    <>
                                        {key !== 'key' && (
                                            <TableStyles.BodyData
                                                key={`${key}-${idx.toString()}`}
                                                data-label={columns[idx]}
                                            >
                                                {value}
                                            </TableStyles.BodyData>
                                        )
                                        }
                                    </>
                                ))
                            }
                        </TableStyles.BodyRow>
                    ))
                }
            </TableStyles.Body>
        </TableStyles.Wrapper>
    );
};

export {
    Table,
    TableStyles,
    type TableProps,
};
