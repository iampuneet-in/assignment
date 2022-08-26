<template>
  <section class="mt-16">
    <h2 class="pl-4 mb-2 font-extrabold">Best Rated</h2>
    <ul
      class="flex w-full snap-x snap-mandatory gap-4 overflow-x-scroll pb-6 before:w-[30vw] after:w-[30vw] after:shrink-0"
    >
      <card class="w-32 h-48" />
    </ul>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity'
import Card from './Card.vue'
export default {
  components: { Card },
  setup() {
    const show = ref({})
    const genre = ref('')

    return {
      show,
      genre,
      Card
    }
  }
}
</script>

<style scoped>
ul {
  scrollbar-color: #6969dd #e0e0e0;
  scrollbar-width: thin;
}
ul::-webkit-scrollbar {
  height: 1rem;
  cursor: grab;
}
ul::-webkit-scrollbar-track {
  background: none;
}
ul::-webkit-scrollbar-thumb {
  border: 5px solid transparent;
  border-radius: 999px;
  background-color: red;
  background-clip: content-box;
}
@media (max-width: 376px) {
  ul::-webkit-scrollbar {
    height: 0;
  }
}
</style>
