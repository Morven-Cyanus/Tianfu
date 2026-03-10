<script setup>
import PageLayout from '@/components/PageLayout.vue'
import GlassPanel from '@/components/GlassPanel.vue'
</script>

<template>
  <PageLayout
    bg="url(/images/e1.png)"
    title="天元启世录"
    subtitle="Chronicle of Celestial Genesis"
  >
    <GlassPanel>
      <p class="content-subtitle">天元初启，世界开创</p>
      <div class="content-body">
        <p>天元启世录内容待补充...</p>
      </div>
    </GlassPanel>
  </PageLayout>
</template>

<style scoped>
.content-subtitle {
  text-align: center;
  color: var(--gold-dim);
  font-size: 14px;
  letter-spacing: 4px;
  margin-bottom: 28px;
}

.content-body {
  font-size: 17px;
  line-height: 2.4;
  color: var(--text-main);
  text-align: center;
}
</style>
