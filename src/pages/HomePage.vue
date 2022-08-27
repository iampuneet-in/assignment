<template>
 <section class="mt-16">
   <genreSlider v-for="(shows, index) in showsByGenre"   :key="`slider-${index}`"  :shows="shows.shows"   :genre="shows.genre">
   </genreSlider>
 </section>
</template>

<script>
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'
import GenreSlider from '@/components/GenreSlider.vue'
import { useGroupByGenre } from '../helpers/composables';

import "vue3-carousel/dist/carousel.css";
export default {
  components: { GenreSlider },
  setup() {
    const store = useStore()
    const showsByGenre = ref({})
    onMounted(async () => { 
      const response = await store.dispatch('get', {
        action: '/shows'
      });
      showsByGenre.value = useGroupByGenre(response);
    });
    return {
      showsByGenre
    }
  }
}
</script>