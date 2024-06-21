import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  function Square({value, onSquareClick}) {
    // const [value, setState] = useState(null)

    // function handleClick(){
    //   if(value == null){
    //     setState({value})
    //   } else {
    //     alert("Pick another cell")
    //   }
    // }
    return(
        <button onClick={onSquareClick} className='cell'>{value}</button>
    )
  }

  function Row(){

  }

  // game logic goes here
  function Board(){
    // a board is 9 cells, with 3 rows of 3 cells
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true)
    let gameOver = false

    function handleClick(i){
      let currentLetter = "X"

      const leSquares = squares.slice()
      if(!gameOver){
        if(xIsNext){
          leSquares[i] = "S"
        }
        setSquares(leSquares)

      }

    }

    return(
      <>
        <div className="row r-1">
          <Square onSquareClick={()=> {handleClick(0)}} value={squares[0]} id="cell-1" />
          <Square onSquareClick={()=> {handleClick(1)}} value={squares[1]} id="cell-2" />
          <Square onSquareClick={()=> {handleClick(2)}} value={squares[2]} id="cell-3" />
        </div>
        <div className="row r-2">
          <Square onSquareClick={()=> {handleClick(3)}} value={squares[3]} id="cell-4" />
          <Square onSquareClick={()=> {handleClick(4)}} value={squares[4]} id="cell-5" />
          <Square onSquareClick={()=> {handleClick(5)}} value={squares[5]} id="cell-6" />
        </div>
        <div className="row r-3">
          <Square onSquareClick={()=> {handleClick(6)}} value={squares[6]} id="cell-7" />
          <Square onSquareClick={()=> {handleClick(7)}} value={squares[7]} id="cell-8" />
          <Square onSquareClick={()=> {handleClick(8)}} value={squares[8]} id="cell-9" />
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
