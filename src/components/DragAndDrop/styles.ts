import styled, { css } from 'styled-components';

import { Image as IconImage } from '../../icons';
import type { DragAndDropStylesProps, DragAndDropStylesBoxProps } from './types';

const File = styled.li`
    ${({ theme }) => theme.fonts.size.sm};
    color: ${({ theme }) => theme.colors.purple['400']};
    padding: .25rem .5rem;
    display: flex;
    font-family: ${({ theme }) => theme.fonts.family.body};
    align-items: center;
    border-radius: ${({ theme }) => theme.radius.md};
    background-color: ${({ theme }) => theme.colors.purple['100']};

    > div {
        cursor: pointer;
        margin-left: auto;

        path {
            stroke: ${({ theme }) => theme.colors.purple['400']};
        }
    }
`;

const ListFiles = styled.ul`
    gap: .25rem;
    margin: 0;
    display: flex;
    padding: 0;
    margin-top: 1rem;
    flex-direction: column;
`;

const Icon = styled(IconImage)`
    path {
        stroke: ${({ theme }) => theme.colors.dark['500']};
    }
`;

const Input = styled.input`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
    position: absolute;
`;

const Title = styled.p`
    ${({ theme }) => theme.fonts.size.md};
    color: ${({ theme }) => theme.colors.dark['800']};
    margin: .5rem 0 .25rem;
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
    font-family: ${({ theme }) => theme.fonts.family.body};
`;

const Label = styled.label`
    ${({ theme }) => theme.fonts.size.sm};
    color: ${({ theme }) => theme.colors.dark['600']};
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
    font-family: ${({ theme }) => theme.fonts.family.body};
    margin-bottom: 0.5rem;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Description = styled.span`
    ${({ theme }) => theme.fonts.size.sm};
    color: ${({ theme }) => theme.colors.dark['600']};
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
    font-family: ${({ theme }) => theme.fonts.family.body};

    b {
        color: ${({ theme }) => theme.colors.blue['400']};
    }
`;

const Box = styled.div<DragAndDropStylesBoxProps>`
    width: 100%;
    border: ${({ theme, dragging }) => `1px dashed ${dragging ? theme.colors.purple['400'] : theme.colors.dark['300']}`};
    padding: 1.25rem 1.5rem;
    position: relative;
    transition: ${({ theme }) => theme.transitions.ease};
    border-radius: ${({ theme }) => theme.radius.xl};
    background-color: ${({ theme }) => theme.colors.dark['100']};

    &:hover {
        border-color: ${({ theme }) => theme.colors.purple['400']};
    }
`;

const Wrapper = styled.div<DragAndDropStylesProps>`
    display: flex;
    flex-direction: column;

    ${({ theme, isError }) => isError && css`
        ${Box} {
            border-color: ${theme.colors.red['500']};
            background-color: ${theme.colors.red['100']};
        }

        ${Icon} path {
            stroke: ${theme.colors.red['500']};
        }
    `}

    ${({ theme, isError, disabled }) => !isError && disabled && css`
        ${Box} {
            border-color: ${theme.colors.dark['200']};
        }

        ${Label} {
            color: ${theme.colors.dark['500']};
        }

        ${Input} {
            cursor: not-allowed;
        }

        ${Title} {
            color: ${theme.colors.dark['600']};
        }

        ${Description} {
            color: ${theme.colors.dark['500']};

            b {
                color: ${theme.colors.dark['600']};
            }
        }
    `}
`;

export default {
    Box,
    File,
    Icon,
    Label,
    Input,
    Title,
    Wrapper,
    Content,
    ListFiles,
    Description,
};
