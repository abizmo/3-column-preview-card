import React from 'react';
import { ThemeProvider } from 'styled-components';

import Cards from './components/Cards';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Cards />
  </ThemeProvider>
);

export default App;
