import React, { useRef, useState } from 'react';
import "./App.css";

function App() {
  
   const timerRef = useRef(null);
   const [seconds, setSeconds] = useState(0);

const startTimer = () => {
  if (!timerRef.current) {
  timerRef.current = setInterval(() => {
  setSeconds(prev => prev + 1);
  }, 1000);
 }
};
const stopTimer = () => {
 clearInterval(timerRef.current);
 timerRef.current = null;
 };
const reset  = () =>{
  clearInterval(timerRef.current);
 timerRef.current = null;
 setSeconds(0);
}

  return (
   <>
    <main className="stopwatch-page">
      <div className="stopwatch-card">
        <div className="stopwatch-icon">⏱</div>

        <p className="stopwatch-label">TIMEKEEPER</p>
        <h1 className="stopwatch-title">Stopwatch</h1>

        <p className="stopwatch-description">
          Every second counts. Make yours matter.
        </p>

        <div className="timer-circle">
          <div className="timer-inner">
            <span className="timer-value">
              {String(Math.floor(seconds / 3600)).padStart(2, '0')}:
              {String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')}:
              {String(seconds % 60).padStart(2, '0')}
            </span>
            <span className="timer-caption">HH : MM : SS</span>
          </div>
        </div>

        <div className="stopwatch-status">
          <span className="status-dot"></span>
          Ready to focus
        </div>

        <div className="stopwatch-buttons">
          <button className="timer-btn start-btn" onClick={startTimer}>
            <span>▶</span> Start
          </button>

          <button className="timer-btn stop-btn" onClick={stopTimer}>
            <span>Ⅱ</span> Stop
          </button>

          <button className="timer-btn reset-btn" onClick={reset}>
            <span>↻</span> Reset
          </button>
        </div>

        <div className="stopwatch-footer">
          <span>✦</span> Stay focused. Stay productive.
        </div>
      </div>
    </main>

   </>
  )
}

export default App
