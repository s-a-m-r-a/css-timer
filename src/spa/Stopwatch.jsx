import { useState } from 'react';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [runtime, setRuntime] = useState(false);
  const [int, setInt] = useState(null);

  const actionBtn = () => {
    if (runtime) {
      clearInterval(int);
      setRuntime(false);
      alert(`Measured time: ${seconds} seconds`);
    } else {
      const id = setInterval(() => setSeconds(flag => 
        flag + 1), 1000);
      setInt(id);
      setRuntime(true);
    }
  };

  return (
    <div>
      <h1>{seconds} seconds</h1>
      <button onClick={actionBtn}>
        {runtime ? 'Stop' : 'Start'}
      </button>
    </div>
  );
}

export default Stopwatch;
