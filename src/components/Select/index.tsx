import { useState, useMemo, type ChangeEvent } from 'react';

import SelectStyles from './styles';
import type { SelectProps } from './types';

const Select = ({
    options = [],
    onChange,
    selectedOption,
    ...rest
}: SelectProps) => {
    const [selectedInternal, setSelectedInternal] = useState<string>('');

    const selectedToUse = useMemo(() => selectedOption || selectedInternal, [selectedOption, selectedInternal]);

    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setSelectedInternal(value);
        onChange?.(value);
    };

    return (
        <SelectStyles.Wrapper onChange={handleSelect} value={selectedToUse} {...rest}>
            {options.map(option => (
                <SelectStyles.Option
                    key={option}
                    value={option}
                    isSelected={option === selectedToUse}
                >
                    {option}
                </SelectStyles.Option>
            ))}
        </SelectStyles.Wrapper>
    );
};

export {
    Select,
    SelectStyles,
    type SelectProps,
};
