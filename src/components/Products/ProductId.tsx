import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct, selectAllProducts } from "../../Slices/productSlice";
import { AppDispatch } from "../../app/store";
import './ProductId.css';
import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import { incrementCartCount } from "../../Slices/headerSlice";
import { decrementCartCount } from "../../Slices/headerSlice";
import { decodeToken } from 'react-jwt'
import { createCart } from "../../Slices/CartItemsSlice";

function Product() {
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const navigate = useNavigate();

  const [buttonColor, setButtonColor] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  const addToCart = () => {
    const user = localStorage.getItem("user");

    if (user) {
      const decoded: any = decodeToken(JSON.parse(user)?.jwt);

      const product_id = Number(id);
      const user_id = decoded.id;
      const quantity = selectedQuantity;

      console.log("product_id:", product_id);
      console.log("user_id:", user_id);
      console.log("quantity:", quantity);

      dispatch(createCart({ product_id, user_id, quantity }));
      dispatch(incrementCartCount(selectedQuantity));
      setButtonColor('success');
    
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    dispatch(fetchProduct(Number(id)));
  }, [dispatch, id, selectedQuantity]);

  const product = products.find((product) => product.id === Number(id));
  if (!product) {
    return <div className="loader">Loading...</div>;
  }

  const increaseQty = () => {
    setSelectedQuantity(selectedQuantity + 1);
  };

  const decreaseQty = () => {
    setSelectedQuantity(selectedQuantity => (selectedQuantity > 0 ? selectedQuantity - 1 : 0));
    dispatch(decrementCartCount()); // Dispatch the decrementCartCount action
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} className="d-flex align-items-center justify-content-end">
          <div className="image-box">
            <Image src={product?.image} alt="Sample photo" className="product-image-with-border" />
          </div>
        </Col>
        <Col md={6}>
          <h3>{product?.name}</h3>
          <p className="price">{product?.price} AMD/1psc</p>
          <div className="description-container">
            <div className="description">
              <p>{product?.description}</p>
            </div>
          </div>
          <div className="cw-quantity-group cw-quantity-5">
            <span className="cw-plusmins cw-mins" onClick={decreaseQty}>-</span>
            <input type="text" value={selectedQuantity} name="" readOnly />
            <span className="cw-plusmins cw-plus" onClick={increaseQty}>+</span>
          </div>
          <Button
            variant={buttonColor === "grey" ? "custom-pink" : buttonColor}
            onClick={addToCart}
            className={`mt-3 ${buttonColor === "grey" ? "initial-button-color" : ""}`}
          >
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Product;
