import { createGlobalStyle, type DefaultTheme } from 'styled-components';

const theme: DefaultTheme = ({
    colors: {
        sky: {
            400: '#00D9F5',
        },

        red: {
            100: 'rgba(245, 0, 24, 0.12)',
            400: '#DC254B',
            500: '#F50018',
        },

        blue: {
            100: 'rgba(51, 50, 254, .12)',
            200: 'rgba(51, 50, 254, .24)',
            300: 'rgba(51, 50, 254, .48)',
            400: '#3332FE',
            500: '#201EFE',
            600: '#1D1CEB',
        },

        dark: {
            100: '#FAFAFC',
            200: '#F0F0F5',
            300: '#DCDCE0',
            400: '#C4C4C4',
            500: '#B0B0B8',
            600: '#71717A',
            700: '#1B1B1F',
            800: '#111114',
        },

        white: '#FFFFFF',

        green: {
            100: 'rgba(0, 204, 95, 0.12)',
            400: '#00CC5F',
        },

        purple: {
            100: 'rgba(137, 0, 255, 0.08)',
            400: '#8900FF',
        },

        orange: {
            100: 'rgba(255, 120, 0, 0.12)',
            400: '#FF7800',
        },

        transparent: 'transparent',
    },
});

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: Aeroport;
        src: url("../../fonts/Aeroport.otf");
    }
    @font-face {
        font-family: Aeroport Light;
        src: url("../../fonts/Aeroport_Light.otf");
    }
    @font-face {
        font-family: Aeroport Medium;
        src: url("../../fonts/Aeroport_Medium.otf");
    }
    @font-face {
        font-family: Aeroport Bold;
        src: url("../../fonts/Aeroport_Bold.otf");
    }
`;

export {
    theme,
    GlobalStyles,
};
