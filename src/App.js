import React from "react";
<<<<<<< HEAD
import { Redirect, Route, Switch } from "react-router-dom";
import { useAuth } from './context/AuthContext';
=======
import { Route, Switch } from "react-router-dom";
import { Auth } from './utility/firebase';

>>>>>>> 94da99ac5f332ac6e0e3e1ef99e18f73d8afefaf
import {
  AboutPage,
  CartPage, ContactPage,
  DefaultPage, HomePage,
<<<<<<< HEAD
  ProductsPage, SingleProductPage, SignupPage, LoginPage,
=======
  ProductsPage, SingleProductPage, SignupPage
>>>>>>> 94da99ac5f332ac6e0e3e1ef99e18f73d8afefaf
} from "./pages";
import { Navbar, Sidebar, SideCart, Footer, PrivateRoute } from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

<<<<<<< HEAD
=======

>>>>>>> 94da99ac5f332ac6e0e3e1ef99e18f73d8afefaf
function App() {
  const { currentUser } = useAuth()

  return (

    <div className="App">
      {/* {console.log(Auth)} */}
      <Navbar />
      <Sidebar />
      <SideCart />
<<<<<<< HEAD
      {/* <div> */}
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/Products' exact component={ProductsPage} />
        <Route path='/Products/:id' component={SingleProductPage} />
        <PrivateRoute path='/cart' component={CartPage} />
        {/* // signup */}
        {
          !currentUser ?
            <>
              <Route path='/signup' exact component={SignupPage} />
              <Route path='/login' exact component={LoginPage} />
            </>
            :
            <Redirect to='/' />
        }

        <Route component={DefaultPage} />
      </Switch>
      {/* </div> */}
=======
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
>>>>>>> 94da99ac5f332ac6e0e3e1ef99e18f73d8afefaf
      <Footer />
    </div >
  );
}

export default App;

