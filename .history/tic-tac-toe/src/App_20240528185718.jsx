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
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
          </div>
          <div className="row r-2">
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
          </div>
          <div className="row r-3">
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
