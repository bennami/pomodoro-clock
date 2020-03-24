import React from 'react';
import Timer from "./Timer";
import '../App.css';



const time = new Date().toLocaleTimeString();

function App() {
  return (

    <div className="App">
        <h2>Pomodoro Clock</h2>
   <Timer>{time}</Timer>
    </div>
  );
}

export default App;
