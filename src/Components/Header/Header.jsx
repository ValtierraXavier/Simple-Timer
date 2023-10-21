import React from 'react'
import './Header.css'

export default function Header ({which, setWhich, period, timerInt}) {

    const openApp = (e) =>{
        setWhich(prev => prev =e.target.name)
        clearIntervals()
        document.title = "Simple Timer"
      }
      const clearIntervals = () => {
        clearInterval(period.current)
        clearInterval(timerInt.current)
    }    
    
    const buttonHighlight = (e) => {
        e.target.style.border = 'solid white'
    }
    const buttonReturn = (e) => {
        if(which === e.target.name){
            e.target.style.border = 'solid black'
        }else{
            e.target.style.border = 'solid grey'
        }
    }
      
return(
    <div className = 'Header'>
        <div className='navTitleDiv'>
            <p className='navTitle'>{`Simple ${which}`}</p>
        </div>
        <div className='appButtonDiv'>
            {which === 'Stopwatch'?
                <button className = 'appButton' style={{border: 'solid black'}} id = 'stopWatchButton' name = 'Stopwatch' onClick = {openApp} onMouseEnter={buttonHighlight} onMouseLeave={buttonReturn} >Stopwatch</button>
                :
                <button className = 'appButton' style={{border: 'solid grey'}} id = 'stopWatchButton' name = 'Stopwatch' onClick = {openApp}  onMouseEnter={buttonHighlight} onMouseLeave={buttonReturn}>Stopwatch</button>
            }
            {which === 'Timer'?
                <button className = 'appButton' style={{border: 'solid black'}} id = 'timerButton' name = 'Timer' onClick={openApp}  onMouseEnter={buttonHighlight} onMouseLeave={buttonReturn}>Timer</button>
                :
                <button className = 'appButton' style={{border: 'solid grey'}} id = 'timerButton' name = 'Timer' onClick={openApp}  onMouseEnter={buttonHighlight} onMouseLeave={buttonReturn}>Timer</button>
            }
        </div>
    </div>
)
}