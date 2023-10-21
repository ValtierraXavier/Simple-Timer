import React,{useEffect, useState} from "react";
import './Timer.css'

export default function Timer ({timerInt}) {
    let sec;
    let min = 0;
    const[isRunning, setIsRunning] = useState(false);
    const[adjustTime ,setAdjustTime] = useState(true);
    const[duration, setDuration] = useState(0);
    const[seconds, setSeconds] = useState(0);
    const[minutes, setMinutes] = useState(0);
    
    //Start and initialize timer.
    const startTimer = ()=>{
        setAdjustTime(prev => prev = false) 
        setIsRunning(prev => prev = true)
        const totalSeconds = duration * 60;
        //if duration isnt a whole number set seconds to the remainder
        sec = Math.round((duration % 1) * 60)
        min = Math.floor(duration - (duration % 1))
        //if min is a less than 1 and a decimal then format
        if(min < 1 && min > 0){
            min = 0
            sec = Math.round(totalSeconds)
        }
        setSeconds(prev => prev = sec)
        setMinutes(prev => prev = min)
            timerInt.current = setInterval(countDown, 1000)
    };
    //return all values to zero
    const resetTimer = () => {
        clearInterval(timerInt.current);
        setIsRunning(prev => prev = false)
        setAdjustTime(prev => prev = true);
        setSeconds( prev => prev = 0);
        setDuration(prev => prev = 0);
        setTimeout(()=>{document.title = 'Simple Timer'}, 50);
    };
    //clear interval and set new duration
    const pauseTimer = () => {
        if(isRunning  === true){            
            clearInterval(timerInt.current)
            setIsRunning(prev => prev = false)
            document.title = 'Timer Paused'
            setDuration(prev => prev = (minutes + (seconds / 60)))
        }else {return}
    }

    //timer decrement
    const countDown = () => {
        //run this when timer has ended
        if(sec <= 0 && min <= 0){
            resetTimer();
        //run this if duration is greater than 1 and a whole number 
        }else if( sec <= 0 && min > 0 ){
            min--
            setMinutes(prev => prev = min)
            //reset seconds to 0
            if(sec === 0){
                sec = 60
                setSeconds(prev => prev = sec)
            }
        } 
        //run this if duration is greater than 1 and NOT a whole number
        if(sec > 0 && min >= 0){
            if(sec === 0){
                sec = 59
                setSeconds(prev => prev = sec)
                min--
                setMinutes(prev => prev = min)
            }
            sec--
            setSeconds(prev => prev = sec)   
        } 
        document.title = `Timer: (${min < 10 ? '0' + min : min}m : ${sec < 10 ? '0' + sec : sec}s)`   
    };

    useEffect(() => {
        const input = document?.getElementById('countDown')
        input?.focus()
    },[isRunning])

    return(
        <div className="Timer">
            {/* <div className='timerLabel'>minutes</div> */}
            {adjustTime?
                <div className ='timeDiv' id='adjustable' >
                    <input type = "number" className = 'countDown' id = 'countDown' onChange={(e)=>setDuration(prev => prev =e.target.value)} value = {duration}></input>
                    <label className = "timeLabel" id = "minuteslabel">minutes</label>
                </div>
                :
                <div className ='timeDiv' id='nonAdjustable'>
                    <div className = 'unitDiv' id = 'minutesDiv'>
                        <div className = 'minutesCountDown'>{minutes < 10 ?'0' + minutes : minutes}</div>
                        <label className = 'timeLabel' id = 'minuteslabel' >minutes</label>
                    </div>
                    <div className="unitDiv" id = 'colonDiv'>:</div>
                    <div className = 'unitDiv' id = 'secondsDiv'>
                        <div className = 'secondsCountDown'>{seconds < 10 ? '0' + seconds : seconds}</div>
                        <label className = 'timeLabel' id = 'secondslabel' >seconds</label>
                    </div>
                </div>
            }
            <section className="actionButtons">
                <button className="timerActionButtons" id = 'timerStartButton' disabled = {isRunning}  onClick = {startTimer}>Start</button>
                <button className="timerActionButtons" id = 'timerpauseButton' disabled = {!isRunning} onClick = {pauseTimer}>Pause</button>
                <button className="timerActionButtons" id = 'timerResetButton' onClick = {resetTimer}>Reset</button>
            </section>
        </div>
    )
}