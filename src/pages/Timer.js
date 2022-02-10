import React from 'react';
import TimerDisplay from './components/TimerDisplay';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
    };
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
      this.watch = setInterval(() => this.pace(), 10);
    }
  };

  stop = () => {
    this.setState({ running: false });
    clearInterval(this.watch);
  };

  pace = () => {
    this.setState({ currentTimeMs: this.state.currentTimeMs + 1 });
    if (this.state.currentTimeMs >= 100) {
      this.setState({ currentTimeSec: this.state.currentTimeSec + 1 });
      this.setState({ currentTimeMs: 0 });
    }
    if (this.state.currentTimeSec >= 60) {
      this.setState({ currentTimeMin: this.state.currentTimeMin + 1 });
      this.setState({ currentTimeSec: 0 });
    }
  };

  reset = () => {
    this.setState({
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
      running: false
    });
    clearInterval(this.watch);
  };

  render() {
    return (
      <div className='app-view'>
        <div id='timer'>
          <p className="app-title" ref="header">Timer</p>
          <TimerDisplay ref="display" {...this.state} formatTime={this.formatTime} />
          <div id='button-container'>
            {(this.state.running === false && this.state.currentTimeMs === 0 && this.state.currentTimeSec === 0 && this.state.currentTimeMin === 0) && (
              <button className='btn btn-primary' onClick={this.start}>START</button>
            )}
            {this.state.running === true && (
              <button className='btn btn-danger' onClick={this.stop}>STOP</button>
            )}
            {(this.state.running === false && (this.state.currentTimeMs !== 0 || this.state.currentTimeSec !== 0 || this.state.currentTimeMin !== 0)) && (
              <button className='btn btn-success' onClick={this.start}>RESUME</button>
            )}
            <button className='btn btn-light' onClick={this.reset}>RESET</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;