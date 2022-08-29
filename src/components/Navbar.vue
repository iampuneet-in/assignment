<template>
  <nav
    class="bg-white"
  >
    <div class="container flex flex-wrap justify-between  mx-auto">
      <logo />
      <div class="flex items-center">
        <search />
      </div>
    </div>
  </nav>
</template>

<script>
import Search from './Search.vue'
import Logo from './Logo.vue'

export default {
  components: {Search, Logo},
  setup() {
    
  },
}
</script>