import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import Calculator from './Calculator.jsx'
import Counter from './counter.jsx'
import Menulist from './MenuList.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "/", element: <Menulist /> },
      {path: "/calculator", element: <Calculator/>},
      {path: "/counter", element: <Counter/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);