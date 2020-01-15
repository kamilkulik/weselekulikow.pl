import React from 'react';
import { ReactComponent as Chevron } from '../assets/SVG/chevron-down.svg';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Header = () => (
  <div>
    <section className="section-header">
    <div className="svg-wrapper svg-wrapper__link">
      <NavLink smooth to={`#date`}>
        <Chevron className="svg-icon svg-chevron" width="150" height="150"/>
      </NavLink>
    </div>
    </section>
  </div>
);

export default Header;