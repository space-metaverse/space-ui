import {
    cloneElement,
    HTMLAttributes,
    useEffect,
    useRef,
    useState,
} from "react";
import styled, { css } from "styled-components";
import useOutsideClick from "../../hooks/useOutsideClick";
import { SVGProps } from "../../icons";

type PositionProps = "top" | "bottom" | "left" | "right";

type ElementInfo = {
    width: number;
    height: number;
};

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
    childInfo: ElementInfo;
    popoverInfo: ElementInfo;
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
        switch (props.position) {
            case "top":
                return css`
                    margin-top: -${props.popoverInfo.height + props.childInfo.height}px;
                `;
            case "left":
                return css`
                    margin-left: -${props.popoverInfo.width - 2}px;
                `;
            case "right":
                return css`
                    margin-left: ${props.childInfo.width - 2}px;
                `;
            default:
                return css`
                    margin-top: ${props.childInfo.height}px;
                `;
        }
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
    const [childInfo, onChildInfo] = useState<ElementInfo>({
        width: 0,
        height: 0,
    });
    const [popoverInfo, onPopoverInfo] = useState<ElementInfo>({
        width: 0,
        height: 0,
    });

    const toggle = () => onShow(!show);

    const ref = useRef<HTMLDivElement>(null);
    const refPopover = useRef<HTMLDivElement>(null);
    const refChild = useRef<HTMLDivElement>(null);

    useOutsideClick(ref, () => onShow(false));

    useEffect(() => {
        if (refPopover.current) {
            const { height, width } =
                refPopover.current.getBoundingClientRect();

            onPopoverInfo({ height, width });
        }

        if (refChild.current) {
            const { height, width } = refChild.current.getBoundingClientRect();

            onChildInfo({ height, width });
        }
    }, [refPopover, refChild]);

    const mouseActions = {
        onMouseEnter: () => (onHover ? onShow(true) : null),
        onMouseLeave: () => (onHover ? onShow(false) : null),
    };

    return (
        <div ref={ref}>
            <div {...rest} role="presentation">
                <div style={{ float: "left" }} ref={refChild}>
                    {children &&
                        cloneElement(children, {
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
                childInfo={childInfo}
                popoverInfo={popoverInfo}
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
