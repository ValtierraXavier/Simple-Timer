import React, {useState} from 'react'
import './StopWatch.css'

export default function StopWatch ({period}) {
let  
        sec = 0,
        min = 0,
        hr = 0;
  const [isRunning, setIsRunning] = useState(false)
  const [seconds, setSeconds] = useState(sec)
  const [minutes, setMinutes] = useState(min)
  const [hours, setHours] = useState(hr)
  
  //function to count down time
  const tickTock = () => {
    //increment seconds by 1 display and format page title
    sec++; 
    setSeconds(prev => prev = sec < 10 ? '0' + sec: sec) 
    //reset seconds to 0 when they reach 59 and increment minute by 1 
    if(sec >= 59){
      sec = 0;
      min++;
      //reset minutes to 0 when they are 59 increment hour by 1
      setMinutes(prev => prev = min < 10 ? "0" + min: min);
      if(min >= 59){
        min = 0;
        hr++;
            setHours(prev => prev = hr < 10 ? "0" + hr: hr);
          }                    
        }
        document.title = (`Stopwatch: (${min < 10 ? "0" + min : min}m : ${sec < 10 ? "0" + sec : sec}s)`)
      }
      //function to start timer. 
      const startTimer = () => {
        setIsRunning(prev => prev = true)
        sec = seconds
        min = minutes
        hr = hours
        period.current = (setInterval(()=>{
          tickTock()}, 1000));
      }
      //function to pause timer/resume
      const pauseTimer = () => {
        clearInterval(period.current);
        setIsRunning(prev => prev = false)
      }
      
      const resetStopwatch = () => {
        clearInterval(period.current);
        setIsRunning(prev => prev = false)
        sec = 0; 
        min = 0;
        hr = 0;
        setMinutes(prev => prev = min);
        setSeconds(prev => prev = sec);
        setHours(prev => prev = hr);
        document.title = 'Simple Timer'
      }
      
  return (
      <div className ='stopWatch'>
        <div className ='stopWatchDisplay'>          
          <div className ='timeDisplay' id ='hours'>{hours === 0 ? '00' : hours}</div>:
          <div className ='timeDisplay' id ='minutes'>{minutes === 0 ? '00' : minutes}</div>:
          <div className ='timeDisplay' id ='seconds'>{seconds ===  0 ? '00' : seconds}</div>
        </div>
        <div className ='stopWatchButtons'>
          <button className ='stopWatchButton' id ='startButton' onClick={startTimer} disabled={isRunning} >Start</button>
          <button className ='stopWatchButton' id ='pauseButton' onClick={pauseTimer} disabled={!isRunning} >Pause</button>
          <button className ='stopWatchButton' id ='resetButton' onClick={resetStopwatch}>Reset</button>
        </div>
      </div>
        
    );
  }