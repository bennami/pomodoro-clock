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
        //if < 0 stop -1
        setSec (startSeconds   - 1  )

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
        <button onClick={increment}>start</button>
        <button onClick={stopIncrement}>stop</button>

    </div>
  );
}

export default App;
