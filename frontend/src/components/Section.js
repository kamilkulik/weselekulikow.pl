import React from 'react';
import { ReactComponent as MapIco} from '../assets/SVG/map-marker.svg';

const Section = (props) => (
  <div>
    <section id={props.id} className={`section section-${props.id} section--${props.id}`}>
      <div className={`section-wrapper section-wrapper--${props.id}`}>
        <div className="section-wrapper__left">
          <img src={props.sectionSign} alt={props.id} className={`section-img--sign ${props.customClass}`}/>
            <div className="section-wrapper__left__paragraph">
              <p>{props.description}</p>
            </div>
          <div className="section-wrapper__left__bottom">
            <MapIco className={`section-img--ico section-img--ico--${props.id}`}/>
            <p>{props.address}</p>
          </div>
        </div>
        <div className="section-wrapper__right">
        <img src={props.sectionImg} alt={props.id} className="section-img"/>
        </div>
      </div>
    </section>
  </div>
);

export default Section;