import { PropsWithChildren } from 'react';

import { ThemeProvider } from 'styled-components';

import { theme } from './theme';

const Provider: React.FC<PropsWithChildren> = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);

export default Provider;
