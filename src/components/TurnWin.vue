<script setup>
const props = defineProps(["isWon", "playerName", "isCatsGame"]);
</script>
<template>
  <h2 class="has-text-centered is-size-3 mb-5">
    <span v-if="props.isWon && props.isCatsGame">Cat's GAME!</span>
    <span v-else-if="props.isWon">{{ props.playerName }} WINS!!!</span>
    <span v-else>{{ props.playerName }}'s Turn</span>
  </h2>
</template>
<style scoped></style>
