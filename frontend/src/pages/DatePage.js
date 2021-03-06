import React from 'react';
import DateCounter from '../components/DateCounter';

const DatePage = () => (
  <div>
    <section id="date" className="section-date datePage ">
      <div className="ornamental-wrapper ornamental-wrapper--mobile">
        <DateCounter />
      </div>
    </section>
  </div>
);

export default DatePage;