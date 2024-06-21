import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  function Square() {
    const [value, setState] = useState(null)
    return(
      <div className="cell">
        <Square  onClick={handleClick} className={'cell cell-'+index} />
      </div>
    )
  }

  // function Row(){
  //   const squares = []
    
  //   for (let index = 0; index < 3; index++) {
  //     squares.push(<Square  onClick={handleClick} className={'cell cell-'+index} />) 
  //   }
  //   return squares
  // }

  function Board(){
    for (let index = 0; index < 3; index++) {
      return Row()
    }

  }

  function handleClick(){
    console.log("poop")
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
           <Row />
          </div>
          <div className="row r-2">
            <Row />
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
