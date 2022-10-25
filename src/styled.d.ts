import 'styled-components';

import type { FlattenSimpleInterpolation } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        fonts: {
            size: {
                xs: FlattenSimpleInterpolation;
                sm: FlattenSimpleInterpolation;
                md: FlattenSimpleInterpolation;
                lg: FlattenSimpleInterpolation;
                xl: FlattenSimpleInterpolation;
                '2xl': FlattenSimpleInterpolation;
                '3xl': FlattenSimpleInterpolation;
            },

            weight: {
                bold: number;
                normal: number;
                medium: number;
                semibold: number;
            },

            family: {
                sans: string;
                body: string;
            },
        };

        radius: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
            none: string;
            '2xl': string;
            '3xl': string;
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
            ease: string;
        }
    }
}
