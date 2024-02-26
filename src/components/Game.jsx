import React, { useState } from 'react'

import './Game.css'
import Board from './Board'
import { calculateWinner } from '../functiongame'

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const winner = calculateWinner(board)

  const handleClick = (index) => {
    const boardCopy = [...board]
    if(winner || boardCopy[index]) return 
    boardCopy[index] = xIsNext ? 'X' :'O'
    setBoard(boardCopy)
    setXIsNext(!xIsNext)
  }

  const startNewGame = () => {
    return (
      <button className='start__btn' onClick={() => setBoard(Array(9).fill(null))}> Заново </button>
    )
  }

  return (
    <div className='wrapper'>
      { startNewGame() }
      <Board squares={board} click={handleClick}/>
      <p className='info'>
        { winner ? 'Победа ' + winner : 'Сейчас ходит ' + (xIsNext ? 'X' : 'O') }
      </p>
    </div>
  )
}

export default Game
