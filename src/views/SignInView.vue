<script setup>
import { usePlayersStore } from "../stores/players";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const store = usePlayersStore();

const p1Name = ref("");
const p2Name = ref("");
const router = useRouter();

function updateNames() {
  store.setName(p1Name, 1);
  store.setName(p2Name, 2);
  router.push("/game");
}
</script>

<template>
  <main class="container">
    <h1 class="title is-2 text-center has-text-centered my-5">
      Please Sign In
    </h1>
    <p class="my-2">
      <em>Player 1 is always x's and player 2 is always o's.</em>
    </p>
    <form @submit.prevent="updateNames">
      <div>
        <input
          id="p1-name"
          type="text"
          placeholder="Enter player 1 name"
          v-model="p1Name"
          class="input my-2"
        />
      </div>
      <div>
        <input
          id="p2-name"
          type="text"
          placeholder="Enter player 2 name"
          v-model="p2Name"
          class="input my-2"
        />
      </div>
      <div class="has-text-centered">
        <button
          :disabled="p1Name === '' || p2Name === ''"
          class="button is-primary is-medium my-2"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
  </main>
</template>

<style scoped></style>
