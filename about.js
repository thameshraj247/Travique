document.addEventListener('DOMContentLoaded', () => {
  initAboutScrollEffects();
  initStatCounters();
});

function initAboutScrollEffects() {
  const cards = document.querySelectorAll(
    '.about-timeline-step, .about-pillar-card, .about-curator-card, .about-award-card'
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    cards.forEach((card, idx) => {
      card.classList.add('scroll-reveal');
      card.style.transitionDelay = `${(idx % 4) * 110}ms`;
      observer.observe(card);
    });
  } else {
    cards.forEach(c => c.classList.add('visible'));
  }
}

function initStatCounters() {
  const counters = document.querySelectorAll('[data-counter-target], .stat-counter');
  if (!counters.length) return;

  function runCounter(el) {
    if (el.dataset.counterStarted) return;
    el.dataset.counterStarted = 'true';

    const target = parseFloat(el.getAttribute('data-counter-target') || '0');
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    const duration = 2000;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const ease = 1 - Math.pow(1 - progress, 3);
      const current = ease * target;

      const formattedVal = decimals > 0
        ? current.toFixed(decimals)
        : Math.floor(current).toLocaleString();

      el.textContent = `${prefix}${formattedVal}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        const finalVal = decimals > 0 ? target.toFixed(decimals) : target.toLocaleString();
        el.textContent = `${prefix}${finalVal}${suffix}`;
      }
    }

    requestAnimationFrame(update);
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    counters.forEach(c => observer.observe(c));
  } else {
    counters.forEach(c => runCounter(c));
  }
}
