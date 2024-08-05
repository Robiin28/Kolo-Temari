import React from 'react';
import './add.css'; // Make sure to import the CSS

export const SignUpBox = () => {
  return (

    <>
    <div className="containers">
    <div className='headSign'>
        <h1>Get your Training <span className='free'>for free</span></h1>
    </div>
      <div className="signBox">
        <h1>Sign Up Now</h1>
        <div className="input-container">
          <input id="name" type="text" placeholder=" " required />
          <label htmlFor="name">What's your name...</label>
        </div>
        <div className="input-container">
          <input id="email" type="email" placeholder=" " required />
          <label htmlFor="email">What's your email...</label>
        </div>
        <div className="input-container">
          <input id="phone" type="tel" placeholder=" " required />
          <label htmlFor="phone">What's your phone...</label>
        </div>
        <button type="submit">Get In!</button>
      </div>
    </div>
    </>
  );
}
