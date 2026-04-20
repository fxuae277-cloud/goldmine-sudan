// ═══════════════════════════════════════════════════════════════
// نظام تبديل الثيم
// ═══════════════════════════════════════════════════════════════

function initTheme() {
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeButtons(saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateThemeButtons(theme);

  // إعادة رسم الرسم البياني إن وُجد
  if (typeof renderChart === 'function' && document.getElementById('profitChart')) {
    setTimeout(renderChart, 100);
  }
}

function updateThemeButtons(theme) {
  const btnDark  = document.getElementById('btnDark');
  const btnLight = document.getElementById('btnLight');
  if (!btnDark || !btnLight) return;

  if (theme === 'dark') {
    btnDark.style.border     = '2px solid var(--gold)';
    btnDark.style.background = 'rgba(212,168,16,.1)';
    btnDark.style.color      = 'var(--gold)';
    btnLight.style.border    = '2px solid var(--card-border)';
    btnLight.style.background = 'transparent';
    btnLight.style.color     = 'var(--text2)';
  } else {
    btnLight.style.border     = '2px solid var(--gold)';
    btnLight.style.background = 'rgba(212,168,16,.1)';
    btnLight.style.color      = 'var(--gold)';
    btnDark.style.border      = '2px solid var(--card-border)';
    btnDark.style.background  = 'transparent';
    btnDark.style.color       = 'var(--text2)';
  }
}

// تشغيل عند التحميل
initTheme();
