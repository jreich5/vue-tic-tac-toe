<script setup>
import { usePlayersStore } from "../stores/players";
import { useGameStore } from "../stores/game";
import Wins from "../components/Wins.vue";
import Board from "../components/Board.vue";
import SignInPrompt from "../components/SignInPrompt.vue";
import TurnWin from "../components/TurnWin.vue";

const playerStore = usePlayersStore();
const gameStore = useGameStore();
const players = playerStore.players;
const board = gameStore.getBoard();

function resetGame() {
  gameStore.resetGame();
}
</script>
<template>
  <header>
    <h1 class="title is-2 has-text-centered my-5">Tic-Tac-Toe!</h1>
  </header>
  <main v-if="players[0].name !== '' && players[1].name !== ''">
    <TurnWin
      :isWon="gameStore.isWon"
      :playerName="players[gameStore.playerTurn - 1].name"
      :isCatsGame="gameStore.isCatsGame"
    />
    <Board :board="board" />
    <Wins :players="players" />
    <div v-if="gameStore.isWon" class="start-new-btn-div">
      <button
        class="button is-large is-success has-text-weight-bold is-rounded"
        @click="resetGame"
      >
        Start New Game
      </button>
    </div>
  </main>
  <main v-else>
    <SignInPrompt />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}
.start-new-btn-div {
  display: flex;
  justify-content: center;
}
</style>
