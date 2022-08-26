<template>
    <div class="default-layout">
        <main>
            <Navigation />
            <slot></slot>
        </main>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
export default {
    components: {
        Navigation
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
