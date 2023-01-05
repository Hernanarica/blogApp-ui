import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, StoreProvider, ReactQueryProvider } from './providers';
import App from './App'

import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <StoreProvider>
      <RouterProvider>
        <ReactQueryProvider>
          <App />
        </ReactQueryProvider>
      </RouterProvider>
    </StoreProvider>
  // </React.StrictMode>
)