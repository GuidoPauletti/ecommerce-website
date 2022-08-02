import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { PageWrapper } from "./Components/PageWrapper";

// Pages
import { About } from "./Components/Pages/About";
import { Products } from "./Components/Pages/Products";
import { Store } from "./Components/Pages/Store";
import { ShoopingCart } from "./Components/Pages/ShoopingCart";
import SignIn from "./Components/Pages/SignIn";
import SignUp from "./Components/Pages/SignUp";
import { useStateValue } from "./StateProvider";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Components/firebase";
import { actionTypes } from "./reducer";
import Checkout from "./Components/Checkout/Checkout";



export const App = () => {

  const navigate = useNavigate();

  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      };
      navigate('/');
    })
  }, []);

  return (
  <Routes>
    <Route
      exact={true}
      path="/"
      element={PageWrapper(About)}
    />

    <Route
        path="/signin"
        element={PageWrapper(SignIn)}
    />

    <Route
        path="/products"
        element={PageWrapper(Products)}
    />

    <Route
        path="/store"
        element={PageWrapper(Store)}
    />

    <Route
        path="/shoppingcart"
        element={PageWrapper(ShoopingCart)}
    />

    <Route
      path="/signup"
      element={PageWrapper(SignUp)}
    />

    <Route
      path="/checkout"
      element={PageWrapper(Checkout)}
    />
  </Routes>
  
)}