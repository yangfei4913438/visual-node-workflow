import React from 'react';
import ReactDOM from 'react-dom/client';
import { StoreProvider } from '@/store';

import App from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
