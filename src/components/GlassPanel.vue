<!-- Reusable glass-morphism panel with cyan corner brackets -->
<template>
  <div class="glass-panel">
    <span class="corner-deco tl" aria-hidden="true" />
    <span class="corner-deco tr" aria-hidden="true" />
    <span class="corner-deco bl" aria-hidden="true" />
    <span class="corner-deco br" aria-hidden="true" />
    <slot />
  </div>
</template>

<style scoped>
.glass-panel {
  background: var(--panel-bg);
  border: 1px solid var(--panel-border);
  border-radius: var(--radius);
  padding: 32px 40px;
  backdrop-filter: blur(14px);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(0, 212, 255, 0.15);
  position: relative;
  overflow: hidden;
}

.glass-panel::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.6), transparent);
}

/* ── Corner brackets ── */
.corner-deco {
  position: absolute;
  width: 40px;
  height: 40px;
  pointer-events: none;
}

.corner-deco.tl { top: 10px;    left: 10px;  border-top: 2px solid var(--gold-dim); border-left:   2px solid var(--gold-dim); }
.corner-deco.tr { top: 10px;    right: 10px; border-top: 2px solid var(--gold-dim); border-right:  2px solid var(--gold-dim); }
.corner-deco.bl { bottom: 10px; left: 10px;  border-bottom: 2px solid var(--gold-dim); border-left:  2px solid var(--gold-dim); }
.corner-deco.br { bottom: 10px; right: 10px; border-bottom: 2px solid var(--gold-dim); border-right: 2px solid var(--gold-dim); }
</style>
