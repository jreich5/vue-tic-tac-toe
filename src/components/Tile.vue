<script setup>
import { useGameStore } from "../stores/game.js";

const props = defineProps(["tile"]);
const gameStore = useGameStore();

function createTileClasses() {
  let classes = "tile";
  if (props.tile.status !== "inactive" || gameStore.isWon) {
    classes += " active ";
    classes += " " + props.tile.status;
  }
  if (props.tile.status !== "inactive" && props.tile.status !== "active") {
    classes += " text-red";
  }
  return classes;
}

function tileClick() {
  // only click a tile if the game has not already been won
  if (!gameStore.isWon) {
    gameStore.clickTile(props.tile);
  }
}
</script>

<template>
  <div :class="createTileClasses()" @click="tileClick">
    {{ props.tile.text }}
  </div>
</template>

<style scoped>
.tile {
  background-color: PaleTurquoise;
  font-size: 8em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.text-red {
  color: red;
}

.horizontal {
  background: linear-gradient(
    180deg,
    PaleTurquoise 0% calc(50% - 5px),
    red calc(50% - 5px) calc(50% + 5px),
    PaleTurquoise calc(50% + 5px)
  );
}

.vertical {
  background: linear-gradient(
    90deg,
    PaleTurquoise 0% calc(50% - 5px),
    red calc(50% - 5px) calc(50% + 5px),
    PaleTurquoise calc(50% + 5px)
  );
}

.incline {
  background: linear-gradient(
    135deg,
    PaleTurquoise 0% calc(50% - 5px),
    red calc(50% - 5px) calc(50% + 5px),
    PaleTurquoise calc(50% + 5px)
  );
}

.decline {
  background: linear-gradient(
    225deg,
    PaleTurquoise 0% calc(50% - 5px),
    red calc(50% - 5px) calc(50% + 5px),
    PaleTurquoise calc(50% + 5px)
  );
}

.active {
  cursor: default;
}
</style>
