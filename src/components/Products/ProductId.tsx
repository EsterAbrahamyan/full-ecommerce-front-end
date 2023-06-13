import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct, selectAllProducts } from "../../Slices/productSlice";
import { AppDispatch } from "../../app/store";
import './ProductId.css';
import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';

function Product() {
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  const [buttonColor, setButtonColor] = useState('grey');

  const addToCart = () => {
    // Add logic to handle adding the product to the cart
    // ...

    // Change the button color to success after clicking
    setButtonColor('success');
  };

  useEffect(() => {
    dispatch(fetchProduct(Number(id)));
  }, [dispatch, id]);

  const product = products.find((product) => product.id === Number(id));
  if (!product) {
    return <div className="loader">Loading...</div>;
  }

  const increaseQty = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const qtyEl = event.currentTarget.previousElementSibling as HTMLInputElement;
    let value = parseInt(qtyEl.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    qtyEl.value = value.toString();
  };

  const decreaseQty = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const qtyEl = event.currentTarget.nextElementSibling as HTMLInputElement;
    let value = parseInt(qtyEl.value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? (value = 1) : "";
    value--;
    qtyEl.value = value.toString();
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
          <p className="price">{product?.price} AMD/1psc</p> {/* Modified CSS class */}
          <div className="description-container">
            <div className="description">
              <p>{product?.description}</p>
            </div>
          </div>
          <div className="cw-quantity-group cw-quantity-5"> {/* Custom Quantity HTML */}
            <span className="cw-plusmins cw-mins" onClick={decreaseQty}>-</span>
            <input type="text" value="0" name="" />
            <span className="cw-plusmins cw-plus" onClick={increaseQty}>+</span>
          </div>
          <Button
            variant={buttonColor === 'grey' ? 'custom-pink' : buttonColor}
            onClick={addToCart}
            className={`mt-3 ${buttonColor === 'grey' ? 'initial-button-color' : ''}`}
            style={{ border: `2px solid ${buttonColor === 'grey' ? 'grey' : ''}` }}
          >
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Product;
