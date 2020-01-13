import React from 'react';

const ConfirmationThanks = (props) => (
  <div className="form-thanks">
    <p className="from-thanks__smallText">{props.message}</p>
    <p className="from-thanks__bigText">{props.thanks}</p>
  </div>
)

export default ConfirmationThanks;