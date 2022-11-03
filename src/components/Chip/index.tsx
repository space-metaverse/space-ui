import Styled from './styles';
import { ChipProps } from './types';

const Chip = ({
    label = 'Chip',
    ...props
}: ChipProps) => (
    <Styled {...props}>
        {label}
    </Styled>
);

export { Chip };
