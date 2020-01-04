import React from 'react';
import ConfirmationForm from '../components/ConfirmationForm';
import PhoneConfirm from '../components/PhoneConfirm';
import ConfirmationOptions from '../components/ConfirmationOptions';

export default class AcceptInvite extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      option: undefined
    }
  }
  handleClick(value) {
    this.setState({ option: value })
  }
  render() {
    const state = this.state.option;
    const options = <ConfirmationOptions handleClick={this.handleClick}/>;
    let option;

    if (state === 'phone') {
      option = (
        <div>
          <PhoneConfirm phoneNo="884 947 484‬" name="Wojciecha"/>
          <PhoneConfirm phoneNo="609 851 643‬" name="Eweliny"/>
        </div>
      );
    } else if (state === 'email') {
      option = <ConfirmationForm />
    }
    return (
      <section id="accept" className="section-accept">
        <p>Wybierz jak chciałbyś potwierdzić swoje przybycie:</p>
        { state === undefined ? options : option }
      </section>
    );
  }
};