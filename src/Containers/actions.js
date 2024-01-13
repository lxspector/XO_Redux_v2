export const MAKE_MOVE = 'MAKE_MOVE';
export const RESET_GAME = 'RESET_GAME';

export const makeMove = (index, symbol) => ({
  type: MAKE_MOVE,
  index,
  symbol,
});

export const resetGame = () => ({
  type: RESET_GAME,
});
