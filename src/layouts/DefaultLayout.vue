<template>
    <div class="default-layout">
        <main>
            <navbar />
            <slot></slot>
        </main>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
    components: {
        Navbar
    }
}
</script>

<style scoped>
.default-layout {
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  border-radius: 50px;
  padding: 3rem;
}
</style>
