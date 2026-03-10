<script setup>
import PageLayout from '@/components/PageLayout.vue'
import GlassPanel from '@/components/GlassPanel.vue'
</script>

<template>
  <PageLayout
    bg="url(/images/e1.png)"
    title="瑶台清梦录"
    subtitle="Records of Celestial Dreams"
  >
    <GlassPanel>
      <p class="content-subtitle">瑶台清梦，幻境永恒</p>
      <div class="content-body">
        <p>瑶台清梦录内容待补充...</p>
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
