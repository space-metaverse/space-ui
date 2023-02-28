import { useState, useMemo, type ChangeEvent } from 'react';

import SelectStyles from './styles';
import type { SelectProps } from './types';

const Select = ({
    options = [],
    label,
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
        <SelectStyles.Wrapper>
            {label && <SelectStyles.Label>{label}</SelectStyles.Label>}
            <SelectStyles.Select onChange={handleSelect} value={selectedToUse} $isLabel={!!label} {...rest}>
                {options.map(option => (
                    <SelectStyles.Option
                        key={option}
                        value={option}
                        isSelected={option === selectedToUse}
                    >
                        {option}
                    </SelectStyles.Option>
                ))}
            </SelectStyles.Select>
        </SelectStyles.Wrapper >
    );
};

export {
    Select,
    SelectStyles,
    type SelectProps,
};
