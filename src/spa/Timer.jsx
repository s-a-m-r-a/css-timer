import { useState, useEffect } from 'react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [runtime, setRuntime] = useState(false);

  const actionBtn = () => {
    setRuntime(!runtime);
  };

  const addTimeBtn = (seconds) => {
    if (!runtime) {
      setTimeLeft(timeLeft + seconds);
    }
  };

  useEffect(() => {
    if (!runtime || timeLeft <= 0) return;

    const int = setInterval(() => {
      setTimeLeft(flag => {
        if (flag <= 1) {
          clearInterval(int);
          setRuntime(false);
          alert("Time's up!");
          return 0;
        }
        return flag - 1;
      });
    }, 1000);

    return () => clearInterval(int);
  }, [runtime, timeLeft]);

  return (
    <div>
      <h1>{timeLeft} seconds</h1>
      <button onClick={actionBtn}>
        {runtime ? 'Pause' : 'Start'}
      </button>
      
      {!runtime && (
        <div>
      <button onClick={() => addTimeBtn(5)}>+5 sec</button>
      <button onClick={() => addTimeBtn(60)}>+1 min</button>
      </div>
      )}
      
    </div>
  );
}

export default Timer;