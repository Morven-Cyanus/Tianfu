<script setup>
defineProps({
  /** CSS url() string, e.g. 'url(/images/d1.png)' */
  bg: { type: String, default: '' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <div class="page-bg" :style="bg ? { backgroundImage: bg } : {}">
    <div class="page-content">

      <header class="page-title">
        <h1>{{ title }}</h1>
        <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
      </header>

      <slot />

      <footer class="page-footer">
        <RouterLink class="fairy-btn" to="/">← 返回天府</RouterLink>
      </footer>

    </div>
  </div>
</template>

<style scoped>
.page-footer {
  text-align: center;
}

.fairy-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
  padding: 10px 28px;
  background: transparent;
  border: 1px solid var(--gold-dim);
  border-radius: 4px;
  color: var(--gold);
  font-family: inherit;
  font-size: 15px;
  letter-spacing: 2px;
  text-decoration: none;
  cursor: pointer;
  transition: all var(--trans);
}

.fairy-btn:hover {
  background: rgba(0, 212, 255, 0.12);
  border-color: var(--gold);
  box-shadow: 0 0 16px rgba(0, 212, 255, 0.3);
}
</style>
