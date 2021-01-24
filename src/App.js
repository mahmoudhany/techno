import React, { Suspense } from "react";
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
const Loading = () => (<h3>Loading...</h3>)

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
        <Route path='/Products' exact component={ProductsPage} />
        <Route path='/Products/:id' exact component={SingleProductPage} />
        <PrivateRoute path='/cart' exact component={CartPage} />
        <PrivateRoute path='/order' exact component={OrderPage} />
        <Route path="*" component={DefaultPage} />
        {
          !currentUser.user ?
            <>
              <Route path='/signup' exact component={SignupPage} />
              <Route path='/login' exact component={LoginPage} />
              <Route path="*" component={DefaultPage} />
            </>
            :
            <Redirect to='/' />
        }

      </Switch >
      <Footer />
    </div >
  );
}

export default App;

