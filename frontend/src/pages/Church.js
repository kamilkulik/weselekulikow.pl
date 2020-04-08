import React from 'react';
import churchSign from '../assets/Artboard_2.png';
import churchImg from '../assets/Artboard_5.png';
import Section from '../components/Section';

const Church = () => (
  <div>
    <Section 
      id={"church"}
      description={'Powiemy sobie “tak” w pięknym barokowym kościele z XIV w. usytuowany w ścisłym centrum Wrocławia.'}
      sectionSign={churchSign}
      address={'ul. Plac Wolności 3'}
      sectionImg={churchImg}
    />
  </div>
);

export default Church;