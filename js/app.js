// ═══════════════════════════════════════════════════════════════
// الوظائف العامة
// ═══════════════════════════════════════════════════════════════

// ─── النوافذ المنبثقة ───
function openModal(id) {
  document.getElementById('modal-' + id)?.classList.add('open');
}

function closeModal(id) {
  document.getElementById('modal-' + id)?.classList.remove('open');
}

// ─── الإشعارات ───
function showToast(msg, type) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = (type === 'success' ? '✓ ' : '✕ ') + msg;
  toast.className = 'toast show toast-' + type;
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ─── حاسبة الاستثمار ───
function updateEstimate() {
  const amount = parseFloat(document.getElementById('modal-amount')?.value) || 0;
  const daily = (amount * 0.15 / 30);
  const total = daily * 90;
  const el1 = document.getElementById('est-daily');
  const el2 = document.getElementById('est-total');
  if (el1) el1.textContent = '$' + daily.toFixed(2);
  if (el2) el2.textContent = '$' + total.toFixed(2);
}

// ─── تبديل التبويبات في الإدارة ───
function switchAdminTab(tab) {
  document.querySelectorAll('.admin-tab').forEach(t => t.style.display = 'none');
  const target = document.getElementById('tab-' + tab);
  if (target) target.style.display = 'block';
  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
  if (event?.target) event.target.classList.add('active');
}

// ─── شريط التنقل عند التمرير ───
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ─── القائمة المحمولة ───
function toggleMobile() {
  const links = document.getElementById('navLinks');
  if (!links) return;
  if (links.style.display === 'flex') {
    links.style.display = 'none';
  } else {
    links.style.display = 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '64px';
    links.style.left = '0';
    links.style.right = '0';
    links.style.background = 'var(--nav-scrolled)';
    links.style.padding = '16px';
    links.style.borderBottom = '1px solid var(--card-border)';
    links.style.backdropFilter = 'blur(20px)';
  }
}

// ─── تحديد الرابط النشط في التنقل ───
function setActiveNav(pageName) {
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.getAttribute('data-page') === pageName);
  });
}

// ─── تهيئة الصفحة ───
document.addEventListener('DOMContentLoaded', () => {
  // تحديد الصفحة النشطة من URL
  const path = window.location.pathname;
  const page = path.split('/').pop().replace('.html', '') || 'index';
  const navName = page === 'index' ? 'home' : page;
  setActiveNav(navName);

  // تشغيل animations
  document.querySelectorAll('.anim-up').forEach((el, i) => {
    el.style.animationDelay = (i * 0.08) + 's';
  });

  // رسم البياني إن وُجد
  if (document.getElementById('profitChart')) {
    setTimeout(renderChart, 200);
  }
});
