import React from 'react';
import Email from '../assets/email.png';
import Phone from '../assets/phone.png';

const ConfirmationOptions = (props) => {
  return (
    <div>
      <img src={Phone} className="image" alt="phone" onClick={() => props.handleClick('phone')}/>
      <img src={Email} className="image" alt="email" onClick={() => props.handleClick('email')}/>
    </div>
    )
};

export default ConfirmationOptions;