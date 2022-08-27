<template>
  <div class="flex flex-col items-center justify-center object-cover w-full h-full text-gray-500 bg-black rounded">
     <router-link :to="{ name: 'details', params: { id: show.id } }">
    <img
      class="object-cover w-full h-full rounded"
      :src="show.image.medium"
      :alt="`TV show image of ${show.name}`"
    />
     </router-link>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ show?.name }}</div>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        v-for="(genre, index) in show.genres"
        :key="`genre-${index}`"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >{{ genre }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Object,
      required: true
    }
  },
  setup() {}
}
</script>
