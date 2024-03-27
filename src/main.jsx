import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/",
    element: <Learning />
  },
  {
    path: "/",
    element: <Consulting />
  },
  {
    path: "/",
    element: <Covinient />
  },
  {
    path: "/",
    element: <Accommodation />
  },
  {
    path: "/",
    element: <Community />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
