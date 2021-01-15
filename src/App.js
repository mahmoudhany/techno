import React from "react";
import { Route, Switch } from "react-router-dom";
import { Auth } from './utility/firebase';

import {
  AboutPage,
  CartPage, ContactPage,
  DefaultPage, HomePage,
  ProductsPage, SingleProductPage, SignupPage
} from "./pages";
import { Navbar, Sidebar, SideCart, Footer } from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./style/style.css";
import './App.css'


function App() {
  return (
    <div className="App">
      {/* {console.log(Auth)} */}
      <Navbar />
      <Sidebar />
      <SideCart />
      <div>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/Products' exact component={ProductsPage} />
          <Route path='/Products/:id' component={SingleProductPage} />
          <Route path='/cart' component={CartPage} />
          {/* // signup */}
          <Route path='/signup' exact component={SignupPage} />
          <Route component={DefaultPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;

