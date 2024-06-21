import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  function Square() {
    return(
      <div className="cell"><span>1</span></div>
    )
  }

  function Row(){

      for (let index = 0; index < 3; index++) {
        return Square
      }
  
  }

  function Board(){
    for (let index = 0; index < 3; index++) {
      return Row()
    }

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
          <Board />
          {/* <div className="row r-1">
           
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
          </div> */}
        </div>
      </div>
    </>
  )
}

export default App
