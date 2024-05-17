import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Request from './pages/Request'



function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Request/>
            
   </div>
  )
}

export default App
