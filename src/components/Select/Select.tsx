import { ChangeEvent, useState, SelectHTMLAttributes, useMemo } from 'react';
import styled, { css } from 'styled-components';

const SelectTag = styled.select`
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 1px solid #DCDCE0;
    transition: background-color 0.2s ease-in-out;
    border-radius: 12px;
    outline: none;
    width: 15rem;
`;

const Option = styled.option<{ isSelected: boolean }>`
    padding: 1rem;
    ${props => props.isSelected && css`
        color: #8900FF;
        background-color: #8900FF14;
    `}
    &:hover {
        background-color: #8900FF14;
    }
`;

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
    options: string[];
    onChange?: (option: string) => void;
    selectedOption?: string;
}

const Select = ({
    options = [],
    selectedOption,
    onChange,
    className,
}: SelectProps) => {
    const [selectedInternal, setSelectedInternal] = useState<string>('');

    const selectedToUse = useMemo(() => selectedOption || selectedInternal, [selectedOption, selectedInternal]);

    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setSelectedInternal(value);
        onChange?.(value);
    };

    return (
        <SelectTag onChange={handleSelect} value={selectedToUse} className={className}>
            {options.map((option) => (
                <Option
                    key={option}
                    value={option}
                    isSelected={option === selectedToUse}
                >
                    {option}
                </Option>
            ))}
        </SelectTag>
    );
};

export { Select };
