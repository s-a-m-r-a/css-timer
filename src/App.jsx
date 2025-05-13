import './App.css';
import {Routes, Route, Link } from 'react-router-dom';
import Clock from './spa/Clock';
import Stopwatch from './spa/Stopwatch';
import Timer from './spa/Timer';

function App() {
  return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Clock</Link>
          <Link to="/stopwatch" style={{ marginRight: '10px' }}>Stopwatch</Link>
          <Link to="/timer" style={{ marginRight: '10px' }}>Timer</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Clock />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </div>
  );
}

export default App;
