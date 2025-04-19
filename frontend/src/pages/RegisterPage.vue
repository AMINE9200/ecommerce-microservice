<template>
  <section class="section">
    <div class="container">
      <h2 class="title">Inscription</h2>
      <form @submit.prevent="register">
        <div class="field">
          <label class="label">Nom d'utilisateur</label>
          <div class="control">
            <input class="input" v-model="username" required />
          </div>
        </div>
        <div class="field">
          <label class="label">Mot de passe</label>
          <div class="control">
            <input class="input" type="password" v-model="password" required />
          </div>
        </div>
        <button class="button is-primary" type="submit">S'inscrire</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

function register() {
  if (username.value && password.value) {
    alert(`Utilisateur ${username.value} inscrit avec succès !`)
    router.push('/login')
  }
}
</script>
