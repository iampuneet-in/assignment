<template>
 <section class="mt-16">
    <carousel />

    <carousel />

    <carousel />
 </section>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'

export default {
  components: { Carousel },
  setup() {
    const store = useStore()
    const shows = ref([])
    onMounted(async () => { 
      const response = await store.dispatch('get', {
        action: '/shows'
      });
      shows.value = response
    })
  }
}
</script>
