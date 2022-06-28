import React from "react";
import Header from "./Components/Header/NavBar";
import ItemListContainer from "./Components/itemListContainer/index.js";
import Card from "./Components/Card/Card";


const App = () => {
  return (
    <div>  
      <Header></Header>
      <ItemListContainer greeting="Bienvenidos a Niko Store"></ItemListContainer> 
      <Card stock={10}/>     
    </div>  
    )
}

export default App
