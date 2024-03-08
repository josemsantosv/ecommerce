import { BrowserRouter, useRoutes } from "react-router-dom";
import { ShoppingCartProvider } from '../Context';
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import CheckoutSideMenu from "../Components/CheckoutSideMenu";


import './App.css'
import Navbar from "../Components/Navbar";
import Layout from "../Components/Layout";
const AppRoutes = () =>{
  let routes = useRoutes ([
    { path: "/", element: <Home/>},
    { path: "/my-account", element: <MyAccount/>},
    { path: "/my-order", element: <MyOrder/>},
    { path: "/my-orders", element: <MyOrders/>},
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn/>},
    { path: "/*", element: <NotFound/>},
  ])
  return routes
}
function App() {
  return (
    <ShoppingCartProvider>   
      <BrowserRouter>
    <AppRoutes/>
    <Navbar/>
    <CheckoutSideMenu/>
    <Layout/>
    </BrowserRouter>
    </ShoppingCartProvider>
 
  )
}

export default App

