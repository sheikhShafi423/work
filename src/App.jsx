import { useState } from 'react'
import Home from './Component/Auth/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Home />
      </div>
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-blue-500">
          Tailwind Working
        </h1>
      </div>
      
    </>
  )
}

export default App
