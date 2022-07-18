import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import Loading from "../../assets/img/Loading.gif";
//import { getProd } from "../../mocks/fakeApi";
import { useParams } from "react-router-dom";
import { db } from '../../firebase/firebase';
import { doc, getDoc, collection } from "firebase/firestore";;


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect (() => {
    const productsCollection = collection(db, 'product')
    const refDoc = doc(productsCollection, id)
    getDoc(refDoc).then(result => {
      setProduct({
        id: result.id,
        ...result.data(),
      })
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));
  }, [id]);



 //useEffect(() => {
 //     getProd(id)
 //     .then((result) => setProduct(result))
 //     .catch((error) => console.log(error))
 //     .finally(() => setLoading(false));
 //  }, [id]);

  return (
    <div>
      {loading ? <img src={Loading} alt=""></img> : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
