import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { fetchProducts, selectAllProducts } from '../../Slices/productSlice';
// import "./Products.css"
import {Link} from 'react-router-dom'


interface Product {
    id:number;
    name: string;
    price: number;
    description: string;
    image: string;
    undercategory_id: number
}

const Product: React.FC = () => {
  const products = useSelector(selectAllProducts);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(products)

  return (
    <div>
      {products?.map((product) => (
        <Link to= {`/product/${product.id}`}  key={product.id}>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.description}</div>
          <div>{product.undercategory_id}</div>

          <img
              // src={`http://localhost:6005/${product?.image}`}
              src={`${product?.image}`}
              alt="Sample photo"
            />
        </Link>
      ))}
    </div>
  );
};



export default Product;