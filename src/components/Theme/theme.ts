import {
    css,
    keyframes,
    createGlobalStyle,
    type DefaultTheme,
} from 'styled-components';

import reset from './reset';

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-12px);
    }
    60% {
        transform: translateY(-8px);
    }
`;

const fontSize = (sizes: string[]) => css`
    font-size: ${sizes[0]};
    line-height: ${sizes[1]};
`;

const theme: DefaultTheme = ({
    fonts: {
        size: {
            xs: fontSize(['.625rem', '.875rem']),
            sm: fontSize(['.75rem', '1rem']),
            md: fontSize(['.875rem', '1.25rem']),
            lg: fontSize(['1rem', '1.5rem']),
            xl: fontSize(['1.25rem', '2rem']),
            '2xl': fontSize(['1.5rem', '2rem']),
            '3xl': fontSize(['2rem', '3rem']),
        },

        weight: {
            bold: 700,
            normal: 400,
            medium: 500,
            semibold: 600,
        },

        family: {
            sans: "Aeroport, 'sans-serif'",
            body: "Inter, 'ui-sans-serif', 'system-ui'",
        },
    },

    radius: {
        sm: '2px',
        md: '4px',
        lg: '8px',
        xl: '12px',
        none: '0px',
        full: '999px',
        '2xl': '16px',
        '3xl': '24px',
    },

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
            500: '#02C15B',
        },

        purple: {
            100: 'rgba(137, 0, 255, 0.08)',
            400: '#8900FF',
            500: '#7E00EB',
        },

        orange: {
            100: 'rgba(255, 120, 0, 0.12)',
            400: '#FF7800',
            500: '#ED6f00',
        },

        transparent: 'transparent',
    },

    transitions: {
        ease: 'all .3s ease-in-out',
    },
});

const animations = {
    bounce: css`
        animation: ${bounce} 2s ease normal;
    `,
};

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: Aeroport;
        src: url("../../fonts/Aeroport.otf");
        font-weight: 400;
    }
    @font-face {
        font-family: Aeroport;
        src: url("../../fonts/Aeroport_Light.otf");
        font-weight: 300;
    }
    @font-face {
        font-family: Aeroport;
        src: url("../../fonts/Aeroport_Medium.otf");
        font-weight: 500;
    }
    @font-face {
        font-family: Aeroport;
        src: url("../../fonts/Aeroport_Bold.otf");
        font-weight: 700;
    }

    /**
     * Apply reset styles.
     */
    ${reset}

    body {
        font-family: ${theme.fonts.family.sans};
    }
`;

export {
    theme,
    animations,
    GlobalStyles,
};
