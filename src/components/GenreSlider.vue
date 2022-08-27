<template>
 <h2 class=" text-4xl font-bold">{{ genre }}</h2>
  <carousel :items-to-show="5" :wrap-around="true">
    <slide v-for="(show, index) in shows" :key="`${show.id}-${index}`">
      <card :show="show"  />
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import Card from '@/components/Card.vue'

import 'vue3-carousel/dist/carousel.css'
export default {
  components: { Carousel, Navigation, Slide, Card },
  props: {
    shows: {
      type: Object,
      required: true
    },
    genre: {
      type: String,
      required: true
    }
  },
  setup(props) {
    console.log(props.genre)
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
