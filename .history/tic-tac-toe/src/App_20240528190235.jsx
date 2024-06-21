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
            <div className="cell"><span>1</span></div>
            <div className="cell"><span>2</span></div>
            <div className="cell"><span>3</span></div>
          </div>
          <div className="row r-2">
            <div className="cell"><span>4</span></div>
            <div className="cell"><span>5</span></div>
            <div className="cell"><span>6</span></div>
          </div>
          <div className="row r-3">
            <div className="cell"><span>7</span></div>
            <div className="cell"><span>8</span></div>
            <div className="cell"><span>9</span></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
