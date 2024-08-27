import React, { useState } from 'react';
import './cart.css'; // Ensure you have this CSS file for styling
import { FaStar, FaDollarSign } from 'react-icons/fa'; // For star rating and price icon

const sampleCartItems = [
  {
    id: 1,
    title: 'Introduction to React',
    price: 99.99,
    image: './image/kolo.png', // Placeholder image
    rating: 4.7,
    hours: '10 hours',
    lecturer: 'John Doe',
    level: 'Beginner'
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    price: 79.99,
    image: './image/students.png', // Placeholder image
    rating: 4.8,
    hours: '8 hours',
    lecturer: 'Jane Smith',
    level: 'Advanced'
  }
];

export const Cart = () => {
  const [cartItems, setCartItems] = useState(sampleCartItems);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    // Handle checkout process here
    alert('Proceeding to checkout...');
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart-message">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="item-image" />
                <div className="item-details">
                  <h2 className="item-title">{item.title}</h2>
                  <p className="item-description">{item.lecturer}</p>
                  <div className="item-info">
                    <span className="item-rating">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < Math.round(item.rating) ? 'star-filled' : 'star-empty'}
                        />
                      ))}
                      {item.rating}
                    </span>
                  </div>
                  <div className="item-price-actions">
                    <div className="item-price">
                      <FaDollarSign className="price-icon" />
                      ${item.price.toFixed(2)}
                    </div>
                    <div className="item-actions">
                      <a 
                        href="#remove" 
                        className="remove-link" 
                        onClick={(e) => {
                          e.preventDefault(); 
                          handleRemoveItem(item.id);
                        }}
                      >
                        Remove from Cart
                      </a>
                      <a href="#watch" className="watch-link">Watch it for Later</a>
                    </div>
                  </div>
                  <div className="item-details-bottom">
                    <div className="item-bottom-info">
                      <span className="item-hours">Hours: {item.hours}</span>
                      <span className="item-level">Level: {item.level}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart-summary">
          <div className="cart-summary-content">
            <div>
              <h2>Total</h2>
              <p className="total-price">${totalPrice.toFixed(2)}</p>
            </div>
            <button className="payment-button" onClick={handleCheckout}>
              CheckOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
