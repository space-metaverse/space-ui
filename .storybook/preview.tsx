import '../src/index.css'

import React from 'react';

import { ThemeProvider } from '../src/components/Theme';

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
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];