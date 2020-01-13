import React from 'react';
import { ReactComponent as Chevron } from '../assets/SVG/chevron-down.svg';

const Header = () => (
  <div>
    <section className="section-header">
      <div className="svg-wrapper">
        <Chevron className="svg-icon svg-chevron" width="150" height="150"/>
      </div>
    </section>
  </div>
);

export default Header;