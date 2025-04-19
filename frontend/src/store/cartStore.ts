import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as { id: number; name: string; price: number; quantity: number }[]
  }),
  actions: {
    addToCart(product: { id: number; name: string; price: number }) {
      const existing = this.items.find(item => item.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(id: number) {
      this.items = this.items.filter(item => item.id !== id)
    },
    updateQuantity(id: number, quantity: number) {
      const item = this.items.find(item => item.id === id)
      if (item && quantity > 0) {
        item.quantity = quantity
      }
    },
    clearCart() {
      this.items = []
    }
  },
  getters: {
    getItems: (state) => state.items
  },
  persist: true
})
