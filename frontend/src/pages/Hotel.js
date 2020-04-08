import React from 'react';
import HotelImage from '../assets/Artboard_7.png';
import HotelSign from '../assets/Artboard_4.png';
import Section from '../components/Section';

const Hotel = () => (
  <div>
    <Section 
    id={"hotel"}
    description={'Goście przyjezdni odpoczną w komfortowym  *** hotelu na starym mieście.'}
    sectionSign={HotelSign}
    address={'Trzemeska 10'}
    sectionImg={HotelImage}
    />
  </div>
);

export default Hotel;