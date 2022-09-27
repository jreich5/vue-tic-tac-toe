<script setup>
import { toRaw } from "vue";

const props = defineProps(["players"]);
</script>

<template>
  <section>
    <p>{{ props.players[0].name }} wins: {{ props.players[0].wins }}</p>
    <p>{{ props.players[1].name }} wins: {{ props.players[1].wins }}</p>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: space-between;
  width: 600px;
  margin: 0 auto;
  font-size: 2em;
}
</style>
