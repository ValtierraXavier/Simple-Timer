import React,{useState} from "react";
import './Timer.css'

export default function Timer () {
    let sec = 0;
    let min = 0;
    const[adjustTime ,setAdjustTime] = useState(true)
    const[duration, setDuration] = useState(0)
    const[timerInterval, setTimerInterval] = useState(null)
    const[seconds, setSeconds] = useState(null)
    const doneArr =['Timer', 'Done!!']
    // const[minutes, setMinutes] = useState()

    const doneTiming =(ms) => {
        return new Promise(
            resolve=>{setTimeout(()=>{resolve()},ms
        )})
    }

    const startTimer = ()=>{
        setAdjustTime(prev => prev = false) 
        sec = duration * 60
        setTimerInterval(setInterval(countDown, 1000))
    } 

    const doneTitle = async () => {
        for(let i = 0 ; i < doneArr.length; i++){ 
            try{            
                await doneTiming(500);
                if(i === doneArr.length){
                    i = 0
                }
                document.title = doneArr[i]
            }catch(error){console.log(error.message)}
        }
    }

    const done = async () => {  
        clearInterval(timerInterval)
        doneTitle()
    }
    const countDown = () => {
        if(sec <= 0){
           done();
        }
        sec--
        setSeconds(prev => prev = sec < 0 ? 0 : sec)
    }

    const resetTimer = () => {
         
    }

    return(
        <div className="Timer">
            {adjustTime?
                <input type = "number" className = 'countDown'onChange={(e)=>setDuration(prev => prev =e.target.value)} value = {duration}></input>
                :
                <div className = 'countDown'>{seconds}</div>
            }
            
            <section className="actionButtons">
                <button className="timerActionButtons" id = 'timerStartButton' onClick = {startTimer}>Start</button>
                <button className="timerActionButtons" id = 'timerResetButton' onClick = {resetTimer}>Reset</button>
            </section>
        </div>
    )
}