import React,{useState} from "react";
import './Timer.css'

export default function Timer () {
    let sec, secs;
    let min = 0;
    const[adjustTime ,setAdjustTime] = useState(true)
    const[duration, setDuration] = useState(0)
    const[timerInterval, setTimerInterval] = useState(null)
    const[seconds, setSeconds] = useState(0)
    const[minutes, setMinutes] = useState(0)
    const doneArr =['Timer', 'Done!!']

    const doneTiming =(ms) => {
        return new Promise(
            resolve=>{setTimeout(()=>{resolve()},ms
        )})
    }

    const startTimer = ()=>{
        resetTimer();
        setAdjustTime(prev => prev = false) 
        const totalSeconds = duration * 60;
        // const diff = 0
        sec = 0
        min = duration
        setMinutes(prev => prev = min)
        setSeconds(prev => prev = sec)
        setTimerInterval(setInterval(countDown, 1000))
    } 

    const done = () => {  
        clearInterval(timerInterval)
        setAdjustTime(prev => prev = true)
    }

    const countDown = () => {
        if(sec <= 0 && min <= 0){
            resetTimer();
            return
        }else if( sec <= 0 && min > 0 ){
            min--
            setMinutes(prev => prev = min)
            if(sec == 0){
                sec = 60
                setSeconds(prev => prev = sec)
            }
            if(sec == 0 && min == 0){
                resetTimer()
                return
            }
        } 
        if(sec > 0 && min >= 0){
            if(sec == 0){
                sec = 59
                setSeconds(prev => prev = sec)
                min--
                setMinutes(prev => prev = min)
            }
            sec--
            setSeconds(prev => prev = sec)
            if(sec == 0 && min == 0){
                resetTimer()
                return
            }
        } 
        if(sec > 0 && min < 1 && min > 0){
            min = 0 ;
            setMinutes(prev => prev = min)
            sec--
            setSeconds(prev => prev = sec)
            if(sec == 0 && min == 0){
                resetTimer()
                return
            }
           
        } 
        if(sec == 0 && min == 0){
            resetTimer()
            return
        }       
    }

    const resetTimer = () => {
        console.log('clear')
        clearInterval(timerInterval);
        sec = 0;
        min = 0;
        setSeconds( prev => prev = sec);
        setDuration(prev => prev = min);
        setAdjustTime(prev => prev = true);
        document.title = 'Simple Timer';
    }

    return(
        <div className="Timer">
            {/* <div className='timerLabel'>minutes</div> */}
            {adjustTime?
                <div className ='timeDiv' id='adjustable' >
                    <label className = "timeLabel" id = "minuteslabel">minutes</label>
                    <input type = "number" className = 'countDown'onChange={(e)=>setDuration(prev => prev =e.target.value)} value = {duration}></input>
                </div>
                :
                <div className ='timeDiv' id='nonAdjustable'>
                    <div className = 'minutesDiv'>
                        <label className = 'timeLabel' id = 'minuteslabel' >minutes</label>
                        <div className = 'minutesCountDown'>{minutes}</div>
                    </div>
                    <div className = 'secondsDiv'>
                        <label className = 'timeLabel' id = 'secondslabel' >seconds</label>
                        <div className = 'secondsCountDown'>{seconds}</div>
                    </div>
                </div>
            }
            
            <section className="actionButtons">
                <button className="timerActionButtons" id = 'timerStartButton' onClick = {startTimer}>Start</button>
                <button className="timerActionButtons" id = 'timerResetButton' onClick = {resetTimer}>Reset</button>
            </section>
        </div>
    )
}