<template>
 <section class="mt-16">
   <carousel :items-to-show="5" :wrap-around="true">
     <slide v-for="slide in 10" :key="slide">
        <card />
    </slide>
    <template #addons>
      <navigation />
    </template>
   </carousel>
 </section>
</template>

<script>
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'
import { Carousel, Navigation, Slide } from "vue3-carousel";
import Card from '../components/Card.vue'

import "vue3-carousel/dist/carousel.css";
export default {
  components: { Carousel, Navigation, Slide, Card },
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

<style scoped>
.carousel__slide {
  padding: 10px;
}

.carousel__item {
  color: white;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>