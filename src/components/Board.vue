<script setup>
import Tile from "./Tile.vue";
const props = defineProps(["board"]);
const tiles = props.board;
</script>
<template>
  <div class="board">
    <Tile v-for="tile in tiles" :tile="tile" />
  </div>
</template>
<style scoped>
.board {
  width: 600px;
  height: 600px;
  border: 0.2em solid black;
  background: black;
  margin: auto;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 0.2em;
}
</style>
