import React from 'react';

class TimerDisplay extends React.Component {
  render() {
    return (
      <div id='timer-display'>
        <span id='selection'>
          {this.props.currentTimeMin}<span className='time-unit'>m</span> {this.props.formatTime(this.props.currentTimeSec)}<span className='time-unit'>s</span>
        </span>
      </div>
    );
  }
}

export default TimerDisplay;