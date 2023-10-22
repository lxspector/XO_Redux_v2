import React, { useState } from 'react'
import Board from '../Layout/Board'

function Game() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXIsNext] = useState(true)

  function handleClick(i) {
    const currentHistory = history.slice(0, stepNumber + 1)
    const current = currentHistory[currentHistory.length - 1]
    const squares = current.squares.slice()

    if (calculateWinner(squares) || squares[i]) {
      return
    }

    squares[i] = xIsNext ? 'X' : 'O'
    setHistory(currentHistory.concat([{ squares: squares }]))
    setStepNumber(currentHistory.length)
    setXIsNext(!xIsNext)
  }

  function restartGame() {
    setHistory([{ squares: Array(9).fill(null) }])
    setStepNumber(0)
    setXIsNext(true)
  }

  const current = history[stepNumber]
  const winner = calculateWinner(current.squares)

  let status
  if (winner) {
    status = `Winner: ${winner}`
  } else if (history.length === 10) {
    status = 'Draw!'
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <button onClick={restartGame}>Start Over</button>
      </div>
    </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export default Game
