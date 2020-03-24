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
        //if < 0 stop -1
        setMinute (startMinutes <= 0 ? 0 :  startMinutes -1 )
    };

    const  minSec =()=>
    {
        // count down seconds, when seconds = 00 -> 59 && minute -1
        setSec (startSeconds  === 60 ? setMinute(startMinutes -1) : startSeconds -1);

    };


    const increment = (add)=>{
       setInterval(add,1000);
    };

    const stopIncrement = ()=>{

       clearInterval(increment)
    };

  return (

    <div className="App">
        <h2>Pomodoro Clock</h2>
        <Timer Minutes={startMinutes} Seconds={startSeconds}  />
        <button onClick={addMinute}>add Minute</button>
        <button onClick={minMinute}>Min minute</button>
        <button onClick={minSec}>start</button>
        <button onClick={stopIncrement}>stop</button>

    </div>
  );
}

export default App;
