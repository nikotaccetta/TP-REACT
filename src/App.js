import React from "react";
import Header from "./Components/Header/NavBar";
import ItemListContainer from "./Components/itemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>   
          <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>  
          <Route path='/detail/:id' element={<ItemDetailContainer />}></Route>           
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
