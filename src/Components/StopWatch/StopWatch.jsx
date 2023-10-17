import React, {useState} from 'react'
import './StopWatch.css'

export default function StopWatch () {
let  
        sec = 0,
        min = 0,
        hr = 0;
  const [isRunning, setIsRunning] = useState(false)
  const [seconds, setSeconds] = useState(sec)
  const [minutes, setMinutes] = useState(min)
  const [hours, setHours] = useState(hr)
  const [period, setPeriod] = useState();
  
  

    
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
        document.title = (`${min < 10 ? "0" + min : min}: ${sec < 10 ? "0" + sec : sec}`)
    }
  //function to start timer. 
    const startTimer = () => {
      sec = seconds
      min = minutes
      hr = hours
      setPeriod(setInterval(tickTock, 1000));
    }
//function to pause timer/resume
    const pauseTimer = () => {
        clearInterval(period);
    }

    const resetTimer = () => {
        clearInterval(period);
        sec = 0; 
        min = 0;
        hr = 0;
        setMinutes(prev => prev = min);
        setSeconds(prev => prev = sec);
        setHours(prev => prev = hr);
    }
  
  return (
      <div className ='stopWatch'>
        <div className ='stopWatchDisplay'>          
          <div className ='timeDisplay' id ='hours'>{hours == 0 ? '00' : hours}</div>:
          <div className ='timeDisplay' id ='minutes'>{minutes == 0 ? '00' : minutes}</div>:
          <div className ='timeDisplay' id ='seconds'>{seconds ==  0 ? '00' : seconds}</div>
        </div>
        <div className ='stopWatchButtons'>
          <button className ='stopWatchButton' id ='startButton' onClick={startTimer}>Start</button>
          <button className ='stopWatchButton' id ='pauseButton' onClick={pauseTimer}>Pause</button>
          <button className ='stopWatchButton' id ='resetButton' onClick={resetTimer}>Reset</button>
        </div>
      </div>
        
    );
  }