<template>
  <li
    class="relative w-full h-full overflow-hidden shadow-lg rounded-xl shrink-0 snap-center shadow-black"
  >
    <img
      src="https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg"
      alt="Show"
      class="object-cover w-full h-full rounded"
    />
  </li>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const show = ref({})
    return {
      show
    }
  },
 mounted() {
    console.log(this.show)
  }
}
</script>