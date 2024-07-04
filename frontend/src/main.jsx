import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx'

import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App></App>}>
    <Route path='/' element={<Home></Home>}></Route>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
