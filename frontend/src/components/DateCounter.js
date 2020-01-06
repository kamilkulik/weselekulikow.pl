import React from 'react';
import moment from 'moment';

export default class DateCounter extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined
  };
  componentDidMount() {
    this.interval= setInterval(() => {
      const date = moment('08 08 2020, 4:00 pm', 'MM DD YYYY, h:mm p')
      const now = moment();
      const countdown = moment(date-now);
      const days = countdown.format('DDD');
      const hours = countdown.format('HH');
      const minutes = countdown.format('mm');
      const seconds = countdown.format('ss');

      this.setState({ days, hours, minutes, seconds })
    }, 1000)
  };
  componentWillUnmount() {
    if(this.interval) {
      clearInterval(this.interval);
    }
  }
  render() {
    const {days, hours, minutes, seconds} = this.state;
    return (
      <div className="date-box">
        <h1 className="date-box__date">08.08.2020</h1>
        <div className="countdown-wrapper">
          {days && (
            <div className="countdown-item">
              {days}
              <span>dni</span>
            </div>)}
          {hours && (
            <div className="countdown-item">
              {hours}
              <span>godzin</span>
            </div>)}
          {minutes && (
            <div className="countdown-item">
              {minutes}
              <span>minut</span>
            </div>)}
            {seconds && (
              <div className="countdown-item">
                {seconds}
                <span>sekund</span>
              </div>)}
        </div>
      </div>
      )
  }
};