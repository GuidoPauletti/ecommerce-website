import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageWrapper } from "./Components/PageWrapper";

// Pages
import { Home } from "./Components/Pages/Home";
import { About } from "./Components/Pages/About";
import { Products } from "./Components/Pages/Products";
import { Store } from "./Components/Pages/Store";
import {Cart} from "./Components/Pages/Cart";

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        exact={true}
        path="/"
        element={PageWrapper(Home)}
      />

    <Route
        path="/about"
        element={PageWrapper(About)}
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
      path="/cart"
      element={PageWrapper(Cart)}
    />
    </Routes>
  </BrowserRouter>
)