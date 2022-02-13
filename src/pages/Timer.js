import React, { useState } from 'react';
import TimerEngine from './components/TimerEngine'
import TimerDisplay from './components/TimerDisplay'

export default function Timer() {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(5);
  const [sec, setSec] = useState(0);

  return (
    <TimerEngine hh={hour} mm={min} ss={sec} />
  )
}
