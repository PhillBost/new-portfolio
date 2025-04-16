import { useState } from 'react'
import GreetingCard from './components/greeting-card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="grid">
      <GreetingCard />
      <p>hi</p>
    </div>
  )
}

export default App
