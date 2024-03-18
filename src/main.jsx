import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import { QueryClient,QueryClientProvider,} from '@tanstack/react-query'

import { Toaster } from 'react-hot-toast';
import AuthProvider from './Context/AuthProvider.jsx';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className=''>
          <RouterProvider router={router} />
          <Toaster></Toaster>
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
