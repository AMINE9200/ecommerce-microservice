<template>
  <section class="section">
    <div class="container">
      <h2 class="title">Connexion</h2>
      <div class="box">
        <div class="field">
          <label class="label">Nom d'utilisateur</label>
          <div class="control">
            <input class="input" type="text" v-model="username" placeholder="Nom d'utilisateur" />
          </div>
        </div>
        <div class="field">
          <label class="label">Mot de passe</label>
          <div class="control">
            <input class="input" type="password" v-model="password" placeholder="Mot de passe" />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-link" @click="login">Se connecter</button>
          </div>
        </div>
        <p v-if="message" class="mt-2">{{ message }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../store/userStore'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const message = ref('')
const userStore = useUserStore()
const router = useRouter()

function login() {
  if (username.value === 'admin' && password.value === '1234') {
    userStore.login(username.value)
    router.push('/')
  } else {
    message.value = "Identifiants incorrects"
  }
}
</script>
