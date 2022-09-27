<script setup>
import { RouterLink } from "vue-router";
import SignInPromptVue from "../components/SignInPrompt.vue";
import SignInPrompt from "../components/SignInPrompt.vue";
</script>

<template>
  <main>
    <header>
      <h1 class="title is-1 has-text-centered">
        Welcome to the Vue Tic-Tac-Toe Game!
      </h1>
      <SignInPrompt />
    </header>
  </main>
</template>

<style scoped>
main {
  position: relative;
  top: 10em;
}
</style>
