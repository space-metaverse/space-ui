import styled from 'styled-components';

import Styled from '../Checkbox/styles';
import { RadioProps } from './types';

const CustomDot = styled(Styled.BaseCheck)`
    border-radius: ${({ theme }) => theme.radius.full};

    &::after {
        top: .75rem;
        width: 0.375rem;
        height: 0.375rem;
        background-color: ${({ theme }) => theme.colors.white};
    }

    &,
    &::after {
        border-radius: ${({ theme }) => theme.radius.full};
    }
`;

const Label = styled(Styled.BaseLabel)`
    &:hover {
        ${CustomDot} {
            border-color: ${({ theme }) => theme.colors.dark['600']};
        }
    }
`;

const Input = styled(Styled.BaseInput)`
    &:checked ~ span {
        border-color: ${({ theme }) => theme.colors.blue['400']};
        background-color: ${({ theme }) => theme.colors.blue['400']};
    
        &::after {
            top: .425rem;
        }
    }
`;

const Group = styled.div<Pick<RadioProps, 'direction'>>`
    gap: 1.5rem;
    display: flex;
    flex-direction: ${({ direction }) => (direction === 'row' ? 'row' : 'column')};
`;

export default {
    Group,
    Label,
    Input,
    CustomDot,
};
