import React from "react";
import Header from "./Components/Header/NavBar";
import ItemListContainer from "./Components/itemListContainer/index.js";


const App = () => {
  return (
    <div>  
      <Header></Header>
      <ItemListContainer greeting="Bienvenidos a Niko Store"></ItemListContainer>      
    </div>  
    )
}

export default App
