import React, { useState, useEffect } from 'react'

export default function Timer() {
  const [running, setRunning] = useState(false);
  let [min, setMin] = useState(3);
  let [sec, setSec] = useState(0);

  const [initMin, setInitMin] = useState();
  const [initSec, setInitSec] = useState();

  function formatTime(val) {
    let value = val.toString();
    if (value.length < 2) {
      value = '0' + value;
    }
    return value;
  };

  function start() {
    setRunning(true);
    setInitMin(min);
    setInitSec(sec);
  };

  function stop() {
    setRunning(false);
  }

  function reset() {
    setRunning(false);
    setMin(initMin);
    setSec(initSec);
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
