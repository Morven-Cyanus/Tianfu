<script setup>
const NAV_ITEMS = [
  { to: '/',               icon: '☯',  label: '道府主殿' },
  { to: '/origin',         icon: '🌌', label: '天府起源' },
  { to: '/seven-sages',    icon: '✦',  label: '天府七圣' },
  { to: '/thirteen-clans', icon: '⚡', label: '十三主脉' },
  { to: '/poem',           icon: '📜', label: '神域天府吟' },
  { to: '/elites',         icon: '👑', label: '天府群英' },
  { to: '/elements',       icon: '📖', label: '天元启世录' },
  { to: '/dreams',         icon: '🌙', label: '瑶台清梦录' },
  { to: '/join-us',        icon: '🌟', label: '加入我们' },
  { to: '/admin',          icon: '⚙',  label: '管理后台' },
]
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-logo">
      <div class="logo-seal">道</div>
      <span class="logo-title">玄荒道府</span>
    </div>

    <div class="sidebar-divider" />

    <nav>
      <ul>
        <li v-for="item in NAV_ITEMS" :key="item.to">
          <RouterLink class="nav-link" :to="item.to">
            <span class="nav-icon">{{ item.icon }}</span>
            <span class="nav-label">{{ item.label }}</span>
          </RouterLink>
        </li>
      </ul>
    </nav>


  </aside>
</template>

<style scoped>
.sidebar {
  width: 200px;
  flex-shrink: 0;
  background: linear-gradient(
    180deg,
    rgba(5, 5, 15, 0.95) 0%,
    rgba(10, 10, 30, 0.9) 100%
  );
  border-right: 1px solid var(--panel-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 0 24px;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  backdrop-filter: blur(12px);
}

/* ── Logo ── */
.sidebar-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 36px;
}

.logo-seal {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 2px solid var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: var(--gold);
  box-shadow: 0 0 18px rgba(212, 175, 55, 0.5), inset 0 0 10px rgba(212, 175, 55, 0.1);
  animation: pulse-seal 3s ease-in-out infinite;
  margin-bottom: 10px;
}

@keyframes pulse-seal {
  0%,  100% { box-shadow: 0 0 18px rgba(212, 175, 55, 0.5),  inset 0 0 10px rgba(212, 175, 55, 0.1); }
  50%       { box-shadow: 0 0 32px rgba(212, 175, 55, 0.85), inset 0 0 18px rgba(212, 175, 55, 0.2); }
}

.logo-title {
  font-size: 13px;
  color: var(--gold-dim);
  letter-spacing: 2px;
}

/* ── Divider ── */
.sidebar-divider {
  width: 60%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold-dim), transparent);
  margin-bottom: 18px;
}

/* ── Nav ── */
nav ul {
  list-style: none;
  width: 100%;
}

nav ul li {
  width: 100%;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  color: var(--text-dim);
  text-decoration: none;
  font-size: 16px;
  letter-spacing: 1px;
  transition: color var(--trans), background var(--trans), border-left-color var(--trans);
  border-left: 3px solid transparent;
  position: relative;
}

.nav-icon {
  font-size: 18px;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--gold-light);
  background: rgba(212, 175, 55, 0.08);
  border-left-color: var(--gold);
}

.nav-link.router-link-active::after {
  content: '◈';
  position: absolute;
  right: 14px;
  font-size: 10px;
  color: var(--gold);
  animation: blink 1.5s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}

/* ── Responsive ── */
@media (max-width: 640px) {
  .sidebar {
    width: 56px;
    padding-top: 20px;
  }

  .logo-title,
  .nav-label {
    display: none;
  }

  .nav-link {
    justify-content: center;
    padding: 12px;
  }
}
</style>

