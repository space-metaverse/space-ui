import type {
    Dispatch,
    HTMLAttributes,
    ReactNode,
    SetStateAction,
} from "react";
import styled from "styled-components";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    run?: boolean;
    onRun?: Dispatch<SetStateAction<boolean>>;
    rounded?: boolean;
    children?: ReactNode;
}

const SkeletonStyled = styled.div<{
    width?: string | number;
    height?: string | number;
    run?: boolean;
    rounded?: boolean;
}>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: flex;
    &:after {
        border-radius: 1rem;
        content: "";
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        position: absolute;
        top: 0;
        transition-duration: 0.3s;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        width: 100%;
        z-index: 10;
    }
    ${(props) => {
        if (props.run) {
            return `
                animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    
                    50% {
                        opacity: .5;
                    }
                };

                background-color: #eee;
            `;
        }

        return "";
    }}
    ${(props) => {
        if (props.rounded) {
            return `
                border-radius: 9999px;
            `;
        }

        return "";
    }}
`;

const Skeleton = ({
    run,
    rounded,
    children,
    className,
    ...rest
}: SkeletonProps) => (
    <SkeletonStyled run={run} rounded={rounded} {...rest}>
        {children}
    </SkeletonStyled>
);

export { Skeleton };
