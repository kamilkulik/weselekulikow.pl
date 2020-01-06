import React from 'react';
import churchSign from '../assets/Artboard_2.png';
import churchImg from '../assets/Artboard_5.png';
import { ReactComponent as ChurchIco} from '../assets/SVG/map-marker.svg';

const Church = () => (
  <div>
    <section id="church" className="section-church churchPage">
      <div className="church-wrapper">
        <div className="church-wrapper__left">
          <img src={churchSign} alt="church" className="church-img--sign"/>
          <p>Piękny barokowy kościół z XIV w. usytuowany w ścisłym centrum Wrocławia.</p>
          <div className="church-wrapper__left__bottom">
            <ChurchIco className="church-img--ico"/>
            <p>ul. Plac Wolności 3</p>
          </div>
        </div>
        <div className="church-wrapper__right">
        <img src={churchImg} alt="church" className="church-img"/>
        </div>
      </div>
    </section>
  </div>
);

export default Church;