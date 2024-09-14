import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Site da Bruna</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Eventualmente vai ta tudo bonito
        </p>
      </div>
      <p className="read-the-docs">
        Clique aqui para nada acontecer       
      </p>
    </>
  )
}

export default App
