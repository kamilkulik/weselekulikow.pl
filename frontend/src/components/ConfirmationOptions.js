import React from 'react';
import { ReactComponent as Email } from '../assets/SVG/envelope.svg';
import { ReactComponent as Phone } from '../assets/SVG/phone.svg';

const ConfirmationOptions = (props) => {
  return (
    <div className="conf-opts">
      <Phone onClick={() => props.handleClick('phone')} className="conf-opts__ico" width="100" height="100"/>
      <Email onClick={() => props.handleClick('email')} className="conf-opts__ico" width="100" height="100"/>
    </div>
    )
};

export default ConfirmationOptions;