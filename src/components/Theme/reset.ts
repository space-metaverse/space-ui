import { css } from 'styled-components';

export default css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
    }

    a, button {
        cursor: revert;
    }

    ol, ul, menu {
        list-style: none;
    }

    img {
        max-width: 100%;
    }

    table {
        border-collapse: collapse;
    }

    input, textarea {
        user-select: auto;
    }

    textarea {
        white-space: revert;
    }

    meter {
        -webkit-appearance: revert;
        appearance: revert;
    }

    ::placeholder {
        color: unset;
    }

    :where([hidden]) {
        display: none;
    }

    :where([contenteditable]:not([contenteditable="false"])) {
        line-break: after-white-space;
        user-select: auto;
        overflow-wrap: break-word;
        -moz-user-modify: read-write;
        -webkit-user-modify: read-write;
    }

    :where([draggable="true"]) {
        -webkit-user-drag: element;
    }
`;
