import './App.css'
import { Routes, NavLink, Route } from 'react-router';
import Clock from './css-module/Clock';
import Stopwatch from './css-module/Stopwatch';
import Timer from './css-module/Timer';

function App() {
  
  return (
    <>
    <div className='pages'>
  
      <NavLink to='/clock'>Clock</NavLink>
      <NavLink to='/stopwatch'>Stopwatch</NavLink>
      <NavLink to='/timer'>Timer</NavLink>

    </div>

    <Routes>
      
      <Route path="/clock" element={<Clock/>}></Route>
      <Route path="/stopwatch" element={<Stopwatch/>}></Route>
      <Route path="/timer" element={<Timer/>}></Route>

    </Routes>
    </>
  )
}

export default App
