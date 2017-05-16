import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    window.setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    var months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
      'Friday', 'Saturday'];

    var date = new Date();
    var ampm = date.getHours() < 12 ? 'AM' : 'PM';
    var hours = date.getHours() == 0
                ? 12
                : date.getHours() > 12
                  ? date.getHours() - 12
                  : date.getHours();

    var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

    var dayOfWeek = days[date.getDay()];
    var month = months[date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();

    var dateString = dayOfWeek + ', ' + month + ' ' + day + ', ' + year;

    this.setState({
      date: dateString,
      hours,
      minutes,
      seconds,
      ampm,
    });
  }

  render() {
    return (
      <div className="dateTime">
        <div>
          {this.state.hours}:{this.state.minutes}:{this.state.seconds} {this.state.ampm}
        </div>
        <div>{this.state.date}</div>
      </div>
    )
  }
}

export default Time;
