import React, { useEffect, useState } from "react";
import ItemList from "../itemList/ItemList";
import Loading from "../../assets/img/Loading.gif";
import { getData } from "../../mocks/fakeApi";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true)
    getData(categoryId)
      .then((result) => setProductList(result))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      {loading ? <img src={Loading} alt=""></img> : <ItemList productList={productList} />}
    </div>
  );
};

export default ItemListContainer;
