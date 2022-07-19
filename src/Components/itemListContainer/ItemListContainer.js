import React, { useEffect, useState } from "react";
import ItemList from "../itemList/ItemList";
import Loading from "../../assets/img/Loading.gif";
//import { getData, product } from "../../mocks/fakeApi";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, 'product');
    const q = query(productsCollection, where('categoria', '==', categoryId))

    getDocs(categoryId
      ? q
      : productsCollection
      )
    .then(result => {
      const lista = result.docs.map(product => {
        return {
          id: product.id,
          ...product.data(),
        } 
      })
      setProductList(lista);
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));

    //setLoading(true)
    //getData(categoryId)
      //.then((result) => setProductList(result))
      //.catch((error) => console.log(error))
      //.finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      {loading ? <img src={Loading} alt=""></img> : <ItemList productList={productList} />}
    </div>
  );
};

export default ItemListContainer;
