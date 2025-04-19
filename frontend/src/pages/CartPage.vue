<template>
  <section class="section">
    <div class="container">
      <h2 class="title">Panier</h2>
      <div v-if="items.length === 0">Aucun produit dans le panier</div>
      <div v-else>
        <div v-for="item in items" :key="item.id" class="box mb-4">
          <p><strong>{{ item.name }}</strong> - {{ item.price }} €</p>
          <p>Quantité :
            <input
              class="input is-small"
              type="number"
              min="1"
              v-model.number="item.quantity"
              @change="update(item.id, item.quantity)"
            />
          </p>
          <button class="button is-danger is-small mt-2" @click="remove(item.id)">
            Supprimer
          </button>
        </div>
        <p class="mt-4"><strong>Total :</strong> {{ total }} €</p>
        <button class="button is-success mt-4" @click="checkout">Valider la commande</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCartStore } from '../store/cartStore'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const { getItems } = storeToRefs(cartStore)
const items = getItems
const router = useRouter()

function remove(id: number) {
  cartStore.removeFromCart(id)
}

function update(id: number, quantity: number) {
  cartStore.updateQuantity(id, quantity)
}

const total = computed(() => {
  return items.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
})

function checkout() {
  console.log('Validation du panier...')
  cartStore.clearCart()
  router.push('/success')
}
</script>
