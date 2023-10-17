import React, {useState} from 'react';
import './App.css';

function App() {
  const [isRunning, setIsRunning] = useState(null)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  let sec = 0;
  let min = 0;
  let hr = 0;
  let interval;
  
  const selectionSpeed = (ms) => {
      return new Promise(
      resolve => {setTimeout(()=>{resolve()}, ms)}
    )
    }
    const startTimer = async() => {
      setIsRunning(prev => prev = true)
      interval =(()=>{setSeconds(prev => prev = sec++)}, 1000)
            
    }
  
  // const startTimer = async () => {
  //   setIsRunning(prev => prev = true)
  //   try{      
  //     for(let i = 0; i <= 60; i++){
  //         setSeconds(prev => prev = i)
  //         if(i === 60){
  //           i = 0;
  //           min += 1;
  //           setMinutes(prev => prev = min);
  //           if(min === 60){
  //             min = 0;
  //             hr += 1;
  //             setHours(prev => prev = hr)
  //           }
  //           if(isRunning == false){}
  //           }
        
  //       await selectionSpeed(1000);
  //     }    
  //   }catch(error){console.log(error.message)}
  // }
  
  const pause = () => {
    setIsRunning(prev => prev = false)
  }
  console.log(isRunning)
  return (
    <div className="App">
      {/* stopwatch div */}
      <section className='stopWatch'>
        <div className='stopWatchDisplay'>          
          <div className='timeDisplay' id ='hours'>{hours < 10?`0${hours}`:hours}</div>:
          <div className='timeDisplay' id ='minutes'>{minutes < 10?`0${minutes}`:minutes}</div>:
          <div className='timeDisplay' id ='seconds'>{seconds < 10?`0${seconds}`:seconds}</div>
        </div>
        <div className='stopWatchButtons'>
          <button className='stopWatchButton' id='startButton' onClick={startTimer}>Start</button>
          <button className='stopWatchButton' id='pauseButton' onClick={pause}>Pause</button>
          <button className='stopWatchButton' id='resetButton'>Reset</button>
        </div>
      </section>
        
    </div>
    );
  }

  export default App;
