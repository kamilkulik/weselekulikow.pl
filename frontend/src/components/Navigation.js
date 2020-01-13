import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';
import pageIndex from '../utils/pageIndex';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.handleNav = this.handleNav.bind(this);
    this.state = {
      open: true
    };
  };
  handleNav() {
    document.getElementById("navi-toggle").checked = this.state.open;
    this.setState(() => ({ open: !this.state.open } ));
  };
  render() {
    return (
      <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" onClick={this.handleNav}/>

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          {!this.state.open && <ul className="navigation__list">
            <BrowserRouter>
              {Object.entries(pageIndex).map(([key, value], index) => {
                return (
                  <li className="navigation__item" key={key}>
                    <NavLink smooth to={`#${key}`} className="navigation__link" onClick={this.handleNav}>
                      <span>{`${index+1}.`}</span>
                      {value}
                    </NavLink>
                  </li>
                )
              })}
            </BrowserRouter>
          </ul>}
        </nav>
      </div>
    )
  };
};