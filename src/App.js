import React, {useState} from 'react';
import './App.css';
import StopWatch from './Components/StopWatch/StopWatch.jsx';
import Timer from './Components/Timer/Timer.jsx'

function App() {
  return(
    <div className = 'App'>
      <button className = 'appButton' id = 'timerButton'>Timer</button>
      <button className = 'appButton' id = 'stopWatchButton'>Stopwatch</button>
      {/* <StopWatch/> */}
      <Timer/>
    </div>
  )
  }

  export default App;
