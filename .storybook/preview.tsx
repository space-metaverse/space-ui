import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, Theme } from '../src/styledTheme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  controls: {
    matchers: {
      date: /Date$/,
      color: /(background|color)$/i,
    },
  },
}

export const decorators = [
  (Story: any) => (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];