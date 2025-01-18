import { useState } from 'react'
import './App.css'
import EventPlanner from './Components/EventPlanner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div>
          <EventPlanner/>
        </div>
      </div>
    </>
  )
}

export default App
