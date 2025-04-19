<template>
    <div class="columns is-multiline">
      <div class="column is-one-third" v-for="product in products" :key="product.id">
        <div class="box">
          <h3 class="title is-5">{{ product.name }}</h3>
          <p>{{ product.price }} €</p>
          <button class="button is-primary mt-2" @click="add(product)">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useCartStore } from '../store/cartStore'
  
  const cartStore = useCartStore()
  
  const products = ref([
    { id: 1, name: 'Produit A', price: 10 },
    { id: 2, name: 'Produit B', price: 20 },
    { id: 3, name: 'Produit C', price: 30 }
  ])
  
  function add(product: any) {
    cartStore.addToCart(product)
  }
  </script>
  