import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  AboutPage,
  CartPage, ContactPage,
  DefaultPage, HomePage,
  ProductsPage, SingleProductPage,
} from "./pages";
import { Navbar, Sidebar, SideCart, Footer } from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./style/style.css";
import './App.css'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <SideCart />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/Products' exact component={ProductsPage} />
        <Route path='/Products/:id' component={SingleProductPage} />
        <Route path='/cart' component={CartPage} />
        <Route component={DefaultPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

