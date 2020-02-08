import React from 'react';
import axios from 'axios';
import ConfirmationThanks from './ConfirmationThanks';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import setViewPort from '../utils/setViewPort';

export default class ConfirmationForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setViewport = this.setViewport.bind(this);
    this.state = {
      isGoing: 'tak',
      name: '',
      numberOfGuests: 2,
      formSent: false,
      err: '',
      transition: true
    }
  };
  setViewport() {
    setViewPort();
  }
  handleChange(e) {
    const target = e.target;
    const name = target.name;
    let value = target.value;
    value = name === 'numberOfGuests' ? parseInt(value) : value;
    this.setState({ [name]: value }); // computed property name used here
  };
  handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await axios.post('https://weselekulikow.herokuapp.com/email', {
        isGoing: this.state.isGoing,
        name: this.state.name,
        numberOfGuests: this.state.numberOfGuests
      })

      this.setState({ formSent: true });

    } catch(err) {
      const errCode = err.response.data.code;
      errCode === 11000 ? this.setState({ err: 'Jesteś juz zarejestrowany/a na wydarzenie' }) : this.setState({ err: 'Nieznany błąd' })
    }
  };
  render() {
    return (
      <>
      {!this.state.formSent ? (
        <form onSubmit={this.handleSubmit} className="form">
        <p className="form__p">Potwierdzasz przybycie?</p>
        <div className="form__group">
        <div className="form__radio-group">
          <input
            type="radio"
            name="isGoing"
            value="tak"
            checked={this.state.isGoing === "tak"}
            onChange={this.handleChange}
            className="form__radio-input"
            id="tak"
          />
          <label className="form__radio-label" htmlFor="tak">
            <span className="form__radio-button"></span>Tak
          </label>
        </div>
        <div className="form__radio-group">
          <input
            type="radio"
            name="isGoing"
            value="nie"
            checked={this.state.isGoing === "nie"}
            onChange={this.handleChange}
            className="form__radio-input"
            id="nie"
          />
          <label className="form__radio-label" htmlFor="nie">
            <span className="form__radio-button"></span>Nie
          </label>
        </div>
        </div>
        <TransitionGroup>
        {this.state.isGoing === "tak" && (
          <CSSTransition 
            classNames="formTran" 
            timeout={{
              enter: 500,
              exit: 0
            }}
            exit={false}
          >
          <div className="form__fields--wrapper">
          <div className="form__fields--line" style={{ color: 'red'}}>
            {this.state.err && (<div>{this.state.err}</div>)}
          </div>
          <div className="form__fields--line">
            <label className="form__label">Imię i nazwisko:</label>
            <input 
              className="form__input" 
              type="text" 
              onChange={() => this.handleChange}
              onClick={() => this.setViewport()}
              name="name" 
              value={this.state.name} 
              required />
          </div>
          <div className="form__fields--line">
          <label className="form__label">Ilość osób:</label>
            <select className="form__input" value={this.state.numberOfGuests} onChange={this.handleChange} name="numberOfGuests" required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            </div>
        </div>
        </CSSTransition>
        )}
        {this.state.isGoing === "nie" && (
          <CSSTransition 
            classNames="formTran" 
            timeout={{
              enter: 500,
              exit: 0
            }}
            exit={false}
          >
            <div className="form__fields--wrapper">
              <div className="form__fields--line">
                <label className="form__label">Imię i nazwisko:</label>
                <input className="form__input" type="text" onChange={this.handleChange} name="name" value={this.state.name} required />
              </div>
            </div>
            </CSSTransition>
            )}
            </TransitionGroup>
            <input 
            type="submit" 
            value={this.state.isGoing === "tak" ? "Potwierdź przybycie" : "Potwierdź, że Cię nie będzie :("}
            className="btn-small btn-small--animated"
            />
    </form>
      ) : (
        this.state.formSent && (
          <CSSTransition in={true} classNames="formTran" timeout={300}>
          <div className="form__fields--wrapper">
            <ConfirmationThanks 
              message={this.state.isGoing === "tak" ? "Dziękujemy za przyjęcie zaproszenia!" : "Przykro nam, że Cię nie będzie. Dziękujemy, że dałeś/aś nam znać."}
              thanks={this.state.isGoing === "tak" ? "Do zobaczenia!" : "Pozdrawiamy!"}
            />
          </div>
          </CSSTransition>
        )
      )}
      </>
    )
  };
};