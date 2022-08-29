<template>
 <section class="mt-16">
   <genreSlider  :key="`slider-${index}`"  :shows="showsByRating"   genre="Best rated shows"></genreSlider>
   <genreSlider v-for="(shows, index) in showsByGenre"   :key="`slider-${index}`"  :shows="shows.shows"   :genre="shows.genre">
   </genreSlider>
 </section>
</template>

<script>
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'
import GenreSlider from '@/components/GenreSlider.vue'
import { useGroupByGenre, useSortByRating } from '../helpers/composables';

import "vue3-carousel/dist/carousel.css";
export default {
  components: { GenreSlider },
  setup() {
    const store = useStore()
    const showsByGenre = ref({});
    const showsByRating = ref([]);
    onMounted(async () => { 
      await store.dispatch('shows/getAllShows');
      showsByGenre.value = useGroupByGenre(store.state.shows.shows);
      showsByRating.value = useSortByRating(store.state.shows.shows);
    });
    return {
      showsByGenre,
      showsByRating
    }
  }
}
</script>