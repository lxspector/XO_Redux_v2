// В вашем reducer.js
import { MAKE_MOVE, RESET_GAME } from './actions';

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
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
  winner: null,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_MOVE:
      const newBoard = state.board.slice();
      if (newBoard[action.index] || state.winner) {
        return state;
      }
      newBoard[action.index] = state.xIsNext ? 'X' : 'O';
      const winner = calculateWinner(newBoard);
      return {
        ...state,
        board: newBoard,
        xIsNext: !state.xIsNext,
        winner: winner,
      };

    case RESET_GAME:
      return initialState;

    default:
      return state;
  }
};

export default gameReducer;
