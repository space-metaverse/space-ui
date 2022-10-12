import { useState, ChangeEvent, useCallback, HTMLAttributes } from 'react';
import styled from 'styled-components';

const RadioGroup = styled.div<{ direction: 'row' | 'column' }>`
    display: flex;
    flex-direction: ${props => props.direction === 'row' ? 'row' : 'column'};
    & > label {
        margin: ${props => props.direction === 'row' ? '0 0.75rem' : '0.75rem 0'};
    }
`;

const Label = styled.label<{ direction: 'row' | 'column' }>`
    font-family: Aeroport;
    color: black;
    display: block;
    position: relative;
    padding-left: 2.5rem;
    cursor: pointer;
    font-size: 1.2rem;
    user-select: none;
    flex-direction: ${props => props.direction === 'row' ? 'row' : 'column'};
    margin: ${props => props.direction === 'row' ? '0 1rem' : '1rem 0'};
`;

const Input = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked ~ span {
        background-color: #3332FE;
        &::after {
            display: block;
        }
    }
`;

const CustomDot = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 1.5rem;
    width: 1.5rem;
    border: 1px solid #B0B0B8;
    border-radius: 50%;
    &::after {
        left: 0.5rem;
        top: 0.5rem;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        content: '';
        position: absolute;
        display: none;
        background: white;
    }
    &:hover {
        background-color: #5c5cfb;
    }
`;

interface RadioProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    options: string[];
    direction: 'row' | 'column';
    onChange?: (event: ChangeEvent<HTMLInputElement>, key: string) => void;
}

const Radio = ({
    options = ['Option 1', 'Option 2', 'Option 3'],
    direction = 'row',
    onChange,
    className
}: RadioProps) => {
    const [checkedKey, setCheckedKey] = useState<string>('');

    const handleChange = useCallback((
        event: ChangeEvent<HTMLInputElement>,
        key: string,
        option: string,
    ) => {
        setCheckedKey(key);
        onChange?.(event, option);
    }, [onChange]);

    return (
        <RadioGroup direction={direction} className={className}>
            {options.map((option, index) => {
                const key = `${option}-${index}`;
                return (
                    <Label key={key} direction={direction}>
                        {option}
                        <Input
                            type="radio"
                            checked={checkedKey === key}
                            onChange={(e) => handleChange(e, key, option)}
                        />
                        <CustomDot />
                    </Label>
                );
            })}
        </RadioGroup>
    );
};

export { Radio };
