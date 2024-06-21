import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  function Square() {
    const [value, setState] = useState(null)

    function handleClick(){
      setState("X")
    }
    return(
        <button onClick={handleClick} className='cell'>{value}</button>
    )
  }

  // game logic goes here


  // game logic
    // clear the board
    // show whose turn it is (x goes first?)
    // allow user to click on spot
    // fill spot in with whoever's turn it is



  return (
    <>
      <div className="page-container">
        <div className="tic-tac-container">
          <div className="row r-1">
            <Square />
            <Square />
            <Square />
          </div>
          <div className="row r-2">
            <Square />
            <Square />
            <Square />
          </div>
          <div className="row r-3">
            <Square />
            <Square />
            <Square />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
