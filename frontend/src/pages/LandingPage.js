import React from 'react';
import { Link } from 'react-router-dom';
import ButtonBig from '../components/ButtonBig';


function LandingPage() {
  const message = 'Zapraszamy';
  return (
    <div>
      <section className="landingPage">
        <div className="landingPage--text-box">
          <Link to="/home">
            <ButtonBig message={message}/>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;