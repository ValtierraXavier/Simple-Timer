import React, {useState, useRef} from 'react';
import './App.css';
import StopWatch from './Components/StopWatch/StopWatch.jsx';
import Timer from './Components/Timer/Timer.jsx'

function App() {
  const [applet, setApplet] = useState('StopWatch')
  const period = useRef(null)
  const timerInt = useRef(null)

  const clearIntervals = () => {
    clearInterval(period.current)
    clearInterval(timerInt.current)

  }
  
  const openApp = (e) =>{
    setApplet(prev => prev = e.target.name)
    clearIntervals()
    document.title = "Simple Timer"
  }
  
  return(
    <div className = 'App'>
      <button className = 'appButton' id = 'stopWatchButton' name = 'StopWatch' onClick = {openApp} >Stopwatch</button>
      <button className = 'appButton' id = 'timerButton' name = 'Timer' onClick={openApp}>Timer</button>
      {applet == 'StopWatch'?      
      <StopWatch period={period} />
      :applet == 'Timer'?
      <Timer timerInt ={timerInt} />
      :
      <div>Welcome! The timer and stopWatch should be here but they arent...</div>
      }
    </div>
  )
  }

  export default App;
