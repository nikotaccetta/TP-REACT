import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import { getProd } from "../../mocks/fakeApi";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
      getProd(id)
      .then((result) => setProduct(result))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      {loading ? <p>Cargando...</p> : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
