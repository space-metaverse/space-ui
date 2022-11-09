import styled, { css } from "styled-components";

import { rgba } from "../../helpers";
import { animations } from "../Theme";
import type { StyledModalProps } from "./types";

const sizes = {
    small: "24rem",
    medium: "42.625rem",
};

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    box-shadow: ${({ theme }) =>
        `0px 48px 48px -48px ${rgba(theme.colors.dark[800], ".24")}`};
    border-radius: ${({ theme }) => theme.radius["3xl"]};
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
`;

const Base = styled.div<StyledModalProps>`
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    opacity: ${({ show }) => (show ? 1 : 0)};
    z-index: ${({ show }) => (show ? 999 : -1)};
    position: fixed;
    transition: ${({ theme }) => theme.transitions.ease};
    align-items: center;
    pointer-events: ${({ show }) => (show ? "auto" : "none")};
    justify-content: center;
    backdrop-filter: blur(24px);
    background-color: ${({ theme }) => rgba(theme.colors.dark[600], ".2")};

    ${({ show }) =>
        show &&
        css`
            ${Wrapper} {
                ${animations.bounce};
            }
        `}

    ${({ size = "small" }) => css`
        ${Wrapper} {
            max-width: ${sizes[size]};
        }
    `}
`;

const Head = styled.div<{ shadow: boolean }>`
    padding: 1.5rem 2rem;
    display: flex;
    position: relative;
    align-items: center;

    > div {
        color: ${({ theme }) => theme.colors.dark[500]};
        right: 2rem;
        cursor: pointer;
        position: absolute;
    }

    ${({ theme, shadow }) =>
        shadow &&
        css`
            box-shadow: 0px 0px 48px rgba(0, 0, 0, 0.12);
            justify-content: center;
            border-top-left-radius: ${theme.radius["3xl"]};
            border-top-right-radius: ${theme.radius["3xl"]};
        `}

    ${({ theme, shadow }) =>
        !shadow &&
        css`
            border-bottom: 1px solid ${theme.colors.dark[200]};
        `}
`;

const Title = styled.h6`
    ${({ theme }) => theme.fonts.size["2xl"]};
    color: ${({ theme }) => theme.colors.dark[800]};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

const Body = styled.div`
    display: flex;
    padding: 2rem;
    flex-direction: column;
`;

const Footer = styled.div<{ twoActions: boolean }>`
    gap: 1rem;
    display: flex;
    padding: 1rem 1.5rem;
    box-shadow: ${({ theme }) =>
        `0px 0px 48px ${rgba(theme.colors.dark[800], ".12")}`};
    align-items: center;
    justify-content: flex-end;
    border-bottom-left-radius: ${({ theme }) => theme.radius["3xl"]};
    border-bottom-right-radius: ${({ theme }) => theme.radius["3xl"]};

    button {
        width: ${(props) => (!props.twoActions ? `100%` : null)};
    }
`;

export default {
    Base,
    Head,
    Body,
    Title,
    Footer,
    Wrapper,
};
