import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
