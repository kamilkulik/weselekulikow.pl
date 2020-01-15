import React from 'react';
import FooterEv from '../assets/Artboard_9.png';
import FooterW from '../assets/Artboard_10.png';
import Phone from '../assets/phone.png';

const Footer = () => (
  <div>
    <section id="footer" className="section-contact">
      <div className="footer">
        <div className="footer-col--half"></div>
        <div className="footer-col"><img src={FooterEv} alt="Ewelina" className="footer__sign"/></div>
        <div className="footer-col--half"></div>
        <div className="footer-col footer-col--mobile"><img src={Phone} alt="phone" className="footer__phone"/></div>
        <div className="footer-col--half"></div>
        <div className="footer-col"><img src={FooterW} alt="Wojciech" className="footer__sign"/></div>
        <div className="footer-col--half"></div>
      </div>
    </section>
  </div>
);

export default Footer;