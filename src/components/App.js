import React, {useState} from 'react';
import Timer from "./Timer";
import '../App.css';

function App() {

    const[startMinutes,  setMinute]  = useState(25);
    const [startSeconds,  setSec]  = useState(0);

    // add minutes
    const  addMinute =()=>{
       setMinute (startMinutes +1)
    };

    const  minMinute =()=>{
        //if < 0 stop -1. one 0 because you are adding it in the prop
        setMinute (startMinutes <= `00` ? `0` :  startMinutes -1  )
    };

    const  minSec =()=>{
        //this doesnt work yet, so had to write it as separate statements
        /*setSec (startSeconds  === 0 ? 59 : startSeconds -1 && startSeconds === 59 ? setMinute(startMinutes -1) && startSeconds -1  );*/

        //count down seconds
        setSec (startSeconds === 0  ?  59 : startSeconds -1 );

        //check if sec = 59 then minus one minute
        if(startSeconds === 59){

          setMinute(startMinutes -1);

        }

    };

    //this doesnt work properly, cannot figure out why
    const startTimer = ()=>{
       setInterval(minSec,1000);

    };

    const stopIncrement = ()=>{

       clearInterval(startTimer)
    };

  return (

    <div className="App">
        <h2>Pomodoro Clock</h2>
        <Timer Minutes={startMinutes} Seconds={startSeconds}  />
        <button onClick={addMinute}>add Minute</button>
        <button onClick={minMinute}>Min minute</button>
        <button onClick={startTimer}>start</button>
        <button onClick={stopIncrement}>stop</button>
    </div>
  );
}

export default App;
