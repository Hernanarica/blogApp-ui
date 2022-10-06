import React              from 'react'
import ReactDOM           from 'react-dom/client'
import { RouterProvider } from "./providers/RouterProvider.jsx";
import App                from './App'

import './css/index.css';
import { StoreProvider }  from "./providers/StoreProvider";
import { AppRouter }      from "./router/AppRouter";

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