import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../src/components/Theme';

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
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Story />
    </ThemeProvider>
  ),
];