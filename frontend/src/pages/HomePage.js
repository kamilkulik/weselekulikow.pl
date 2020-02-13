import React from 'react';
import AcceptInvite from './AcceptInvite';
import Church from './Church';
import DatePage from './DatePage';
import Footer from './Footer';
import Header from './Header';
import Hotel from './Hotel';
import MapPage from './MapPage';
import Navigation from '../components/Navigation'
import Reception from './Reception';
import axios from 'axios';

export default class HomePage extends React.Component {
  componentDidMount() {
    axios.get('https://weselekulikow.herokuapp.com/email')
    .catch(function(e) {
      console.log(e)
    });
  }
  render() {
    return (
      <div>
        <Navigation />
        <Header />
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
}