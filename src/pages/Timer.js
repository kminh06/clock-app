import React, { useState, useEffect } from 'react'

export default function Timer() {
  const defaultHr = 0;
  const defaultMin = 3;
  const defaultSec = 0;

  const [running, setRunning] = useState(false);
  let [hour, setHour] = useState(defaultHr);
  let [min, setMin] = useState(defaultMin);
  let [sec, setSec] = useState(defaultSec);

  function formatTime(val) {
    let value = val.toString();
    if (value.length < 2) {
      value = '0' + value;
    }
    return value;
  };

  function start() {
    setRunning(true);
  };

  function stop() {
    setRunning(false);
  }

  function reset() {
    setRunning(false);
    setHour(defaultHr);
    setMin(defaultMin);
    setSec(defaultSec);
  }

  function add(unit) {
    if (unit === sec && sec < 55) {
      setSec(sec + 5);
    } else if (unit === min && min < 59) { 
      setMin(min + 1)
    }
  }

  function subtract(unit) {
    if (unit === sec && sec > 0) {
      setSec(sec - 5);
    } else if (unit === min && min > 0) { 
      setMin(min - 1)
    }
  }
  
  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setSec(sec - 1);
        if (sec <= 0) {
          setMin(min - 1);
          setSec(59);
        }
        if (sec === 1 && min === 0) {
          stop();
        }
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, sec]);

  return (
    <div id='timer'>
      <p className="app-title">Timer</p>
      <div id='timer-display'>{min}<span className='time-unit'>m </span>{formatTime(sec)}<span className='time-unit'>s </span></div>
      <button onClick={() => add(min)}>Add Min</button>
      <button onClick={() => add(sec)}>Add Sec</button>
      <button onClick={() => subtract(min)}>Sub Min</button>
      <button onClick={() => subtract(sec)}>Sub Sec</button>
      <div id='button-container'>
        {running === false && (
          <button className='btn btn-primary' onClick={start}>START</button>
        )}
        {running === true && (
          <button className='btn btn-danger' onClick={stop}>STOP</button>
        )}
        <button className='btn btn-light' onClick={reset}>RESET</button>
      </div>
    </div>
  )
}
