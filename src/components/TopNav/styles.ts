import styled, { css } from 'styled-components';

import { Dots, DropLeft } from '../../icons';

interface RouteProps {
    disabled?: boolean
}

interface ResponsiveProps {
    show: boolean
    search: boolean
}

const Logo = styled.a`
    padding: 1.25rem 1.5rem;
    display: flex;
    min-width: 6.75rem;
    border-right: ${({ theme }) => `1px solid ${theme.colors.dark[200]}`};
`;

const Input = styled.div`
    width: 100%;
    border: ${({ theme }) => `1px solid ${theme.colors.dark[300]}`};
    display: flex;
    position: relative;
    transition: ${({ theme }) => theme.transitions.ease};
    align-items: center;
    border-radius: ${({ theme }) => theme.radius['2xl']};

    &,
    > div,
    button {
        height: 3rem;
    }

    button {
        width: 100%;
        border: none;
        display: flex;
        min-width: auto;
        max-width: 4.5rem;
        align-items: center;
        border-radius: 0;
        border-top-right-radius: ${({ theme }) => theme.radius['2xl']};
        border-bottom-right-radius: ${({ theme }) => theme.radius['2xl']};
    
        path {
            stroke: ${({ theme }) => theme.colors.white};
        }
    }

    &:hover {
        border-color: ${({ theme }) => theme.colors.dark[400]};
    }
`;

const Search = styled.div`
    gap: 1rem;
    width: 100%;
    display: flex;
    padding: .25rem 2rem;
    max-width: 44.5rem;
    transition: ${({ theme }) => theme.transitions.ease};
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
`;

const IconChevron = styled(DropLeft)`
    display: none;
    cursor: pointer;

    path {
        stroke: ${({ theme }) => theme.colors.dark[500]};
    }
`;

const Route = styled.a<RouteProps>`
    ${({ theme }) => theme.fonts.size.sm};
    color: ${({ theme, disabled }) => (disabled ? theme.colors.dark['400'] : theme.colors.dark['800'])};
    padding: 0 .75rem;
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    transition: ${({ theme }) => `all .3s ${theme.transitions.ease}`};
    letter-spacing: 2px;
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
    text-transform: uppercase;
    text-decoration: none;

    ${({ disabled }) => !disabled && css`
        :hover {
            color: ${({ theme }) => theme.colors.blue[400]};
        }
    `}
`;

const Routes = styled.ul`
    gap: 1.5rem;
    display: flex;
    align-items: center;
`;

const Actions = styled.div`
    height: 100%;
    display: flex;
    padding: 0 1.5rem;
    margin-left: auto;
    align-items: center;
    border-left: ${({ theme }) => `1px solid ${theme.colors.dark[200]}`};
    text-decoration: none;

    p {
        ${({ theme }) => theme.fonts.size.sm};
        color: ${({ theme }) => theme.colors.dark[800]};
        font-weight: ${({ theme }) => theme.fonts.weight.bold};
        margin-left: .75rem;
        margin-right: 1.5rem;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    .is-popover + div {
        right: 0;
    }

    > p,
    path {
        transition: ${({ theme }) => theme.transitions.ease};
    }

    &.is-sign:hover {
        > p {
            color: ${({ theme }) => theme.colors.blue['400']};
        }

        path {
            stroke: ${({ theme }) => theme.colors.blue['400']};
        }
    }
`;

const Target = styled.input`
    ${({ theme }) => theme.fonts.size.md};
    color: ${({ theme }) => theme.colors.dark[800]};
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding: .875rem 1.5rem;
    appearance: none;
    font-family: ${({ theme }) => theme.fonts.family.body};
    background-color: transparent;

    &::placeholder {
        color: ${({ theme }) => theme.colors.dark[500]};
        transition: ${({ theme }) => theme.transitions.ease};
    }

    &:hover,
    &:focus  {
        &::placeholder {
            color: ${({ theme }) => theme.colors.dark[600]};
        }
    }
`;

const Select = styled.div`
    cursor: pointer;
    display: flex;
    padding: 1rem .5rem 1rem 1.5rem;
    position: relative;
    align-items: center;
    border-right: ${({ theme }) => `1px solid ${theme.colors.dark[200]}`};

    > div {
        margin-left: .25rem;

        path {
            stroke: ${({ theme }) => theme.colors.dark[300]};
            transition: ${({ theme }) => theme.transitions.ease};
        }
    }

    select {
        ${({ theme }) => theme.fonts.size.sm};
        color: ${({ theme }) => theme.colors.dark[800]};
        width: fit-content;
        height: 100%;
        border: none;
        cursor: pointer;
        outline: none;
        appearance: none;
        font-weight: ${({ theme }) => theme.fonts.weight.bold};
        font-family: ${({ theme }) => theme.fonts.family.sans};
        background-color: transparent;
    }

    &:hover {
        path {
            stroke: ${({ theme }) => theme.colors.dark[400]};
        }
    }
`;

const Profile = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: ${({ theme }) => theme.colors.dark[200]};

    &,
    img {
    border-radius: 999px;
    }
`;

const Hamburger = styled.div<Omit<ResponsiveProps, 'search'>>`
    top: 1.25rem;
    width: 1rem;
    right: 1.25rem;
    height: .875rem;
    cursor: pointer;
    display: none;
    position: absolute;
    flex-direction: column;
    justify-content: center;

    div {
        width: 100%;
        height: 2px;
        position: absolute;
        transition: ${({ theme }) => theme.transitions.ease};
        background-color: ${({ theme }) => theme.colors.dark['800']};

        &:last-of-type {
            bottom: 0;
        }

        :nth-of-type(2) {
            left: 0;
            opacity: 1;
        }

        &:first-of-type {
            top: 0;
        }
    }

    ${({ show }) => show && css`
        div {
            &:last-of-type {
                bottom: .375rem;
                transform: rotate(-135deg)
            }

            &:first-of-type {
                top: .375rem;
                transform: rotate(135deg)
            }

            :nth-of-type(2) {
                left: -.75rem;
                opacity: 0;
            }
        } 
    `}
`;

const IconAction = styled(Dots)`
    cursor: pointer;
`;

const SearchButton = styled.button`
    top: .875rem;
    right: 4rem;
    cursor: pointer;
    border: none;
    display: none;
    outline: none;
    position: absolute;
    background: transparent;
`;

const Wrapper = styled.nav<ResponsiveProps>`
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    display: flex;
    z-index: 99;
    position: fixed;
    align-items: center;
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.dark[200]}`};
    background-color: ${({ theme }) => theme.colors.white};

    @media screen and (max-width: 1124px) {
        ${Routes} {
            gap: 1rem;
            padding-left: 1.5rem;
        }
    }

    @media screen and (max-width: 1024px) {
        height: ${({ show }) => (show ? '100vh' : '3.5rem')};
        transition: ${({ theme }) => theme.transitions.ease};
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;

        ${Logo} {
            top: .25rem;
            padding: .75rem 1.25rem;
            position: absolute;
            border-right: transparent
        }

        ${Routes} {
            gap: 2rem;
            align-items: flex-start;
            flex-direction: column;
        }

        ${Routes},
        ${Actions} {
            display: none;
        }

        ${Actions} {
            height: fit-content;
            margin: 2rem 0 0 0;

            .is-popover + div {
                right: inherit;
            }
        }

        ${Search} {
            top: -5rem;
            left: 0;
            opacity: 0;
            padding: .875rem 1rem;
            position: fixed;
            max-width: 100%;
            border-bottom: ${({ theme }) => `1px solid ${theme.colors.dark[200]}`};

            ${Input} button {
                width: fit-content;
                padding: 1rem;
                max-width: 100%;
            }
        }

        ${Hamburger},
        ${IconChevron},
        ${SearchButton} {
            display: flex;
        }

        ${({ show }) => show && css`
            ${Routes},
            ${Actions} {
                display: flex;
            }
        `}

        ${({ search }) => search && css`
            ${Search} {
                top: 0;
                opacity: 1;
                z-index: 99;
            }
        `}
    }
`;

const SearchBar = {
    Input,
    Target,
    Select,
    Search,
    IconChevron,
};

export default {
    Logo,
    Route,
    Routes,
    Wrapper,
    Actions,
    Profile,
    SearchBar,
    Hamburger,
    IconAction,
    SearchButton,
};
