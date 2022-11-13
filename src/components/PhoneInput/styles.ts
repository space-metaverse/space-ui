import styled, { css } from "styled-components";

const arrow =
	"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNOC4zMzMzNSAxLjVMNS4wMDAwMiA0LjgzMzMzTDEuNjY2NjkgMS41IiBzdHJva2U9IiNCMEIwQjgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg0K";

export const Wrapper = styled.div`
    display: flex;
    font-family: ${({ theme }) => theme.fonts.family.body};
    flex-direction: column;
`;

export default styled.div<{
	isFocused: boolean;
	isHovering: boolean;
	isError: boolean;
	withLabel: boolean;
}>`
    border: ${({ theme }) => `1px solid ${theme.colors.dark["300"]}`};
    padding: 0.75rem 1rem;
    border-radius: ${({ theme }) => theme.radius.xl};

    ${({ theme, isError, isFocused, isHovering }) =>
			(isError || isFocused || isHovering) &&
			css`
        border-color: ${
					isError ? theme.colors.red["400"] : theme.colors.purple["400"]
				};
        background-color: ${isError ? theme.colors.red["100"] : "transparent"};
    `}

    .selected-flag {
        border-right: ${({ theme }) => `1px solid ${theme.colors.dark["300"]}`};
        background-color: transparent;
    }

    input {
        ${({ theme }) => theme.fonts.size.md};
        width: 100%;
        border: 0;
        height: 1.240rem;
        outline: 0;
        font-family: ${({ theme }) => theme.fonts.family.body};
        background-color: transparent;

        &.selected-flag {
            border-right: ${({ theme }) =>
							`1px solid ${theme.colors.dark["300"]}`};
        }

        &::placeholder {
            color: ${({ theme }) => theme.colors.dark["500"]};
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
