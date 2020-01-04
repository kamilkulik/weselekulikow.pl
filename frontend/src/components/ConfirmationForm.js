import React from 'react';
import axios from 'axios';

export default class ConfirmationForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      isGoing: 'tak',
      name: '',
      numberOfGuests: 2
    }
  };
  handleChange(e) {
    const target = e.target;
    const name = target.name;
    let value = target.value;
    value = name === 'numberOfGuests' ? parseInt(value) : value;
    this.setState({ [name]: value }); // computed property name used here
  };
  handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:3030/email', {
      isGoing: this.state.isGoing,
      name: this.state.name,
      numberOfGuests: this.state.numberOfGuests
    })
    .catch(err => (console.log(err)));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Potwierdzasz przybycie?</p>
        <label>
          <input 
            type="radio"
            name="isGoing"
            value="tak"
            checked={this.state.isGoing === "tak"}
            onChange={this.handleChange}
          />
          Tak
        </label>
        <label>
        <input 
          type="radio"
          name="isGoing"
          value="nie"
          checked={this.state.isGoing === "nie"}
          onChange={this.handleChange}
        />
        Nie
      </label>
        <br />
        {this.state.isGoing === "tak" && <div>
          <label>Imię i nazwisko:
            <input type="text" onChange={this.handleChange} name="name" value={this.state.name} required />
          </label>
          <br />
          <label>Ilość osób: 
            <select value={this.state.numberOfGuests} onChange={this.handleChange} name="numberOfGuests" required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </label>
        </div>}
        <br />
        <input 
          type="submit" 
          value={this.state.isGoing === "tak" ? "Potwierdź przybycie" : "Potwierdź, że Cię nie będzie :("}
          />
      </form>
    )
  };
};