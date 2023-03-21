import { useState } from 'react'
import './App.css'
import Courses from './compponents/Courses'
import Router from './Router'

function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div>
        <Router />
        <Courses />
        
      </div>
     
  )
}

export default App
