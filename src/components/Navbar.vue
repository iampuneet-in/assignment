<template>
  <nav
    class="bg-white"
  >
    <div class="container flex flex-wrap justify-between  mx-auto">
      <a href="/" class="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >Tv Bite</span
        >
      </a>
      <div class="flex items-center">
        <search />
      </div>
    </div>
  </nav>
</template>

<script>
import Search from './Search.vue'
export default {
  components: {Search},
  setup() {
    
  },
}
</script>