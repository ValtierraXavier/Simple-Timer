import React,{useState} from "react";
import './Timer.css'

export default function Timer () {
    const[adjustTime ,setAdjustTime] = useState(true)
    const[duration, setDuration]= useState(0)
    // const[minutes, setMinutes] = useState()

    const start = ()=>{
        setAdjustTime(prev => prev = false)
    }
    // console.log(duration)
    const setTime = () => {

    }
    return(
        <div className="Timer">
            {adjustTime?
                <input type = "number" className = 'countDown'onChange={(e)=>setDuration(prev => prev =e.target.value)} value = {duration}></input>
                :
                <div className = 'countDown'>{duration}</div>
            }
            
            <section className="actionButtons">
                <button className="timerActionButtons" id = 'timerStartButton' onClick={start}>Start</button>
                <button className="timerActionButtons" id = 'timerResetButton'>Reset</button>
            </section>
        </div>
    )
}