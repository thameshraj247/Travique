document.addEventListener('DOMContentLoaded', () => {
  initInternationalScrollEffects();
  initContinentSwitcher();
});

function initInternationalScrollEffects() {
  const cards = document.querySelectorAll('.intl-wonder-card, .intl-visafree-card, .intl-aviation-banner');
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

function initContinentSwitcher() {
  const tabs = document.querySelectorAll('.intl-continent-btn');
  const cards = document.querySelectorAll('.intl-wonder-card');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const continent = (tab.getAttribute('data-continent') || 'all').toLowerCase();
      cards.forEach(card => {
        const cardContinent = (card.getAttribute('data-continent') || '').toLowerCase();
        if (continent === 'all' || cardContinent.includes(continent)) {
          card.style.display = 'flex';
          card.classList.add('visible');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
