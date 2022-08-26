<template>
  <default-layout>
    <router-view />
  </default-layout>
</template>

<script>
import DefaultLayout from './layouts/DefaultLayout.vue'

export default {
  name: 'App',
  components: {
    DefaultLayout
  }
}
</script>
