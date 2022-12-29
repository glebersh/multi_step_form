import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '../src/theme/theme';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);