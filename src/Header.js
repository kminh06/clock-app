import React from 'react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [time, updateTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      updateTime(date.toLocaleTimeString());
    }, 1);
  }, []);

  return (
    <div id="header">
      <div id="time" className="nav-items">{time}</div>
    </div>
  )
}
