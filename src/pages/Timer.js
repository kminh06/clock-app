import React, { useState, useEffect } from 'react'

export default function Timer() {
  const [running, setRunning] = useState(false);
  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(0);
  const [initMin, setInitMin] = useState();
  const [initSec, setInitSec] = useState();
  const [hidden, setHidden] = useState("");
  const [action, setActionState] = useState(false);
  const [startBtn, setStartBtn] = useState("START");
  const [startBtnColor, setStartBtnColor] = useState("btn-primary");

  function formatTime(val) {
    let value = val.toString();
    if (value.length < 2) {
      value = '0' + value;
    }
    return value;
  };

  function start() {
    setRunning(true);
    if (startBtn == "START") {
      setInitMin(min);
      setInitSec(sec);
    }
    setHidden("hidden");
    setActionState(true);
  };

  function stop() {
    setRunning(false);
    setHidden();
    setStartBtn("RESUME");
    setStartBtnColor("btn-success");
  }

  function reset() {
    if (action == true) {
      setRunning(false);
      setHidden();
      setMin(initMin);
      setSec(initSec);
      setStartBtn("START");
      setStartBtnColor("btn-primary");
    }
  }

  function add(unit) {
    if (unit === "sec" && sec < 55) {
      setSec(sec + 5);
    } else if (unit === "min" && min < 59) { 
      setMin(min + 1);
    }
  }

  function subtract(unit) {
    if (unit === "sec" && sec > 0) {
      setSec(sec - 5);
    } else if (unit === "min" && min > 0) { 
      setMin(min - 1);
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
      <div className='change-row'>
        <span id='min' className={'change-button ' + hidden} onClick={() => add("min")}>+ 1</span>
        <span id='sec' className={'change-button ' + hidden} onClick={() => add("sec")}>+ 5</span>
      </div>
      <div id='timer-display'>{min}<span className='time-unit'>m </span>{formatTime(sec)}<span className='time-unit'>s</span></div>
      <div className='change-row'>
        <span id='min' className={'change-button ' + hidden} onClick={() => subtract("min")}>- 1</span>
        <span id='sec' className={'change-button ' + hidden} onClick={() => subtract("sec")}>- 5</span>
      </div>
      <div id='button-container'>
        {running === false && (
          <button className={'btn ' + startBtnColor} onClick={start}>{startBtn}</button>
        )}
        {running === true && (
          <button className='btn btn-danger' onClick={stop}>STOP</button>
        )}
        
        <button className='btn btn-light' onClick={reset}>RESET</button>
      </div>
    </div>
  )
}
