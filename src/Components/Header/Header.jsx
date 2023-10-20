import React from 'react'
import './Header.css'

export default function Header ({which, setWhich, period, timerInt}) {

    const openApp = (e) =>{
        setWhich(prev => prev =e .target.name)
        clearIntervals()
        document.title = "Simple Timer"
      }
      const clearIntervals = () => {
        clearInterval(period.current)
        clearInterval(timerInt.current)
      }
return(
    <div className = 'Header'>
        <div className='navTitleDiv'>
            <p className='navTitle'>{`Simple ${which}`}</p>
        </div>
        <div className='appButtonDiv'>
            <button className = 'appButton' id = 'stopWatchButton' name = 'Stopwatch' onClick = {openApp} >Stopwatch</button>
            <button className = 'appButton' id = 'timerButton' name = 'Timer' onClick={openApp}>Timer</button>
        </div>
    </div>
)
}