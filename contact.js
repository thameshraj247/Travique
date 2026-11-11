document.addEventListener('DOMContentLoaded', () => {
  initLiveWorldClocks();
  initContactFaqAccordion();
  initContactScrollEffects();
});

function initLiveWorldClocks() {
  const clockElements = document.querySelectorAll('[data-timezone]');
  if (!clockElements.length) return;

  function updateClocks() {
    clockElements.forEach(el => {
      const tz = el.getAttribute('data-timezone');
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: tz,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(new Date());
        el.textContent = timeStr;
      } catch (err) {
        el.textContent = new Date().toLocaleTimeString();
      }
    });
  }

  updateClocks();
  setInterval(updateClocks, 1000);
}

window.toggleContactFaq = function(btn) {
  const item = btn.closest('.contact-faq-item');
  if (!item) return;
  const answer = item.querySelector('.contact-faq-answer');
  const arrow = item.querySelector('.faq-chevron');
  const isHidden = answer.classList.contains('hidden');

  document.querySelectorAll('.contact-faq-item').forEach(other => {
    other.querySelector('.contact-faq-answer')?.classList.add('hidden');
    other.querySelector('.faq-chevron')?.classList.remove('rotate-180', 'bg-[#9E6738]', 'text-white');
    other.classList.remove('ring-1', 'ring-[#9E6738]/40', 'shadow-sm');
  });

  if (isHidden) {
    answer.classList.remove('hidden');
    arrow?.classList.add('rotate-180', 'bg-[#9E6738]', 'text-white');
    item.classList.add('ring-1', 'ring-[#9E6738]/40', 'shadow-sm');
  }
};

function initContactFaqAccordion() {
  const triggers = document.querySelectorAll('.contact-faq-trigger');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parent = trigger.closest('.contact-faq-item');
      if (!parent) return;

      const wasActive = parent.classList.contains('active');
      document.querySelectorAll('.contact-faq-item').forEach(item => {
        item.classList.remove('active');
      });

      if (!wasActive) {
        parent.classList.add('active');
      }
    });
  });
}

function initContactScrollEffects() {
  const cards = document.querySelectorAll(
    '.contact-world-clock-card, .contact-lounge-card, .contact-faq-item, .contact-form-container'
  );

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
