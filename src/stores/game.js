import { reactive, ref, computed } from "vue";
import { defineStore } from "pinia";
import { checkForWin } from "../game-logic";
import { usePlayersStore } from "./players";

function createStartingBoard() {
  const boardSetup = [];
  for (let i = 1; i <= 9; i += 1) {
    boardSetup.push({
      number: i,
      status: "inactive", // ['inactive', 'active', '--win', '|-win', '/-win', '\-win']
      text: "", // ['', 'X', 'O']
    });
  }
  return boardSetup;
}

export const useGameStore = defineStore("game", () => {
  const playerStore = usePlayersStore();

  // STATE

  let board = reactive(createStartingBoard());
  let isWon = ref(false);
  let playerTurn = ref(1);
  let isCatsGame = ref(false);

  // GETTERS

  function getBoard() {
    return board;
  }

  function getIsWon() {
    return isWon.value;
  }

  function getPlayerTurn() {
    return playerTurn.value;
  }

  // ACTIONS

  function clickTile(tile) {
    // update tile object based on current state of tile and playerTurn
    if (tile.status === "active") return;
    board[tile.number - 1].text = playerTurn.value === 1 ? "X" : "O";
    board[tile.number - 1].status = "active";
    const possibleWin = checkForWin(board, playerTurn.value, tile);
    if (possibleWin && possibleWin.orientation !== "cats") {
      updateBoardForWin(possibleWin);
      isWon.value = true;
      playerStore.increaseWins(playerTurn.value);
    } else if (possibleWin && possibleWin.orientation === "cats") {
      isWon.value = true;
      isCatsGame.value = true;
    } else {
      playerTurn.value = ((playerTurn.value + 2) % 2) + 1;
    }
    // update board state
    // run through game logic util to determine possible win conditions and update board accordingly
  }

  function updateBoardForWin({ tiles, orientation }) {
    for (let tile of tiles) {
      board[tile.number - 1].status = orientation;
    }
  }

  function resetGame() {
    Object.assign(board, createStartingBoard());
    isWon.value = false;
    playerTurn.value = 1;
    isCatsGame.value = false;
  }

  return {
    isWon,
    playerTurn,
    isCatsGame,
    getBoard,
    getIsWon,
    getPlayerTurn,
    clickTile,
    resetGame,
  };
});
