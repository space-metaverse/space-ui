import {
    cloneElement,
    HTMLAttributes,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from "react";
import styled from "styled-components";
import useOutsideClick from "../../hooks/useOutsideClick";
import { SVGProps } from "../../icons";

type PositionProps = "top" | "bottom" | "left" | "right";

export type PopoverOptionProps = {
    icon?: (props: SVGProps) => JSX.Element;
    label: string;
    callback: VoidFunction;
};

export type PopoverProps = HTMLAttributes<HTMLDivElement> & {
    keepOpenOnClick?: boolean;
    options: PopoverOptionProps[];
    position?: PositionProps;
    onHover?: boolean;
};

const PopoverBox = styled.div<{
    show: boolean;
    position: PositionProps | undefined;
    width: number;
    height: number;
}>`
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

    ${(props) => {
        if (props.position && props.position !== "bottom") {
            if (props.position === "top") {
                return `
                    margin-top: -${props.height}px;
                `;
            }

            if (props.position === "left") {
                return `
                    margin-left: -${props.width * 1.25}px;
                `;
            }

            if (props.position === "right") {
                return `
                    margin-left: ${props.width}px;
                `;
            }
        }

        return `
                
           `;
    }}
`;

const PopoverButton = styled.button`
    align-items: center;
    border-radius: 0.5rem;
    color: rgb(17 17 20/1);
    display: flex;
    font-size: 0.75rem;
    font-weight: 700;
    gap: 1rem;
    line-height: 1rem;
    padding: 0.75rem;
    text-align: left;
    text-transform: uppercase;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    font-family: Aeroport;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    width: 100%;
    &:hover {
        background-color: rgba(51, 50, 254, 0.12);
        color: rgb(51 50 254/1);

        svg {
            filter: invert(15%) sepia(90%) saturate(7058%) hue-rotate(247deg)
                brightness(100%) contrast(100%);
        }
    }
`;

const Popover = ({
    position,
    options,
    children,
    onHover,
    className,
    keepOpenOnClick,
    ...rest
}: PopoverProps) => {
    const [show, onShow] = useState(false);
    const [height, onHeight] = useState(0);
    const [width, onWidth] = useState(0);

    const toggle = () => onShow(!show);

    const ref = useRef<HTMLDivElement>(null);
    const refPopover = useRef<HTMLDivElement>(null);
    const refChild = useRef<HTMLDivElement>(null);

    useOutsideClick(ref, () => onShow(false));

    useEffect(() => {
        if (refPopover.current && refChild.current) {
            const size = refPopover.current.getBoundingClientRect().height;
            const sizeChild = refChild.current?.getBoundingClientRect().height;

            onHeight(size + sizeChild);
        }

        if (refChild.current) {
            const size = refChild.current.getBoundingClientRect().width;

            onWidth(size);
        }
    }, []);

    const mouseActions = {
        onMouseEnter: () => (onHover ? onShow(true) : null),
        onMouseLeave: () => (onHover ? onShow(false) : null),
    };

    return (
        <div ref={ref}>
            <div {...rest} role="presentation">
                <div style={{ float: "left" }} ref={refChild}>
                    {cloneElement(children, {
                        onClick: () => (!onHover ? toggle() : null),
                        ...mouseActions,
                    })}
                </div>
            </div>

            <PopoverBox
                ref={refPopover}
                show={show}
                {...mouseActions}
                position={position}
                width={width}
                height={height}
            >
                {options &&
                    options.map(({ icon: Icon, label, callback }) => (
                        <PopoverButton
                            key={label}
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                if (!keepOpenOnClick) toggle();
                                if (callback) callback();
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
