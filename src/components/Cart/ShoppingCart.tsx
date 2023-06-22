import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItem, incrementCartItem, decrementCartItem, getCartItems, getCart } from '../../Slices/CartItemsSlice';
import { AppDispatch } from '../../app/store';
import { useNavigate, useParams } from 'react-router-dom';
import './ShoppingCart.css';
import { Link } from 'react-router-dom';

function ShoppingCart() {
  const cartItems = useSelector(getCartItems) || [];
  const dispatch = useDispatch<AppDispatch>();
  const { id }: { id?: string } = useParams();
  const [del, setIsdel] = useState<boolean>(false);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const navigate = useNavigate();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

   

  useEffect(() => {
    if (id) {
      dispatch(getCart(id));
    }
  }, [dispatch, id, setIsdel]);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((cart) => {
      total += cart.Product?.price * cart.quantity;
    });
    setTotalAmount(total);
  }, [cartItems]);

  function deleteCart(id: number) {
    dispatch(deleteCartItem(id));
  
    setTimeout(() => {
      window.location.reload();
      setIsdel(!del);
    }, 500);
  }
  

  function increment(id: number) {
    dispatch(incrementCartItem(id));
  }

  function decrement(id: number, quantity: number) {
    if (quantity < 1) {
      dispatch(deleteCartItem(id));
    } else {
      dispatch(decrementCartItem(id));
    }
  }
  
  

  const handleBuyNow = () => {
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
      navigate('/'); 
    }, 5000);
  };

  const handleBackToShopping = () => {
    navigate('/'); 
  };
  

  return (
    <Container className="shopping-cart-container">
      <div className="shopping-cart-container">
        {cartItems.length > 0 &&
          cartItems?.map((cart) => (
            <div key={cart?.Product?.id} className="cart-item">
              <div className="image-container">
                <img src={cart.Product?.image} className="product-image" alt={cart.Product?.name} />
              </div>
              <div className="product-details">
                <h5>{cart.Product?.name}</h5>
                <p>Price: AMD {cart.Product?.price}/1psc</p>
                <div className="quantity-group">
                  <span className="quantity-action" onClick={() => decrement(cart?.product_id, cart?.quantity)}>
                    -
                  </span>
                  <input type="text" value={cart.quantity} name="" readOnly className="quantity-input" />
                  <span className="quantity-action" onClick={() => increment(cart?.product_id)}>
                    +
                  </span>
                </div>
              </div>
              <FaTrash className="trash-icon" onClick={() => deleteCart(cart?.Product.id)} />
            </div>
          ))}
      </div>
      <div className="total-amount">
        Total Amount: AMD {totalAmount}
      </div>
      <div className="cart-buttons">
      <Button variant="primary" className="buy-now-button" onClick={handleBuyNow}>
  {showSuccessMessage && <div className="success-message">Successfully shopped!</div>}
  Buy Now
</Button>

        <Button variant="secondary" className="ml-2" onClick={handleBackToShopping}>
  Back to Shopping
</Button>
      </div>
    </Container>
  );
}

export default ShoppingCart;
