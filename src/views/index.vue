<template>
  <header class="container mx-auto">
    <div class="grid">
      <h1 class="text-5xl mx-auto object-none">Vite Vue Tailwindcss starter</h1>
      <img
        class="mx-auto object-none"
        alt="Vue logo"
        src="../assets/logo.png"
      />
      <img
        class="mx-auto object-none"
        alt="Vue logo"
        src="../assets/tailwindcss.png"
      />
      <h1 class="mx-auto object-none">Test: {{ $store.state.test }}</h1>
      <h1 class="mx-auto object-none">
        <router-link to="/test">Test: router ok</router-link>
      </h1>
    </div>
  </header>
</template>

<script lang="ts"></script>

<style></style>
