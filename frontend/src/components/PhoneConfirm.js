import React from 'react';

const PhoneConfirm = (props) => (
  <div>
    <p>Zadzwoń do {props.name}</p>
    <a href={`tel:${props.phoneNo}‬`}>{props.phoneNo}</a>
  </div>
);

export default PhoneConfirm;