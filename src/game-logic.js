const wins = {
  horizontal: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  vertical: [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ],
  decline: [[1, 5, 9]],
  incline: [[7, 5, 3]],
};
export function checkForWin(board, playerTurn, tile) {
  if (checkBoardForCatsGame(board)) {
    return {
      tiles: [],
      orientation: "cats",
    };
  }

  const keys = Object.keys(wins);

  for (let key of keys) {
    for (let win of wins[key]) {
      if (win.includes(tile.number)) {
        const winCheck = checkBoardForWinCondition(board, win, tile.text, key);
        if (winCheck.winTiles) {
          return {
            tiles: winCheck.winTiles,
            orientation: winCheck.orientation,
          };
        }
      }
    }
  }
  return false;
}

function checkBoardForCatsGame(board) {
  const boardTiles = board.filter((boardTile) => boardTile.text === "");
  return boardTiles.length === 0;
}

function checkBoardForWinCondition(board, win, character, key) {
  const possibleWinTiles = board.filter(
    (boardTile) =>
      win.includes(boardTile.number) && boardTile.text === character
  );
  return possibleWinTiles.length === 3
    ? { winTiles: possibleWinTiles, orientation: key }
    : {};
}
