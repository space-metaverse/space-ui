import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        fonts: {
            size: {
                xs: string[];
                sm: string[];
                md: string[];
                lg: string[];
                xl: string[];
                '2xl': string[];
                '3xl': string[];
            },

            weight: {
                bold: number;
                normal: number;
                medium: number;
                semibold: number;
            },

            family: {
                sans: string[];
                body: string[];
            },
        };

        colors: {
            sky: {
                400: string;
            },

            red: {
                100: string;
                400: string;
                500: string;
            },

            blue: {
                100: string;
                200: string;
                300: string;
                400: string;
                500: string;
                600: string;
            },

            dark: {
                100: string;
                200: string;
                300: string;
                400: string;
                500: string;
                600: string;
                700: string;
                800: string;
            },

            white: string;

            green: {
                100: string;
                400: string;
            },

            purple: {
                100: string;
                400: string;
            },

            orange: {
                100: string;
                400: string;
            },

            transparent: string;
        };

        transitions: {
            easeInOut: string;
        }
    }
}
