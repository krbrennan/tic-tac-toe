import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="page-container">
        <div className="tic-tac-container">
          <div className="row r-1">
            <div className="cell">1</div>
            <div className="cell">2</div>
            <div className="cell">3</div>
          </div>
          <div className="row r-2">
            <div className="cell">4</div>
            <div className="cell">5</div>
            <div className="cell">6</div>
          </div>
          <div className="row r-3">
            <div className="cell">7</div>
            <div className="cell">8</div>
            <div className="cell">9</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
