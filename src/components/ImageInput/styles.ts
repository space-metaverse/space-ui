import styled from 'styled-components';

import { Delete } from '../../icons';
import { Button } from '../Button';
import type { ImageInputProps } from './types';

const Backdrop = styled.div<Pick<ImageInputProps, 'width'>>`
    width: 100%;
    display: flex;
    padding: 1.5rem 2rem 1.5rem 1.5rem;
    max-width: ${({ width }) => `${width}px` || 'auto'};
    align-items: center;
    border-radius: ${({ theme }) => theme.radius['2xl']};
    background-color: ${({ theme }) => theme.colors.dark['100']};
`;

const Avatar = styled.div`
    width: 6rem;
    height: 6rem;
    min-width: 6rem;
    background-color: ${({ theme }) => theme.colors.dark['200']};

    &,
    img {
        border-radius: ${({ theme }) => theme.radius.full};
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Text = styled.p`
    margin: 0 2rem;
    ${({ theme }) => theme.fonts.size.xl};
    overflow: hidden;
    white-space: nowrap;
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    font-family: ${({ theme }) => theme.fonts.family.sans};
    text-overflow: ellipsis;
`;

const Input = styled.input`
    display: none;
`;

const Action = styled(Button)`
    margin-left: auto;
`;

const IconDelete = styled(Delete).attrs(({ theme }) => ({
    stroke: theme.colors.dark['600'],
}))`
    cursor: pointer;
    margin-right: 2rem;
`;

export default {
    Text,
    Input,
    Action,
    Avatar,
    Backdrop,
    IconDelete,
};
