import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "./providers/RouterProvider.jsx";
import { StoreProvider } from "./providers/StoreProvider";
import App from './App'

import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
        <RouterProvider>
          <App />
        </RouterProvider>
    </StoreProvider>
  </React.StrictMode>
)