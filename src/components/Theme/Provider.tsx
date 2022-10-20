import { ThemeProvider } from 'styled-components';

const Provider = ({ children }) => (
    <ThemeProvider>
        {children}
    </ThemeProvider>
);

export default Provider;
