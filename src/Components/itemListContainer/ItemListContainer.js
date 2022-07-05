import React, {useEffect, useState} from "react";
import ItemList from "../itemList/ItemList";
import { getData } from "../../mocks/fakeApi";


const ItemListContainer = ({greeting}) => {
    const [productList, setProductList]=useState([])
    const [loading, setLoading]=useState(true)
   

    useEffect(()=>{
        getData
        .then((result)=> setProductList(result))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[])

    return (
        <div>
            <h1>{greeting}</h1>
            {loading ? <p>Cargando...</p> : <ItemList productList={productList}/>}            
        </div>
    )
}

export default ItemListContainer