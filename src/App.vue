<script setup>
import { useStarCanvas } from '@/composables/useStarCanvas.js'
import AppSidebar from '@/components/AppSidebar.vue'

useStarCanvas('star-canvas')
</script>

<template>
  <AppSidebar />

  <main class="content-area">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<style scoped>
.content-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
