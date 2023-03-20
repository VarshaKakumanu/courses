import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Courses from './compponents/Courses'

function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div>
        <Courses />
      </div>
     
  )
}

export default App
