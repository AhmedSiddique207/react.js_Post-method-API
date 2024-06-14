import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Signup from './components/Signup';
import Login from './components/Login';


const router = createBrowserRouter([


  {


    path: "/",
    element: <App />

  },
  {


    path: "/Login",
    element: <Login />

  },
  {
    path: "/Signup",
    element: <Signup />
  },







]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>

);
