import React from "react";
import Header from "./Components/Header/NavBar";
import ItemListContainer from "./Components/itemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./context/cartContext";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <Header></Header>
          <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route
                        path="/category/:categoryId"
                        element={<ItemListContainer />}
                    />
                    <Route
                        path="/detail/:id"
                        element={<ItemDetailContainer />}
                    />
                    <Route path="/Cart" element={<Cart />} />
                </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
