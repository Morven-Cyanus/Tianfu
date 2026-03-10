<script setup>
import PageLayout from '@/components/PageLayout.vue'
import GlassPanel from '@/components/GlassPanel.vue'
import { SAGES, RANK_CHARS } from '@/data/sages.js'
</script>

<template>
  <PageLayout
    bg="url(../../../images/c1.png)"
    title="天府七圣"
    subtitle="The Seven Saints of Tianfu"
  >
    <GlassPanel>
      <p class="intro">
        天府七圣为天府的核心，在天元纪结束之后退隐。每一个都是天府的传奇：
      </p>

      <ul class="sages-list">
        <li v-for="s in SAGES" :key="s.rank" class="sage-item">
          <span class="sage-icon">{{ s.icon }}</span>
          <div class="sage-info">
            <div class="sage-name">天府{{ RANK_CHARS[s.rank - 1] }}圣 · {{ s.name }}</div>
            <div class="sage-title">{{ s.title }}</div>
            <div class="sage-dao">{{ s.dao }}</div>
          </div>
        </li>
      </ul>
    </GlassPanel>
  </PageLayout>
</template>

<style scoped>
.intro {
  text-align: center;
  color: var(--text-dim);
  font-size: 15px;
  letter-spacing: 2px;
  margin-bottom: 24px;
}

.sages-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.sage-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 20px;
  background: rgba(0, 212, 255, 0.06);
  border: 1px solid rgba(0, 212, 255, 0.18);
  border-radius: var(--radius);
  transition: background var(--trans), border-color var(--trans), transform var(--trans);
}

.sage-item:hover {
  background: rgba(0, 212, 255, 0.12);
  border-color: rgba(0, 212, 255, 0.4);
  transform: translateX(4px);
}

.sage-icon {
  font-size: 24px;
  min-width: 36px;
  text-align: center;
  color: var(--gold);
  text-shadow: 0 0 8px rgba(0, 212, 255, 0.6);
}

.sage-name {
  font-size: 20px;
  color: var(--gold-light);
  letter-spacing: 2px;
}

.sage-title {
  font-size: 15px;
  color: var(--jade);
  margin: 2px 0;
}

.sage-dao {
  font-size: 14px;
  color: var(--text-dim);
  font-style: italic;
}
</style>
