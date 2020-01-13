import React from 'react';
import ConfirmationForm from '../components/ConfirmationForm';
import PhoneConfirm from '../components/PhoneConfirm';
import ConfirmationOptions from '../components/ConfirmationOptions';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
        <CSSTransition classNames="form" timeout={300}>
        <div>
          <PhoneConfirm phoneNo="884 947 484‬" name="Wojciecha"/>
          <PhoneConfirm phoneNo="609 851 643‬" name="Eweliny"/>
        </div>
        </CSSTransition>
      );
    } else if (state === 'email') {
      option = (
        <CSSTransition classNames="form" timeout={300}>
        <ConfirmationForm />
        </CSSTransition>
      )
    }
    return (
      <section id="accept" className="section-accept acceptPage acceptInvitePage">
        <div className="ornamental-wrapper--accept invite-wrapper">
          { state === undefined && <p>Wybierz jak potwierdzisz swoje przybycie:</p>}
          <TransitionGroup component={null}>
              { state === undefined ? options : option }
          </TransitionGroup>
        </div>
      </section>
    );
  }
};