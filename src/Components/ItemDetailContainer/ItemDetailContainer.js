import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import { getData } from "../../mocks/fakeApi";


const ItemDetailContainer = () => {
    const [productList, setProduct]=useState([])
    const [loading, setLoading]=useState(true)
   

    useEffect(()=>{
        getData
        .then((result)=> setProduct(result))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[])

    return (
        <div>
            {loading ? <p>Cargando...</p> : <ItemDetail setProduct={productList}/>}            
        </div>
    )
}

export default ItemDetailContainer