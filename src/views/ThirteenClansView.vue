<script setup>
import PageLayout from '@/components/PageLayout.vue'
import GlassPanel from '@/components/GlassPanel.vue'
import { CLANS } from '@/data/clans.js'
</script>

<template>
  <PageLayout
    bg="url(../../../images/background.png)"
    title="十三主脉"
    subtitle="Thirteen Main Meridians"
  >
    <GlassPanel>
      <p class="intro">
        玄荒道府下设十三主脉，各脉分管不同领域，共同支撑道府运转：
      </p>

      <div class="clans-grid">
        <div v-for="clan in CLANS" :key="clan.name" class="clan-card">
          <span class="clan-icon">{{ clan.icon }}</span>
          <span class="clan-name">{{ clan.name }}</span>
        </div>
      </div>

      <p class="footer-text">
        每脉设脉主一人，由道府核心弟子担任，掌脉内修行、事务调度之权。
      </p>
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

.clans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
  margin: 24px 0;
}

.clan-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 12px;
  background: rgba(0, 212, 255, 0.08);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.clan-card:hover {
  background: rgba(0, 212, 255, 0.15);
  border-color: rgba(0, 212, 255, 0.4);
  box-shadow: 0 0 12px rgba(0, 212, 255, 0.25);
  transform: translateY(-2px);
}

.clan-icon {
  font-size: 24px;
}

.clan-name {
  font-size: 13px;
  color: var(--star-light);
  letter-spacing: 1px;
}

.footer-text {
  text-align: center;
  color: var(--text-dim);
  font-size: 14px;
  margin-top: 24px;
  letter-spacing: 1px;
}
</style>
