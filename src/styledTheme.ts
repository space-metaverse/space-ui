import { createGlobalStyle, DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {

};

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: Aeroport;
        src: url("./fonts/Aeroport.otf");
    }
    @font-face {
        font-family: Aeroport Light;
        src: url("./fonts/Aeroport_Light.otf");
    }
    @font-face {
        font-family: Aeroport Medium;
        src: url("./fonts/Aeroport_Medium.otf");
    }
    @font-face {
        font-family: Aeroport Bold;
        src: url("./fonts/Aeroport_Bold.otf");
    }
`;

export { Theme, GlobalStyles };