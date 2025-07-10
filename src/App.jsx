import { useState } from 'react'
import GreetingCard from './components/greeting-card'
import AboutMe from './components/aboutme'
import Portfolio from './components/portfolio'
import { motion } from 'motion/react'
import SphereBackground from './SphereBackground'
import './App.css'
import { spring } from 'motion'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <SphereBackground/>
      <div className="grid relative pb-6  text-gray-300 z-10">
        <GreetingCard />
        <motion.div
            initial={{ y: "100%", opacity: 0, scale: 1}}
            animate={{ y: "0%", opacity: 1, scale: 1}}
            transition={{
              duration: 2,
              type: spring,
              stiffness: 50,
            }}
        >
            <AboutMe />
        </motion.div>
        <motion.div
            initial={{ y: "50%", opacity: 0, scale: 1}}
            whileInView={{ y: "0%", opacity: 1, scale: 1}}
            transition={{
              duration: 1,
              type: spring,
              stiffness: 50,
            }}
        >
            <Portfolio/>
        </motion.div>

          
        
      </div>
    </div>

  
  )


}

export default App
