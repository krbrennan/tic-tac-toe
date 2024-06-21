import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  function Square() {
    const [value, setState] = useState(null)

    function handleClick(){
      if(value == null){
        setState("X")
      } else {
        alert("Pick another cell")
      }
    }
    return(
        <button onClick={handleClick} className='cell'>{value}</button>
    )
  }

  function Row(){

  }

  // game logic goes here
  function Board(){
    // a board is 9 cells, with 3 rows of 3 cells
    const [squares, setSquares] = useState(Array(9).fill(null))

    return(
      <>
        <div className="row r-1">
          <Square id="cell-1" />
          <Square id="cell-2" />
          <Square id="cell-3" />
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
    </>
    )
  }

  // game logic
    // clear the board
    // show whose turn it is (x goes first?)
    // allow user to click on spot
    // fill spot in with whoever's turn it is



  return (
    <>
      <div className="page-container">
        <div className="tic-tac-container">
         
         <Board />
        
        </div>
      </div>
    </>
  )
}

export default App
