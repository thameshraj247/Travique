document.addEventListener('DOMContentLoaded', () => {
  initDomesticScrollEffects();
  initPalaceFilter();
  initTrainRoutePreview();
});

function initDomesticScrollEffects() {
  const cards = document.querySelectorAll('.domestic-palace-card, .royal-train-card, .domestic-chauffeur-card');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach((card, idx) => {
      card.classList.add('scroll-reveal');
      card.style.transitionDelay = `${(idx % 4) * 100}ms`;
      observer.observe(card);
    });
  } else {
    cards.forEach(c => c.classList.add('visible'));
  }
}

function initPalaceFilter() {
  const filterBtns = document.querySelectorAll('.domestic-filter-btn');
  const cards = document.querySelectorAll('.domestic-palace-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const region = btn.getAttribute('data-region') || 'all';
      cards.forEach(card => {
        const cardRegion = card.getAttribute('data-region') || '';
        if (region === 'all' || cardRegion.includes(region)) {
          card.style.display = 'flex';
          card.classList.add('visible');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function initTrainRoutePreview() {
  const nodes = document.querySelectorAll('.train-route-node');
  nodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
      const city = node.getAttribute('data-city');
      if (city && typeof showToast === 'function') {
        showToast(`Route Milestone: ${city} (Royal Excursion Stop)`, 'fa-train');
      }
    });
  });
}
