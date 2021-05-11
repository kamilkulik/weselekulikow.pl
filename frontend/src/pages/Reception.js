import React from 'react'
import ReceptionImage from '../assets/Artboard_6.png'
import ReceptionSign from '../assets/Artboard_3.png'
import Section from '../components/Section'

const Reception = () => (
  <div>
    <Section
      id={'reception'}
      description={
        'Świętujemy i bawimy się na sali w zamku Topacz, z dala od miejskiego zgiełku ale jednocześnie niedaleko centrum Wrocławia.'
      }
      sectionSign={ReceptionSign}
      address={'ul. Główna 12, Ślęza'}
      sectionImg={ReceptionImage}
      customClass={'section-img--sign__podKasztanami'}
    />
  </div>
)

export default Reception
