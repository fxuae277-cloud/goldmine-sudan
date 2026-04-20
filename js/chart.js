// ═══════════════════════════════════════════════════════════════
// الرسم البياني
// ═══════════════════════════════════════════════════════════════

function renderChart() {
  const container = document.getElementById('profitChart');
  if (!container) return;
  container.innerHTML = '';

  const data = [
    { day: 'الإثنين',  value: 45 },
    { day: 'الثلاثاء', value: 52 },
    { day: 'الأربعاء', value: 38 },
    { day: 'الخميس',   value: 67 },
    { day: 'الجمعة',   value: 71 },
    { day: 'السبت',    value: 58 },
    { day: 'الأحد',    value: 82 },
  ];

  const max = Math.max(...data.map(d => d.value));
  const barWidth = 100 / data.length;

  data.forEach((d, i) => {
    const bar = document.createElement('div');
    bar.className = 'chart-bar';
    const h = (d.value / max) * 260;
    bar.style.height = h + 'px';
    bar.style.left = (i * barWidth + barWidth * 0.15) + '%';
    bar.style.width = (barWidth * 0.7) + '%';
    bar.style.opacity = '0';
    bar.style.animation = `fadeUp .5s ease ${i * 0.08}s forwards`;

    // تسمية اليوم
    const label = document.createElement('div');
    label.style.cssText = `
      position: absolute; bottom: -24px; left: 50%;
      transform: translateX(-50%); font-size: 11px;
      color: var(--text3); font-family: 'Tajawal', sans-serif;
      white-space: nowrap;
    `;
    label.textContent = d.day;
    bar.appendChild(label);

    // القيمة فوق العمود
    const val = document.createElement('div');
    val.style.cssText = `
      position: absolute; top: -22px; left: 50%;
      transform: translateX(-50%); font-size: 10px;
      color: var(--gold); font-family: 'JetBrains Mono', monospace;
      font-weight: 600; white-space: nowrap; direction: ltr;
    `;
    val.textContent = '$' + d.value;
    bar.appendChild(val);

    container.appendChild(bar);
  });
}
