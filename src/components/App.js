import React, {useState} from 'react';
import Timer from "./Timer";
import '../App.css';





function App() {

    const[startMinutes,  setCounter]  = useState(25);
    const[startSeconds,  setCount]  = useState(0);

    const increment =() =>
    {

        setCount(startSeconds  +1);

    };

    setInterval(increment,1000);
  return (

    <div className="App">
        <h2>Pomodoro Clock</h2>
        <Timer Minutes={startMinutes} Seconds={startSeconds}  />

        <button onClick={increment}>start</button>
    </div>
  );
}

export default App;
