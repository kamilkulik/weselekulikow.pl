import React from 'react';
import ReceptionImage from '../assets/Artboard_6.png';
import ReceptionSign from '../assets/Artboard_3.png';
import Section from '../components/Section';

const Reception = () => (
  <div>
    <Section 
    id={"reception"}
    description={'Klimatyczna sala, niepowtarzala atmosfera, piękny kwiatowy ogród. Czego chcieć więcej?'}
    sectionSign={ReceptionSign}
    address={'ul. Opatowicka 11'}
    sectionImg={ReceptionImage}
    customClass={"section-img--sign__podKasztanami"}
    />
  </div>
);

export default Reception;