import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'

import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Shop from './Pages/Shop.jsx'
import ProductPage from './Pages/ProductPage.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App></App>}>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path= '/login' element = {<Login></Login>}></Route>
    <Route path='/register' element={<Register></Register>}></Route>
    <Route path='/shop' element={<Shop></Shop>}></Route>
    <Route path='/shop/:productID' element={<ProductPage></ProductPage>}></Route>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
