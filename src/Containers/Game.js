import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeMove, resetGame } from './actions';
import Board from '../Layout/Board';

const Game = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleMove = (index) => {
    if (!state.winner && !state.board[index]) {
      dispatch(makeMove(index, state.xIsNext ? 'X' : 'O'));
    }
  };

  const handleReset = () => {
    dispatch(resetGame());
  };

  let status;
  if (state.winner) {
    status = `Победитель: ${state.winner}`;
  } else {
    status = `Следующий ход: ${state.xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={state.board} onClick={handleMove} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <button onClick={handleReset}>Начать заново</button>
      </div>
    </div>
  );
};

export default Game;
