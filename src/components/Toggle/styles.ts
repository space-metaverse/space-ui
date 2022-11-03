import styled from 'styled-components';

const SILDER_WIDTH = '2.5rem';
const SILDER_HEIGHT = '1.25rem';

export const Slider = styled.span<{ checked: boolean }>`
    position: absolute;
    cursor: pointer;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: ${({ theme, checked }) => (checked ? theme.colors.green[500] : theme.colors.dark[300])};
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;

    ::before {
        position: absolute;
        content: "";
        height: calc(${SILDER_HEIGHT} - 4px);
        width: calc(${SILDER_HEIGHT} - 4px);
        left: 2px;
        bottom: 2px;
        background-color: ${({ theme }) => theme.colors.white};
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;

        ${({ checked }) => checked && `
            -webkit-transform: translateX(calc(${SILDER_WIDTH} - ${SILDER_HEIGHT}));
            -ms-transform: translateX(calc(${SILDER_WIDTH} - ${SILDER_HEIGHT}));
            transform: translateX(calc(${SILDER_WIDTH} - ${SILDER_HEIGHT}));
        `}
    }

`;

export const InvisibleInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`;

export const Switch = styled.label`
    position: relative;;
    display: inline-block;
    width: ${SILDER_WIDTH};
    height: ${SILDER_HEIGHT};
`;
