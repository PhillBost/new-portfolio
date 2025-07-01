import { useState } from 'react'
import GreetingCard from './components/greeting-card'
import AboutMe from './components/aboutme'
import Portfolio from './components/portfolio'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="grid pb-6">
      <GreetingCard />
      <AboutMe />
      <Portfolio />
    </div>
  )
}

export default App
