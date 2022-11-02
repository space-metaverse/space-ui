import ChipStyles from './styles';
import type { ChipProps } from './types';

const Chip = ({
    label = 'Chip',
    ...props
}: ChipProps) => (
    <ChipStyles {...props}>
        {label}
    </ChipStyles>
);

export {
    Chip,
    ChipStyles,
    type ChipProps,
};
