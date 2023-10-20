import React, {useState, useRef} from 'react';
import './App.css';
import StopWatch from './Components/StopWatch/StopWatch.jsx';
import Timer from './Components/Timer/Timer.jsx'

function App() {
  const [applet, setApplet] = useState('Timer')
  
  const openApp = (e) =>{
    setApplet(prev => prev = e.target.name)
  }
  
  return(
    <div className = 'App'>
      <button className = 'appButton' id = 'stopWatchButton' name = 'StopWatch' onClick = {openApp} >Stopwatch</button>
      <button className = 'appButton' id = 'timerButton' name = 'Timer' onClick={openApp}>Timer</button>
      {applet == 'StopWatch'?      
      <StopWatch  />
      :applet == 'Timer'?
      <Timer />
      :
      <div>Loading</div>
      }
    </div>
  )
  }

  export default App;
