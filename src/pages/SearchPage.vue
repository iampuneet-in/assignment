<template>
  <div
    class="mt-16 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-4"
  >
    <router-link
      v-for="show in searchResults"
      :key="show.show.id"
      :to="{ name: 'details', params: { id: show.show.id } }"
    >
      <card :show="show.show" />
    </router-link>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { ref, onMounted, watch } from 'vue'
export default {
  components: {
    Card,
  },
  setup() {
    const route = useRoute()
    const store = useStore()
    const searchResults = ref([])

    watch(() => route.query.q, searchShows);
    
    async function searchShows() {
        const {
      query: { q: searchText }
    } = route
      const response = await store.dispatch('get', {
        action: `search/shows?q=${searchText}`
      });
      searchResults.value = response
    }

    onMounted(async () => {
      await searchShows();
    });
    return {

      searchResults,
    }
  }
}
</script>
