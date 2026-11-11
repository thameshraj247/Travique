document.addEventListener('DOMContentLoaded', () => {
  initHoneymoonFamilyPage();
  initHoneymoonFamilyScrollEffects();
});

function initHoneymoonFamilyPage() {
  const btnHoneymoon = document.getElementById('hf-btn-honeymoon');
  const btnFamily = document.getElementById('hf-btn-family');

  if (btnHoneymoon) btnHoneymoon.classList.add('hf-mood-btn', 'active');
  if (btnFamily) btnFamily.classList.add('hf-mood-btn');
}

function switchHoneymoonFamilyTab(tab) {
  const btnHoneymoon = document.getElementById('hf-btn-honeymoon');
  const btnFamily = document.getElementById('hf-btn-family');
  const honeymoonSection = document.getElementById('honeymoon-couple-amenities');
  const familySection = document.getElementById('family-vip-amenities');

  if (tab === 'honeymoon') {
    if (btnHoneymoon) btnHoneymoon.classList.add('active');
    if (btnFamily) btnFamily.classList.remove('active');
    if (honeymoonSection) honeymoonSection.style.display = 'block';
    if (familySection) familySection.style.display = 'none';
  } else {
    if (btnHoneymoon) btnHoneymoon.classList.remove('active');
    if (btnFamily) btnFamily.classList.add('active');
    if (honeymoonSection) honeymoonSection.style.display = 'none';
    if (familySection) familySection.style.display = 'block';
  }

  if (typeof window.filterHoneymoonFamilyPackages === 'function') {
    window.filterHoneymoonFamilyPackages(tab);
  }

  setTimeout(initHoneymoonFamilyScrollEffects, 100);
}

function initHoneymoonFamilyScrollEffects() {
  const cards = document.querySelectorAll('.hf-romantic-card, .hf-family-card, .hf-perk-card');
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
      card.style.transitionDelay = `${(idx % 3) * 100}ms`;
      observer.observe(card);
    });
  } else {
    cards.forEach(c => c.classList.add('visible'));
  }
}
