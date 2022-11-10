import styled from 'styled-components';

import { Image as IconImage } from '../../icons';
import type { DragAndDropStylesProps } from './types';

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

const Wrapper = styled.div`
    gap: 1rem;
    display: flex;
    flex-direction: column;
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

const Box = styled.div<DragAndDropStylesProps>`
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

export default {
    Box,
    File,
    Icon,
    Input,
    Title,
    Wrapper,
    Content,
    ListFiles,
    Description,
};
