import React, {useState} from 'react';
import Timer from "./Timer";
import '../App.css';





function App() {

    const[startMinutes,  setMinute]  = useState(25);
    let [startSeconds,  setSec]  = useState(0);

    // add minutes
    const  addMinute =()=>{
       setMinute (startMinutes +1)
    };

    const  minMinute =()=>{
        //if < 0 stop -1
        setMinute (startMinutes <= 0 ? 0 :  startMinutes -1 )
    };

    const  addSec =()=>{

        let seconds;
        seconds =  setSec (startSeconds -- );
        // eslint-disable-next-line no-unused-expressions
         seconds <= 0 ? 59 : seconds -- ;

        increment();

    };


    const increment = ()=>{
       setInterval(addSec,1000);
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
        <button onClick={addSec}>start</button>
        <button onClick={stopIncrement}>stop</button>

    </div>
  );
}

export default App;
