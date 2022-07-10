import React, { Fragment } from "react";
import { useEffect } from "react";
import "./App.css";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from "./Login";
import Subheader from "./Subheader";
import Footer from "./Footer";
import Payment from "./Payment";
import Orders from "./Orders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe('pk_test_51LIqpaSIm3ABHMx3637AcfuLRpuR9ikbFWeP9xtk4OGzv3snGW9HpYfO0pYqIiT1f2mvcUnDlzXRmNxIJewcZswM00fZlyoMBg');

function App() {

const [{ basket }, dispatch] = useStateValue();

useEffect(() => {
  // will run once when app component is loaded
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS: ', authUser);

      if (authUser) {
        // user logged in/ was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      }
      else {
        // user logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }

    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="app">
        <Routes>
             <Route path="/orders" element={
              <Fragment>
                <Header />
                <Orders />
              </Fragment>} />                             {/* <Orders /> is a component */}

            <Route path="/login" element={<Login />} />       {/* <Login /> is a component */}

            <Route path="/checkout"                           /* <Checkout /> is a component */
              element={
                <Fragment> 
                  <Header />
                  <Subheader />
                  <Checkout />
                  <Footer />
                </Fragment>} />  
                
             <Route path="/payment"                           /* <payment /> is a component */
              element={
                <Fragment> 
                  <Header />
                  <Elements stripe={promise}>
                    <Payment /> 
                  </Elements>              
                </Fragment>} />     

            <Route path="/"                                   /* <Home /> is a component */
              element={
                <Fragment> 
                  <Header />
                  <Subheader />
                  <Home />
                  <Footer />
                </Fragment>} />             
        </Routes>   
      </div>
    </Router>
  );
}

export default App;
