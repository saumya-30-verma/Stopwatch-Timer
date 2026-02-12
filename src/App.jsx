import { useRef, useState } from 'react'
import './App.css'

function App() {
  const[time, setTime] = useState(0);
  const timerRef = useRef(null);

  function startTimer() {
   timerRef.current = setInterval(() => {
     setTime(time=>time+1)
   }, 100);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current= null;
  }


  function resetTimer() {
    stopTimer();
    setTime(0);
  }


  return (
    <>
      <div id="container">
        <h1>Stopwatch: {time} seconds</h1>

      <div className="buttons"> 
       <button onClick={startTimer}>
        Start
       </button>
       <br />


        <button onClick={stopTimer}>
          Stop
        </button>

<br />
        <button onClick={resetTimer}>
          Reset
        </button>
      </div>
        
      </div>
    </>
  )
}

export default App