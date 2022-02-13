import React from 'react';

class StopwatchDisplay extends React.Component {
  render() {
    return (
      <div className={'stopwatch-display'}>
        <span>{this.props.formatTime(this.props.currentTimeMin)}<span className='time-unit'>m </span>{this.props.formatTime(this.props.currentTimeSec)}<span className='time-unit'>s </span><span className='time-unit'>{this.props.formatTime(this.props.currentTimeMs, 'ms')}</span>
        </span>
      </div>
    );
  }
}

export default StopwatchDisplay;