import React from 'react';
import FooterEv from '../assets/Artboard_9.png';
import FooterW from '../assets/Artboard_10.png';
import Phone from '../assets/phone.png';
import onScroll from '../utils/onScroll';

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.phone = React.createRef();
  }
  componentDidMount () {
    const phoneElem = this.phone.current;
    onScroll(phoneElem, 'bottom');
  }
  render() {
    return (
      <div>
        <section id="footer" className="section-contact">
          <div className="footer">
            <div className="footer-col--half"></div>
            <div className="footer-col"><img src={FooterEv} alt="Ewelina" className="footer__sign"/></div>
            <div className="footer-col--half"></div>
            <div className="footer-col footer-col--mobile"><img src={Phone} alt="phone" ref={this.phone} className="footer__phone"/></div>
            <div className="footer-col--half"></div>
            <div className="footer-col"><img src={FooterW} alt="Wojciech" className="footer__sign"/></div>
            <div className="footer-col--half"></div>
          </div>
        </section>
      </div>
    )
  }
}