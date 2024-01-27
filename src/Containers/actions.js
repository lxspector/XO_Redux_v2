export const makeMove = (index, symbol) => {
  return {
    type: 'MAKE_MOVE',
    index,
    symbol,
  };
};

export const resetGame = () => {
  return {
    type: 'RESET_GAME',
  };
};
