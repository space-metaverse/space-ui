import { ChangeEvent, LabelHTMLAttributes } from 'react';
import styled from 'styled-components';

const Label = styled.label`
    color: black;
    display: block;
    position: relative;
    padding-left: 2.5rem;
    cursor: pointer;
    font-size: 1.2rem;
    user-select: none;
    font-family: Aeroport;
    & input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        &:checked ~ span {
            background-color: #1B1B1F;
            &::after {
                display: block;
            }
        }
    }
`;

const Input = styled.input``;

const CustomCheckmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 1.5rem;
    width: 1.5rem;
    border: 1px solid #B0B0B8;
    border-radius: 2px;
    &::after {
        left: 0.5rem;
        top: 0.22rem;
        width: 0.3rem;
        height: 0.6rem;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
        content: '';
        position: absolute;
        display: none;
    }
    &:hover {
        background-color: #8f8f94;
    }
`;

interface CheckboxProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'onChange'> {
    label: string;
    isChecked: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({
    label = 'Label',
    isChecked = false,
    onChange,
    className,
    ...props
}: CheckboxProps) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event);
    };

    return (
        <Label className={className} {...props}>
            {label}
            <Input type="checkbox" checked={isChecked} onChange={handleChange} />
            <CustomCheckmark />
        </Label>
    );
};

export { Checkbox };
