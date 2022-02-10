import React from 'react';

class TimerDisplay extends React.Component {
  render() {
    return (
      <div className={'stopwatch-display'}>
        <span>
          {this.props.formatTime(this.props.currentTimeMin)}:
          {this.props.formatTime(this.props.currentTimeSec)}:
          {this.props.formatTime(this.props.currentTimeMs, 'ms')}
        </span>
      </div>
    );
  }
}

export default TimerDisplay;