import React from "react";
import Header from "./Components/Header/NavBar";
import ItemListContainer from "./Components/itemListContainer/ItemListContainer.js";
import ItemCount from "./Components/itemCount/itemCount.js";
import Card from "./Components/Card/Card";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Card stock={10}/> 
      <ItemListContainer greeting="Bienvenidos a Niko Store"></ItemListContainer>       
      <ItemDetailContainer></ItemDetailContainer>
      </BrowserRouter>
    </div>  
    )
}

export default App
