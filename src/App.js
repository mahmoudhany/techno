import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useAuth } from './context/AuthContext';
import {
  AboutPage,
  CartPage, ContactPage,
  DefaultPage, HomePage,
  ProductsPage, SingleProductPage, SignupPage, LoginPage, OrderPage
} from "./pages";
import { Navbar, Sidebar, SideCart, Footer, PrivateRoute } from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const { currentUser } = useAuth()
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <SideCart />
      <Switch >
        <Route path='/' exact component={HomePage} />
        <Route path='/about' exact component={AboutPage} />
        <Route path='/contact' exact component={ContactPage} />
        <Route path='/products' exact component={ProductsPage} />
        <Route path='/products/:id' exact component={SingleProductPage} />
        <PrivateRoute path='/cart' exact component={CartPage} />
        <PrivateRoute path='/order' exact component={OrderPage} />
        {
          !currentUser.user ?
            <>
              <Route path='/signup' exact component={SignupPage} />
              <Route path='/login' exact component={LoginPage} />
            </>
            :
            <Redirect to='/' />
        }
        <Route component={DefaultPage} />
      </Switch >
      <Footer />
    </div >
  );
}

export default App;

