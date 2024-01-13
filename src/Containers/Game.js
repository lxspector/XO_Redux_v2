import React, { useEffect, useState } from 'react';
import store from './index';
import { makeMove, resetGame } from './actions';
import Board from '../Layout/Board';

const Game = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setState(store.getState()));
    return unsubscribe;
  }, []);

  const handleMove = (index) => {
    if (!state.winner && !state.board[index]) {
      store.dispatch(makeMove(index, state.xIsNext ? 'X' : 'O'));
    }
  };

  const handleReset = () => {
    store.dispatch(resetGame());
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
