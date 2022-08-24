<template>
    <div class="default-layout">
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
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
