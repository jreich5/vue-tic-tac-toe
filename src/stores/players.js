import { reactive, toRaw } from "vue";
import { defineStore } from "pinia";

export const usePlayersStore = defineStore("players", () => {
  const players = reactive([
    {
      id: 1,
      name: "",
      wins: 0,
    },
    {
      id: 2,
      name: "",
      wins: 0,
    },
  ]);

  function getPlayerById(id) {
    return players[id - 1];
  }

  function getPlayers() {
    return players;
  }

  function setName(name, id) {
    players[id - 1].name = name;
    players[id - 1].wins = 0;
  }

  function increaseWins(id) {
    players[id - 1].wins++;
  }

  return { players, setName, getPlayerById, getPlayers, increaseWins };
});
