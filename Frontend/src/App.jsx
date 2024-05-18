import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PickupStatus from './pages/PickupStatus'



function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <PickupStatus/>
            
   </div>
  )
}

export default App
