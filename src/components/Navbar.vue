<template>
  <nav
    class="bg-white"
  >
    <div class="container flex flex-wrap justify-between  mx-auto">
      <a href="https://flowbite.com/" class="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >Flowbite</span
        >
      </a>

      <div class="flex items-center">
        <search />
      </div>
      
      <!-- <div
        class="justify-between items-center w-full md:flex md:w-auto md:order-1"
        id="navbar-search"
      >
        <div class="relative mt-3">
          <input
            type="text"
            id="search-navbar"
            class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
      </div> -->
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
    Search
</script>i