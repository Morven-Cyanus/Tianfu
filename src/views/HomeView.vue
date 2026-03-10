<script setup>
import PageLayout from '@/components/PageLayout.vue'
import GlassPanel from '@/components/GlassPanel.vue'
</script>

<template>
  <PageLayout
    bg="url(../../../images/background.png)"
    title="玄荒道府"
    subtitle="Celestial Palace of Xuanhuang"
  >
    <GlassPanel>
      <div class="welcome-content">
        <p class="intro-text">
          欢迎来到玄荒道府——神域第一道统，千万年屹立于玄荒之巅。
        </p>
        <p class="guide-text">
          选择左侧菜单，探索天府的奥秘与传说。
        </p>
        <div class="features">
          <div class="feature-item">
            <span class="feature-icon">🌌</span>
            <span>天府起源</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">✦</span>
            <span>天府七圣</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">⚡</span>
            <span>十三主脉</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">📜</span>
            <span>神域天府吟</span>
          </div>
        </div>
      </div>
    </GlassPanel>
  </PageLayout>
</template>

<style scoped>
.welcome-content {
  text-align: center;
}

.intro-text {
  font-size: 20px;
  color: var(--star-light);
  letter-spacing: 2px;
  margin-bottom: 16px;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
}

.guide-text {
  font-size: 16px;
  color: var(--text-dim);
  margin-bottom: 32px;
  letter-spacing: 1px;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 12px;
  background: rgba(0, 212, 255, 0.08);
  border: 1px solid rgba(0, 212, 255, 0.15);
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.feature-item:hover {
  background: rgba(0, 212, 255, 0.15);
  border-color: rgba(0, 212, 255, 0.35);
  box-shadow: 0 0 12px rgba(0, 212, 255, 0.2);
  transform: translateY(-2px);
}

.feature-icon {
  font-size: 28px;
}

.feature-item span:not(.feature-icon) {
  font-size: 13px;
  color: var(--text-main);
  letter-spacing: 1px;
}
</style>
