import ChipStyles from './styles';
import { ChipProps } from './types';

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
