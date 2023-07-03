import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CategoryList } from "./CategoryList";
import { CheckoutPage } from "./CheckoutPage";
import { CartProvider } from "./components/CartContext";


const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CategoryList />} />
          <Route path="/checkoutPage" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
