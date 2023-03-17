import styled, { css } from 'styled-components';

import { rgba } from '../../helpers';
import type { ChipProps } from './types';

const appearance = (color: string) => css`
    color: ${color};
    background-color: ${rgba(color, '.12')};
`;

export default styled.span.attrs(({ color }) => ({
    color: color || 'blue',
}))<Pick<ChipProps, 'color'>>`
    ${({ theme }) => theme.fonts.size.sm};
    width: fit-content;
    padding: 0.25rem .75rem;
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
    font-family: ${({ theme }) => theme.fonts.family.body} !important;
    letter-spacing: 0.25px !important;
    text-transform: none !important;
    border-radius: ${({ theme }) => theme.radius['3xl']};

    ${({ theme, color }) => {
        switch (color) {
            case 'grey':
                return appearance(theme.colors.dark['600']);
            case 'green':
                return appearance(theme.colors.green['400']);
            case 'orange':
                return appearance(theme.colors.orange['400']);
            case 'red':
                return appearance(theme.colors.red['500']);
            default:
                return appearance(theme.colors.blue['400']);
        }
    }}
`;
