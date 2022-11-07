import styled, { css } from 'styled-components';

import type { TableProps } from './types';

const Head = styled.thead`
    background-color: ${({ theme }) => theme.colors.dark['100']};
`;

const HeadRow = styled.tr``;

const HeadData = styled.th`
    color: ${({ theme }) => theme.colors.dark['600']};
    cursor: pointer;
    padding: 0.75rem 1.5rem;
    overflow: hidden;
    transition: ${({ theme }) => theme.transitions.ease};

    &:hover {
        color: ${({ theme }) => theme.colors.dark['700']};
    }
    &:first-child {
        border-radius: ${({ theme }) => `${theme.radius['3xl']} 0 0 ${theme.radius['3xl']}`};
    }
    &:last-child {
        border-radius: ${({ theme }) => `0 ${theme.radius['3xl']} ${theme.radius['3xl']} 0`};
    }
`;

const HeadGrid = styled.div`
    ${({ theme }) => theme.fonts.size.sm};
    display: flex;
    column-gap: 0.5rem;
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
    align-items: center;
    flex-direction: row;
`;

const Body = styled.tbody``;

const BodyRow = styled.tr``;

const BodyData = styled.td`
    ${({ theme }) => theme.fonts.size.md};
    color: ${({ theme }) => theme.colors.dark['600']};
    padding: 1rem 1.5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:not(:first-of-type) {
        padding-left: 2rem;
    }
`;

const Wrapper = styled.table<Omit<TableProps, 'rows'>>`
    width: 100%;
    table-layout: fixed;
    white-space: nowrap;
    font-family: ${({ theme }) => theme.fonts.family.body};
    border-spacing: 0;
    border-collapse: collapse;

    ${({ theme, withBorder }) => withBorder && css`
        ${BodyRow}:not(:last-of-type) {
            border-bottom: 1px solid ${theme.colors.dark['200']};
        }
    `}
`;

export default {
    Head,
    Body,
    HeadRow,
    Wrapper,
    BodyRow,
    HeadGrid,
    BodyData,
    HeadData,
};
