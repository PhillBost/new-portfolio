import { useState } from 'react'
import GreetingCard from './components/greeting-card'
import AboutMe from './components/aboutme'
import Portfolio from './components/portfolio'
import { motion } from 'motion/react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="grid pb-6">
      <GreetingCard />
      <motion.div
          initial={{opacity: 0, scale: 0}}
          animate={{ opacity: 1, scale: 1}}
          transition={{
            duration: 0.4,
            scale: {type: "spring", visualDuration: 0.4, bounce: 0.5},
          }}
      >
          <AboutMe />
      </motion.div>
      <Portfolio />
    </div>
  )
}

export default App
