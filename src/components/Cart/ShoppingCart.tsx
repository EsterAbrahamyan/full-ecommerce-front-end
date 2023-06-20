import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItem, moveToWishlist, incrementCartItem, decrementCartItem, getCartItems, getCart } from '../../Slices/CartItemsSlice';
import { AppDispatch } from '../../app/store';
import { useParams } from 'react-router-dom';
import './ShoppingCart.css'

function ShoppingCart() {
  const data = useSelector(getCartItems) || [];
  const dispatch: AppDispatch = useDispatch();
  const { id }: { id?: string } = useParams();

  const [del, setIsdel] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      dispatch(getCart(id));
    }
  }, [dispatch, id, setIsdel]);

  function deleteCart(id: number) {
    dispatch(deleteCartItem(id));
    // setIsdel(!del);
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
    // Logic to handle the buy now action
  };

  return (
    <Container className="shopping-cart-container">
      <div className="shopping-cart-container">
        {data.length > 0 &&
          data?.map((cart) => (
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
                  <input type="text" value={cart.quantity} name="" readOnly className="quantity-input"/>
                  <span className="quantity-action" onClick={() => increment(cart?.product_id)}>
                    +
                  </span>
                </div>
              </div>
              <FaTrash className="trash-icon" onClick={() => deleteCart(cart?.Product.id)} />
            </div>
          ))}
      </div>
      <div className="cart-buttons">
  <Button variant="primary" onClick={handleBuyNow}>
    Buy Now
  </Button>
  <Button variant="secondary" className="ml-2">
    Back to Shopping
  </Button>


</div>

    </Container>
  );
}

export default ShoppingCart;
