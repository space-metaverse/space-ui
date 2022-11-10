import styled, { css } from 'styled-components';

import arrow from '../../assets/arrow.svg';

export default styled.div<{
    isFocused: boolean;
    isHovering: boolean;
    isError: boolean;
    withLabel: boolean;
}>`
    border: ${({ theme }) => `1px solid ${theme.colors.dark['300']}`};
    padding: 0.75rem 1rem;
    border-radius: ${({ theme }) => theme.radius.xl};

    ${({
        theme,
        isError,
        isFocused,
        isHovering,
    }) => (isError || isFocused || isHovering) && css`
        border-color: ${isError ? theme.colors.red['400'] : theme.colors.purple['400']};
        background-color: ${isError ? theme.colors.red['100'] : 'transparent'};
    `}

    .selected-flag {
        border-right: ${({ theme }) => `1px solid ${theme.colors.dark['300']}`};
        background-color: transparent;
    }

    input {
        ${({ theme }) => theme.fonts.size.md};
        width: 100%;
        border: 0;
        height: 1.125rem;
        outline: 0;
        font-family: ${({ theme }) => theme.fonts.family.body};
        background-color: transparent;

        &.selected-flag {
            border-right: ${({ theme }) => `1px solid ${theme.colors.dark['300']}`};
        }

        &::placeholder {
            color: ${({ theme }) => theme.colors.dark['500']};
        }
    }

    .intl-tel-input {
        display: flex;

        .flag-container {
            .arrow {
                &.up,
                &.down {
                    width: 0.625rem;
                    height: 0.625rem;
                    transition: ${({ theme }) => theme.transitions.ease};
                    background: url(${arrow}) no-repeat center;

                    &:after {
                        content: " ";
                    }
                }

                &.up {
                    transform: rotate(180deg);
                }
            }

            &:hover .selected-flag {
                background-color: transparent;
            }
        }
    }
`;
