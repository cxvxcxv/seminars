import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

import { App } from './App.tsx';
import './index.css';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, //does on refetch if user focuses back on the window
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <App />
      <Toaster position="top-center" toastOptions={{ duration: 1500 }} />
    </QueryClientProvider>
  </StrictMode>,
);
