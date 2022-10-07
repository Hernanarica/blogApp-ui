import React              from 'react'
import ReactDOM           from 'react-dom/client'
import { RouterProvider } from "./providers/RouterProvider.jsx";
import { StoreProvider }  from "./providers/StoreProvider";
import { AppRouter }      from "./router/AppRouter";
import App                from './App'

import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider>
        <AppRouter>
          <App />
        </AppRouter>
      </RouterProvider>
    </StoreProvider>
  </React.StrictMode>
)