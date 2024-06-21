import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  function Square({id, value, onSquareClick}) {
    const isThisAWinningSquare = winningCombo.includes(id) ? true : false

    if(isThisAWinningSquare) {
      return(
        <button onClick={onSquareClick} className='cell green'>{value}</button>
      )
    } else {
      return(
        <button onClick={onSquareClick} className='cell'>{value}</button>
      )
    }
  }

  function Button({ onResetClick }){

    return(
      <button onClick={ onResetClick } className='reset-btn'>Reset Game</button>
    )


  }

// 
// 
// 
// 
// 
// game logic goes here
  function Board(){
    // a board is 9 cells, with 3 rows of 3 cells
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true)
    const [isGameOver, setGameOver] = useState(false)
    const [winningCombo, setWinningCombo] = useState(Array(3).fill(null))


// 
// 
// 
// 
// Check winner
    function checkIfWinner(squares){

      let winnerDeclared = false
    
      let currentLetter = null
      if(xIsNext == true){
        currentLetter = "X"
      } else {
        currentLetter = "O"
      }
      // console.log("current letter: ", currentLetter)
      
      const winningCombinations = [
        [0,1,2],
        [0,4,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6]
      ]

      let winningSet = null

      // console.log("squares: ", squares)
      const currentPlayerMoves = squares.map((move, idx) => { 
        if(move == currentLetter){
          return idx
        }
      }).filter( item => item !== undefined )

      winningCombinations.forEach((comboArr) => {
        let subsetTotal = 0
        currentPlayerMoves.forEach((move) => {
          if(comboArr.includes(move)){
            subsetTotal++
          }
        })
        if(subsetTotal == 3){
          winningSet = comboArr
          return winnerDeclared = true
        }
      })

      if(winnerDeclared == true){
        setGameOver(true)

        setWinningCombo(winningSet)
        // pass the winning combo along because React state is async
        gameOver(winningSet)
        // alert('winner winner fuck yo life')
      }
    }

// 
// 
// 
// 
// Highlight Winner
    function highlightWinner() {
      // console.log(squares)
      // highlight winning squares

    }

// 
// 
// 
// 
// Handle Click
    function gameOver(winning) {
      // winning is an array of 3 winning indexes

      // highlight winning combination
      highlightWinner(winning)

      // don't allow for more moves

      // maybe pulse the reset game button?

      // unhide winner div

    }


// 
// 
// 
// 
// Handle Click
    function handleClick(i){
      const leSquares = squares.slice()
        if(xIsNext == true){
          leSquares[i] = "X"
          setXisNext(false)
        } else{
          leSquares[i] = "O"
          setXisNext(true)
        }
        setSquares(leSquares)

        checkIfWinner(leSquares)
    }


// 
// 
// 
// 
// Handle Reset
    function handleReset(){

    }

    // }

// 
// 
// 
// 
// Winner winner container
    function WinnerWinner() {

      if(isGameOver) {
        return(
          <div className="winner-winner-container">
          <h1 className="winner-text">Winner Winner { xIsNext ? "O" : "X" }</h1>
          </div>
        )
      } else {
        return(
          <h1>Goodluck { xIsNext ? "X" : "O"}</h1>
        )
      }



    }


    return(
      <>
      <WinnerWinner />
      <div className="reset-btn-container">
        <Button onResetClick={ handleReset() } />
      </div>
        <div className="row r-1">
          <Square id={0} onSquareClick={()=> {handleClick(0)}} value={squares[0]} />
          <Square id={1} onSquareClick={()=> {handleClick(1)}} value={squares[1]}/>
          <Square id={2} onSquareClick={()=> {handleClick(2)}} value={squares[2]}/>
        </div>
        <div className="row r-2">
          <Square id={3} onSquareClick={()=> {handleClick(3)}} value={squares[3]} />
          <Square id={4} onSquareClick={()=> {handleClick(4)}} value={squares[4]} />
          <Square id={5} onSquareClick={()=> {handleClick(5)}} value={squares[5]} />
        </div>
        <div className="row r-3">
          <Square id={6} onSquareClick={()=> {handleClick(6)}} value={squares[6]} />
          <Square id={7} onSquareClick={()=> {handleClick(7)}} value={squares[7]} />
          <Square id={8} onSquareClick={()=> {handleClick(8)}} value={squares[8]} />
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
