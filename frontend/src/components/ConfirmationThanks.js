import React from 'react';

const ConfirmationThanks = (props) => (
  <div className="form-thanks">
    <p className="form-thanks__smallText">{props.message}</p>
    <p className="form-thanks__bigText">{props.thanks}</p>
  </div>
)

export default ConfirmationThanks;