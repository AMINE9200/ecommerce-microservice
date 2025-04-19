<template>
    <section class="section">
      <div class="container has-text-centered">
        <h1 class="title">Commande validée !</h1>
        <p class="subtitle">Merci pour votre achat</p>
        <router-link to="/" class="button is-primary mt-4">Retour à l'accueil</router-link>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  .section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
  }
  </style>
  