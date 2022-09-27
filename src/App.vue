<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <div class="container is-max-desktop">
      <nav class="navbar">
        <div class="navbar-menu">
          <RouterLink class="navbar-item" to="/">Home</RouterLink>
          <RouterLink class="navbar-item" to="/game">Game</RouterLink>
          <RouterLink class="navbar-item" to="/about">About</RouterLink>
          <RouterLink class="navbar-item" to="/signin">Sign In</RouterLink>
        </div>
      </nav>
    </div>
    <div class="container is-max-desktop">
      <RouterView />
    </div>
  </div>
</template>

<style>
.wrapper {
}
</style>
