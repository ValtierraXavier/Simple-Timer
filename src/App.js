import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import StopWatch from './Components/StopWatch/StopWatch.jsx';
import Timer from './Components/Timer/Timer.jsx'

function App() {
  const [which, setWhich] = useState('Stopwatch')
  const period = useRef(null)
  const timerInt = useRef(null)
  
  return(
    <div className = 'App'>
      <Header which = {which} setWhich = {setWhich} period={period} timerInt ={timerInt} />
      {which === 'Stopwatch'?      
      <StopWatch period={period} />
      :which === 'Timer'?
      <Timer timerInt ={timerInt} />
      :
      <div>Welcome! The timer and stopWatch should be here but they arent...</div>
      }
    </div>
  )
  }

  export default App;