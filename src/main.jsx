import React              from 'react'
import ReactDOM           from 'react-dom/client'
import { RouterProvider } from "./providers/RouterProvider.jsx";
import { StoreProvider }  from "./providers/StoreProvider";
import { AppRouter }      from "./router/AppRouter";
import App                from './App'

import './css/index.css';
import { AuthProvider }   from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
      <AuthProvider>
        <RouterProvider>
          <AppRouter>
            <App />
          </AppRouter>
        </RouterProvider>
      </AuthProvider>
    </StoreProvider>
  </React.StrictMode>
)