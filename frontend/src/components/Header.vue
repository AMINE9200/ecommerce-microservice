<template>
    <header class="navbar is-primary">
      <div class="navbar-brand">
        <a class="navbar-item" href="/"> VueShop</a>
      </div>
      <div class="navbar-end mr-4 is-flex is-align-items-center">
        <router-link to="/cart" class="navbar-item button is-info is-light">
           Panier <span v-if="count > 0" class="ml-2 has-text-weight-bold">({{ count }})</span>
        </router-link>
        <template v-if="userStore.isLoggedIn">
          <div class="navbar-item">YO MANNNNNNN, {{ userStore.username }} </div>
          <div class="navbar-item">
            <button class="button is-light" @click="logout">Déconnexion</button>
          </div>
        </template>
        <template v-else>
          <div class="navbar-item">
            <router-link to="/login" class="button is-light">Connexion</router-link>
          </div>
        </template>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  import { useUserStore } from '../store/userStore'
  import { useCartStore } from '../store/cartStore'
  import { storeToRefs } from 'pinia'
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  
  const userStore = useUserStore()
  const cartStore = useCartStore()
  const router = useRouter()
  
  const { items } = storeToRefs(cartStore)
  const count = computed(() => items.value.reduce((acc, item) => acc + item.quantity, 0))
  
  function logout() {
    userStore.logout()
    router.push('/login')
  }
  </script>
  