import React, { Component } from 'react'
import TimerDisplay from './TimerDisplay';

export default class TimerEngine extends Component {
  constructor (props) {
    super(props);
    this.state = {
      running: false,
      currentTimeHr: this.props.hh,
      currentTimeMin: this.props.mm,
      currentTimeSec: this.props.ss,
    }
  }

  formatTime = (val, ...rest) => {
    let value = val.toString();
    if (value.length < 2) {
      value = '0' + value;
    }
    return value;
  };

  start = () => {
    if (!this.state.running) {
      this.setState({ running: true });
      this.watch = setInterval(() => this.pace(), 1000);
    }
  };

  stop = () => {
    this.setState({ running: false });
    clearInterval(this.watch);
  };

  pace = () => {
    this.setState({ currentTimeSec: this.state.currentTimeSec - 1 });
    if (this.state.currentTimeSec < 0) {
      this.setState({ currentTimeMin: this.state.currentTimeMin - 1 });
      this.setState({ currentTimeSec: 59 });
    }
    if (this.state.currentTimeMin === 0 && this.state.currentTimeSec === 0) {
      this.stop();
    }
  };

  reset = () => {
    this.setState({
      currentTimeHr: this.props.hr,
      currentTimeMin: this.props.mm,
      currentTimeSec: this.props.ss,
      running: false
    });
    clearInterval(this.watch);
  };

  render() {
    return (
      <div id='timer'>
        <p className="app-title" ref="header">Timer</p>
        <TimerDisplay ref="display" {...this.state} formatTime={this.formatTime} />
        <div id='button-container'>
          {(this.state.running === false) && (
            <button className='btn btn-primary' onClick={this.start}>START</button>
          )}
          {this.state.running === true && (
            <button className='btn btn-danger' onClick={this.stop}>STOP</button>
          )}
          <button className='btn btn-light' onClick={this.reset}>RESET</button>
        </div>
      </div>
    )
  }
}