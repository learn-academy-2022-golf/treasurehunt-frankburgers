import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square.js"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const handleGamePlay = (index) => {
    let updatedBoard = [...board]
    updatedBoard[index] = "📚" 
    setBoard(updatedBoard)
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>

      <div className='gameboard'>

        {board.map((value, index) => {
          return (

            <Square 
              value={value} 
              key={index}
              index={index}
              handleGamePlay={handleGamePlay}
            />

          )
        })}
      </div>
    </>
  )
}

export default App
