import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProduct, selectAllProducts } from "../../Slices/productSlice"
import { AppDispatch } from "../../app/store";


function Product() {
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  useEffect(() => {
    dispatch(fetchProduct(Number(id)));
  }, [dispatch, id]);

  // if (!product) {
  //   return <div>Loading...</div>;
  // }
  const product = products.find((product) => product.id === Number(id));
  return (
    <div className="child">
       <img
              // src={`http://localhost:6005/${product?.image}`}
              src={`${product?.image}`}
              alt="Sample photo"
            />
      <p>
        <strong>{product?.name}</strong>
        <br />
        {product?.description}
        <br />
        {product?.price}դր/1կտ
        <br />
      </p>
    </div>
  );
}

export default Product;
