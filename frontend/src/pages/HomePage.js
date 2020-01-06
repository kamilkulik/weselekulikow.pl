import React from 'react';
import AcceptInvite from './AcceptInvite';
import Church from './Church';
import DatePage from './DatePage';
import Footer from './Footer';
//import Header from './Header';
import Hotel from './Hotel';
import MapPage from './MapPage';
import Navigation from '../components/Navigation'
import Reception from './Reception';

function HomePage() {
  return (
    <div>
      <Navigation />
      <DatePage />
      <Church />
      <Reception />
      <Hotel />
      <MapPage />
      <AcceptInvite />
      <Footer />
    </div>
  );
}

export default HomePage;