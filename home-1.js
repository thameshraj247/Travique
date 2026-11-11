document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initHome1ScrollAnimations();
  initBudgetCalculator();
  initFeatureDividers();
  initTestimonialStackCarousel();
});

let heroSlideIndex = 0;
let heroSlideTimer = null;

function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.hero-indicator');
  if (!slides.length) return;

  function setSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.remove('opacity-0', 'scale-105', 'pointer-events-none');
        slide.classList.add('opacity-100', 'scale-100');
      } else {
        slide.classList.remove('opacity-100', 'scale-100');
        slide.classList.add('opacity-0', 'scale-105', 'pointer-events-none');
      }
    });

    indicators.forEach((ind, i) => {
      if (i === index) {
        ind.className = 'hero-indicator w-6 h-1.5 rounded-full bg-white transition-all duration-300';
      } else {
        ind.className = 'hero-indicator w-1.5 h-1.5 rounded-full bg-white/50 hover:bg-white transition-all duration-300';
      }
    });

    heroSlideIndex = index;
  }

  window.setHeroSlide = function(index) {
    setSlide(index);
    startAutoSlide();
  };

  function nextSlide() {
    const next = (heroSlideIndex + 1) % slides.length;
    setSlide(next);
  }

  function startAutoSlide() {
    if (heroSlideTimer) clearInterval(heroSlideTimer);
    heroSlideTimer = setInterval(nextSlide, 3500);
  }

  startAutoSlide();
}

function initHome1ScrollAnimations() {
  const elementsToReveal = document.querySelectorAll(
    '#discover-world-section .h1-collage-wrapper, .h1-package-card, .h1-review-card, .h1-feature-item'
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    elementsToReveal.forEach((el, index) => {
      el.classList.add('scroll-reveal');
      el.style.transitionDelay = `${(index % 4) * 120}ms`;
      observer.observe(el);
    });
  } else {
    elementsToReveal.forEach(el => el.classList.add('visible'));
  }
}

function initBudgetCalculator() {
  const slider = document.getElementById('budget-guest-slider') || document.querySelector('input[type="range"]');
  const label = document.getElementById('budget-total-label');
  if (!slider || !label) return;

  function updateBudget() {
    const guests = parseInt(slider.value) || 2;
    const basePerPerson = 2280;
    const total = guests * basePerPerson;
    label.textContent = `$${total.toLocaleString()}`;
  }

  slider.addEventListener('input', updateBudget);
}

function initFeatureDividers() {
  const featureItems = document.querySelectorAll('.h1-feature-item');
  featureItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateY(-4px)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateY(0)';
    });
  });
}

let currentTestimonialIndex = 0;
let isDraggingTestimonial = false;
let startTestimonialX = 0;
let currentTestimonialTranslateX = 0;

function initTestimonialStackCarousel() {
  const deck = document.getElementById('testimonial-carousel-deck');
  if (!deck) return;

  const cards = deck.querySelectorAll('.testimonial-card');
  const dots = deck.querySelectorAll('.testimonial-dot');
  const total = cards.length;
  if (!total) return;

  function updateCards(exitX = 0) {
    cards.forEach((card, index) => {
      const isCurrent = index === currentTestimonialIndex;
      const isPrev = index === (currentTestimonialIndex + 1) % total;
      const isNext = index === (currentTestimonialIndex + 2) % total;

      card.classList.remove('z-30', 'z-20', 'z-10', 'pointer-events-none', 'pointer-events-auto');
      card.style.transition = isDraggingTestimonial ? 'none' : 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease';

      if (isCurrent) {
        card.classList.add('z-30', 'pointer-events-auto');
        const rotate = exitX / 20;
        card.style.transform = `translate3d(${exitX}px, 0px, 0px) scale(1) rotate(${rotate}deg)`;
        card.style.opacity = '1';
        const arrows = card.querySelector('.top-arrows');
        if (arrows) arrows.style.display = 'flex';
      } else if (isPrev) {
        card.classList.add('z-20', 'pointer-events-none');
        card.style.transform = 'translate3d(0px, 10px, 0px) scale(0.95) rotate(-2deg)';
        card.style.opacity = '0.65';
        const arrows = card.querySelector('.top-arrows');
        if (arrows) arrows.style.display = 'none';
      } else if (isNext) {
        card.classList.add('z-10', 'pointer-events-none');
        card.style.transform = 'translate3d(0px, 20px, 0px) scale(0.90) rotate(-4deg)';
        card.style.opacity = '0.35';
        const arrows = card.querySelector('.top-arrows');
        if (arrows) arrows.style.display = 'none';
      } else {
        card.classList.add('pointer-events-none');
        card.style.transform = 'translate3d(0px, 25px, 0px) scale(0.85) rotate(-6deg)';
        card.style.opacity = '0';
        const arrows = card.querySelector('.top-arrows');
        if (arrows) arrows.style.display = 'none';
      }
    });

    dots.forEach((dot, index) => {
      if (index === currentTestimonialIndex) {
        dot.className = 'testimonial-dot w-6 h-2 rounded-full bg-[#1A3B55] dark:bg-[#C9935E] transition-all duration-300';
      } else {
        dot.className = 'testimonial-dot w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 transition-all duration-300 cursor-pointer';
      }
    });
  }

  window.nextTestimonial = function(e) {
    if (e) e.stopPropagation();
    currentTestimonialIndex = (currentTestimonialIndex + 1) % total;
    updateCards(0);
  };

  window.prevTestimonial = function(e) {
    if (e) e.stopPropagation();
    currentTestimonialIndex = (currentTestimonialIndex - 1 + total) % total;
    updateCards(0);
  };

  window.setTestimonial = function(index) {
    currentTestimonialIndex = index % total;
    updateCards(0);
  };

  function onPointerDown(e) {
    if (e.target.closest('button')) return;
    isDraggingTestimonial = true;
    startTestimonialX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    currentTestimonialTranslateX = 0;
  }

  function onPointerMove(e) {
    if (!isDraggingTestimonial) return;
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    currentTestimonialTranslateX = clientX - startTestimonialX;
    updateCards(currentTestimonialTranslateX);
  }

  function onPointerUp() {
    if (!isDraggingTestimonial) return;
    isDraggingTestimonial = false;
    if (Math.abs(currentTestimonialTranslateX) > 80) {
      const exitDir = currentTestimonialTranslateX > 0 ? 350 : -350;
      updateCards(exitDir);
      setTimeout(() => {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % total;
        updateCards(0);
      }, 200);
    } else {
      updateCards(0);
    }
  }

  deck.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);

  deck.addEventListener('touchstart', onPointerDown, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: true });
  window.addEventListener('touchend', onPointerUp);

  updateCards(0);
}
