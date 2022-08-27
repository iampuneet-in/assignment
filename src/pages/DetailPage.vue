<template>
  <!-- Container -->
  <div class="container mt-32 mx-auto p-4 md:p-0">
    <div class="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
      <img
        class="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
        :src="show?.image?.original"
      />

      <div class="bg-white w-full md:w-2/3">
        <div class="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
          <div
            class="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center"
          >
            <div class="w-full lg:w-3/5 lg:px-3">
              <h1 class="text-xl bold">{{ show?.name }}</h1>
              <div class="pt-4">
                <span
                  v-for="(genre, index) in show.genres"
                  :key="`genre-${index}`"
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >{{ genre }}</span
                >
              </div>
              <hr class="w-80 md:ml-0 mt-4 border" />

              <p
                v-html="show.summary"
                class="text-sm mt-4 lg:mt-0 text-justify md:text-left text-sm"
              ></p>
            </div>
            <div
              class="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left"
            >
              <a
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                 :href="'//' + show.url" target="_blank">
                <span>Visit now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { ref, onMounted, watch } from 'vue'

export default {
  setup() {
    const route = useRoute()
    const store = useStore()
    const show = ref([])
    async function fetchShowById() {
      const {
        params: { id }
      } = route
      const response = await store.dispatch('get', {
        action: `shows/${id}`
      })
      show.value = response
    }

    watch(() => route.params.id, fetchShowById)

    onMounted(async () => {
      await fetchShowById()
    })

    return {
      fetchShowById,
      show
    }
  }
}
</script>
