import { useRef, useState, useEffect } from 'react'
import './App.css'

function App() {
  const[time, setTime] = useState(0);
  const timerRef = useRef(null);

  function startTimer() {
    if (timerRef.current !== null) return;
   timerRef.current = setInterval(() => {
     setTime(time=>time+1)
   }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current= null;
  }


  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  useEffect(() => {
    return ()=> clearInterval(timerRef.current)
  }, [])
  

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
