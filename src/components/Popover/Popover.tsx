import {
    HTMLAttributes, useEffect, useRef, useState,
} from 'react';

import styled from 'styled-components';

import useOutsideClick from '../../hooks/useOutsideClick';
import { SVGProps } from '../../icons';

export type PopoverOptionProps = {
    icon?: (props: SVGProps) => JSX.Element;
    label: string;
    callback: VoidFunction;
};

export type PopoverProps = HTMLAttributes<HTMLDivElement> & {
    keepOpen?: boolean;
    options: PopoverOptionProps[];
};

const PopoverBox = styled.div<{ show: boolean }>`
    margin-top: -10px;
    opacity: 1;
    pointer-events: auto;
    background-color: rgb(255 255 255/1);
    border-radius: 0.75rem;
    box-shadow: 0 12px 48px -12px rgb(0 0 0 / 24%);
    flex-direction: column;
    gap: 0.25rem;
    min-width: 15rem;
    padding: 0.5rem;
    position: absolute;
    transition: all 0.2s ease-in-out 0s;
    transition-property: all;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
    ${(props) => {
        if (props.show) {
            return `
                opacity: 1;
                pointer-events: auto;
            `;
        }

        return `
                opacity: 0;
                pointer-events: none;
           `;
    }}
`;

const PopoverButton = styled.button`
    align-items: center;
    border-radius: 0.5rem;
    color: rgb(17 17 20/1);
    display: flex;
    font-size: .75rem;
    font-weight: 700;
    gap: 1rem;
    line-height: 1rem;
    padding: 0.75rem;
    text-align: left;
    text-transform: uppercase;
    transition-duration: .3s;
    transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    font-family: Aeroport;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    width: 100%;
    &:hover {
        background-color: rgba(51,50,254,.12);
        color: rgb(51 50 254/1);
        
        svg {            
            filter: invert(15%) sepia(90%) saturate(7058%) hue-rotate(247deg) brightness(100%) contrast(100%);
        }
    }

`;

const Popover = ({
    options,
    children,
    className,
    keepOpen,
    ...rest
}: PopoverProps) => {
    const [height, onHeight] = useState(0);
    const [show, onShow] = useState(false);

    const toggle = () => onShow(! show);

    const ref = useRef<HTMLDivElement>(null);

    useOutsideClick(ref, () => onShow(false));

    useEffect(() => {
        if (ref.current) {
            const size = ref.current.getBoundingClientRect().height;

            onHeight(size);
        }
    }, []);

    return (
        <div
            ref={ref}
        >
            <div
                {...rest}
                role="presentation"
                onClick={(e) => {
                    e.preventDefault();

                    toggle();
                }}
            >
                {children}
            </div>

            <PopoverBox show={show}>
                {options && options.map(({ icon: Icon, label, callback }) => (
                    <PopoverButton
                        key={label}
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            if (! keepOpen) toggle();
                            callback();
                        }}
                    >
                        {Icon && <Icon />}
                        {label}
                    </PopoverButton>
                ))}
            </PopoverBox>
        </div>
    );
};

export { Popover };
