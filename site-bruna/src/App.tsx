import { useState } from 'react'
import './App.css'
import Header from './componentes/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
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
