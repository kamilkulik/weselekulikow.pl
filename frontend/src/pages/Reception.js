import React from 'react';
import ReceptionImage from '../assets/Artboard_6.webp';
import ReceptionSign from '../assets/Artboard_3.png';
import Section from '../components/Section';

const Reception = () => (
  <div>
    <Section 
    id={"reception"}
    description={'Świętujemy i bawimy się “Pod Kasztanami”, z dala od miejskiego zgiełku ale jednocześnie blisko centrum Wrocławia.'}
    sectionSign={ReceptionSign}
    address={'ul. Opatowicka 11'}
    sectionImg={ReceptionImage}
    customClass={"section-img--sign__podKasztanami"}
    />
  </div>
);

export default Reception;