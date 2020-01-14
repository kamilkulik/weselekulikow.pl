import React from 'react';
import ConfirmationForm from '../components/ConfirmationForm';
import PhoneConfirm from '../components/PhoneConfirm';
import ConfirmationOptions from '../components/ConfirmationOptions';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ReturnBtn from '../components/ReturnBtn';

export default class AcceptInvite extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.returnBack = this.returnBack.bind(this);
    this.state = {
      option: undefined
    }
  }
  returnBack() {
    this.setState({ option: undefined});
  }
  handleClick(value) {
    this.setState({ option: value })
  }
  render() {
    const state = this.state.option;
    const options = (
      //<CSSTransition classNames="formTran" timeout={300}>
          <ConfirmationOptions handleClick={this.handleClick}/>
      //</CSSTransition>
    );
    let option;

    if (state === 'phone') {
      option = (
        <CSSTransition classNames="formTran" timeout={300}>
        <div className="form-container">
          <ReturnBtn message="Wróć" returnBack={this.returnBack}/>
          <PhoneConfirm phoneNo="884 947 484‬" name="Wojciecha"/>
          <PhoneConfirm phoneNo="609 851 643‬" name="Eweliny"/>
        </div>
        </CSSTransition>
      );
    } else if (state === 'email') {
      option = (
        <CSSTransition classNames="formTran" timeout={300}>
        <div className="form-container">
          <ReturnBtn message="Wróć" returnBack={this.returnBack}/>
          <ConfirmationForm />
        </div>
        </CSSTransition>
      )
    }
    return (
      <section id="accept" className="section-accept acceptPage acceptInvitePage">
        <div className="ornamental-wrapper--accept ornamental-wrapper--accept--mobile ornamental-wrapper--tab-port invite-wrapper">
          { state === undefined && <p className="form__p form__p--options">Wybierz jak potwierdzisz swoje przybycie:</p>}
          <TransitionGroup component={null} className="OptionsTransitions">
              { state === undefined ? options : option }
          </TransitionGroup>
        </div>
      </section>
    );
  }
};