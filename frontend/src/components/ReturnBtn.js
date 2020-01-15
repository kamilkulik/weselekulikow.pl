import React from 'react';
import { ReactComponent as Arrow } from '../assets/SVG/arrow-left.svg';

const ReturnBtn = (props) => (
  <div className="btn-ret__wrapper btn-ret__wrapper--phone" onClick={props.returnBack}>
    <Arrow height="20" width="40" className="btn-ret__ico"/>
    <p className="btn-ret__p">{props.message}</p>
  </div>
);

export default ReturnBtn;