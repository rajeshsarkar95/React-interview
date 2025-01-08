import {useState,useRef} from "react";

function Stopwatch(){
    const [time,setTime] = useState(0);
    const [running,setRunning] = useState(false);
    const intervalseRef  = useRef(null);

    const stateTimer = () => {
        if(!running){
            setRunning(true);
            intervalseRef.current = setInterval(()=>{
                setTime((prevTime) => prevTime + 1);
            },1000);
        }
    }

    const handleStopwatch =  () => {
        clearInterval(intervalseRef.current)
        setRunning(false);
    }

    const handleReset = () => {
        clearInterval(intervalseRef.current);
        setTime(0);
        setRunning(false)
    }
  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{time}</h2>
      <button onClick={stateTimer}>State</button>
      <button onClick={handleStopwatch}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Stopwatch
