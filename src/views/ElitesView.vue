<script setup>
import PageLayout from '@/components/PageLayout.vue'
import GlassPanel from '@/components/GlassPanel.vue'
import { useApplications } from '@/composables/useApplications'

const { elitesData } = useApplications()
</script>

<template>
  <PageLayout
    bg="url(/images/e1.png)"
    title="天府群英"
    subtitle="Elites of the Celestial Palace"
  >
    <GlassPanel>
      <p class="elites-subtitle">群英荟萃，共谱天府传奇</p>
      <div class="elites-body">
        <div class="table-container">
          <table class="elites-table">
            <thead>
              <tr>
                <th>天府</th>
                <th>号</th>
                <th>凡间</th>
                <th>神界</th>
                <th>称</th>
                <th>原型</th>
                <th>主脉</th>
                <th>势力</th>
                <th>生</th>
                <th>故乡</th>
                <th>道</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in elitesData" :key="index">
                <td>{{ row.天府 }}</td>
                <td>{{ row.号 }}</td>
                <td>{{ row.凡间 }}</td>
                <td>{{ row.神界 }}</td>
                <td>{{ row.称 }}</td>
                <td>{{ row.原型 }}</td>
                <td>{{ row.主脉 }}</td>
                <td>{{ row.势力 }}</td>
                <td>{{ row.生 }}</td>
                <td>{{ row.故乡 }}</td>
                <td>{{ row.道 }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </GlassPanel>
  </PageLayout>
</template>

<style scoped>
.elites-subtitle {
  text-align: center;
  color: var(--gold-dim);
  font-size: 14px;
  letter-spacing: 4px;
  margin-bottom: 28px;
}

.elites-body {
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-main);
}

.table-container {
  overflow-x: auto;
  border-radius: 8px;
  background: rgba(212, 175, 55, 0.03);
}

.elites-table {
  width: 100%;
  border-collapse: collapse;
  background: rgba(212, 175, 55, 0.02);
}

.elites-table thead {
  background: linear-gradient(90deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.08) 100%);
  position: sticky;
  top: 0;
}

.elites-table th {
  padding: 14px 12px;
  text-align: center;
  color: var(--gold-light);
  font-weight: 600;
  letter-spacing: 1px;
  border-bottom: 2px solid var(--gold-dim);
  white-space: nowrap;
  font-size: 13px;
}

.elites-table td {
  padding: 12px;
  text-align: center;
  color: var(--text-main);
  border-bottom: 1px solid rgba(212, 175, 55, 0.1);
  white-space: nowrap;
  font-size: 13px;
}

.elites-table tbody tr:hover {
  background: rgba(212, 175, 55, 0.08);
  transition: background var(--trans);
}

.elites-table tbody tr:nth-child(even) {
  background: rgba(212, 175, 55, 0.04);
}

.elites-table tbody tr:nth-child(even):hover {
  background: rgba(212, 175, 55, 0.1);
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .elites-table th,
  .elites-table td {
    padding: 10px 8px;
    font-size: 12px;
  }
}

@media (max-width: 768px) {
  .elites-table th,
  .elites-table td {
    padding: 8px 6px;
    font-size: 11px;
  }
}
</style>
