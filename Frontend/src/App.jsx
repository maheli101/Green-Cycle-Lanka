import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RequestDetails from './pages/RequestDetails'



function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <RequestDetails/>
            
   </div>
  )
}

export default App
