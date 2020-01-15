import React from 'react';

const PhoneConfirm = (props) => (
  <div className="phone-confirm">
    <p className="form__p">Zadzwoń do {props.name}</p>
    <a href={`tel:${props.phoneNo}‬`} className="phone-confirm__tel">{props.phoneNo}</a>
  </div>
);

export default PhoneConfirm;