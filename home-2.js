<<<<<<< HEAD
﻿document.addEventListener('DOMContentLoaded', () => {
  initCosmicIntroOverlay();
  initHeroDestinationSwitcher();
  initAtelierTabs();
  initMapCoordinates();
  initMagazineSpotlight();
  initScrollAnimations();
  initHeaderScrollFit();
});

function initHeaderScrollFit() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = () => {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
    if (scrollPos > 15) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  document.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();
}

function initHeroDestinationSwitcher() {
  const slides = document.querySelectorAll('.h2-hero-slide');
  const pills = document.querySelectorAll('.h2-dest-pill');
  if (!slides.length || slides.length <= 1) return;

  let currentIdx = 0;
  let timer = null;
  const slideDuration = 6000;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
    if (pills && pills.length) {
      pills.forEach((pill, i) => {
        pill.classList.toggle('active', i === idx);
      });
    }
    currentIdx = idx;
  }

  function nextSlide() {
    const next = (currentIdx + 1) % slides.length;
    showSlide(next);
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, slideDuration);
  }

  if (pills && pills.length) {
    pills.forEach((pill, index) => {
      pill.addEventListener('click', () => {
        showSlide(index);
        startTimer();
      });
    });
  }

  startTimer();
}

function handleHome2QuickPlanner(event) {
  if (event) event.preventDefault();
  const destInput = document.getElementById('h2-plan-dest-input')?.value;
  const destSelect = document.getElementById('h2-plan-dest')?.value;
  const dest = destInput || destSelect || 'all';
  const style = document.getElementById('h2-plan-budget')?.value || document.getElementById('h2-plan-style')?.value || 'all';

  if (typeof showToast === 'function') {
    showToast(`Searching curated sanctuaries for ${dest.toUpperCase()}...`, 'fa-compass');
  }

  setTimeout(() => {
    window.location.href = `packages.html?dest=${encodeURIComponent(dest)}&style=${encodeURIComponent(style)}`;
  }, 900);
}

const ATELIER_DATA = [
  {
    title: "Direct Reef Seaplane & Private Aviation",
    tagline: "Amphibious flight transfers with zero terminal queues",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=85",
    coord: "03°12'N - Baa Atoll UNESCO",
    inclusions: "Direct lagoon water-landing - No tarmac transit - VIP lounge greeting",
    quote: "Our seaplane touched down on the private villa lagoon before commercial travelers had even cleared mainland luggage.",
    traveler: "Lord & Lady Harrington - London",
    packageId: "pkg-intl-maldives"
  },
  {
    title: "Cantilevered Overwater Ocean Sanctuaries",
    tagline: "Unobstructed sunset horizons with glass-floor viewing chambers",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=85",
    coord: "04°18'N - North Malé Atoll",
    inclusions: "Private 18m freshwater infinity pool - Sommelier wine vault - Stargazing deck",
    quote: "Waking up to the sapphire water right beneath our bed with our island host bringing fresh passionfruit was pure paradise.",
    traveler: "Sophia Vance & Julian Reed - Zurich",
    packageId: "pkg-intl-maldives"
  },
  {
    title: "First-Class Glacier Rail & Alpine Chalets",
    tagline: "Panoramic glass-domed rail suites across snow-crested peaks",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1600&q=85",
    coord: "46°30'N - St. Moritz & Zermatt",
    inclusions: "Heated boot rooms - Fireside sommelier pairings - Heliski private glacier access",
    quote: "Glacier Express Excellence Class with Travique's private reservations took all the friction out of luxury European rail.",
    traveler: "Dr. Arvind & Neha Sharma - San Jose",
    packageId: "pkg-intl-swiss"
  },
  {
    title: "Curated Superyacht & Catamaran Charters",
    tagline: "Secluded crystalline bays and private diving master expeditions",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1600&q=85",
    coord: "36°25'N - Aegean & Cyclades",
    inclusions: "65ft Sunreef Catamaran - On-board private executive chef - Night diving gear",
    quote: "Mooring at sunset off volcanic cliffs while our chef prepared fresh grilled sea bass on deck is a memory of a lifetime.",
    traveler: "Camille Dupont - Paris",
    packageId: "pkg-intl-santorini"
  }
];

function initAtelierTabs() {
  const items = document.querySelectorAll('.h2-atelier-item');
  const bgImg = document.getElementById('h2-atelier-preview-img');
  const titleEl = document.getElementById('h2-atelier-preview-title');
  const coordEl = document.getElementById('h2-atelier-preview-coord');
  const inclusionsEl = document.getElementById('h2-atelier-preview-inclusions');
  const quoteEl = document.getElementById('h2-atelier-preview-quote');
  const travelerEl = document.getElementById('h2-atelier-preview-traveler');
  const bookBtn = document.getElementById('h2-atelier-book-btn');

  if (!items.length || !bgImg) return;

  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      items.forEach(it => it.classList.remove('active'));
      item.classList.add('active');

      const data = ATELIER_DATA[index];
      if (!data) return;

      bgImg.style.opacity = '0.3';
      bgImg.style.transform = 'scale(1.05)';
      setTimeout(() => {
        bgImg.src = data.image;
        bgImg.style.opacity = '1';
        bgImg.style.transform = 'scale(1)';
      }, 250);

      if (titleEl) titleEl.textContent = data.title;
      if (coordEl) coordEl.textContent = data.coord;
      if (inclusionsEl) inclusionsEl.textContent = data.inclusions;
      if (quoteEl) quoteEl.textContent = `"${data.quote}"`;
      if (travelerEl) travelerEl.textContent = data.traveler;
      if (bookBtn) {
        bookBtn.setAttribute('onclick', `openBookingModal('${data.packageId}')`);
      }
    });
  });
}

function initMapCoordinates() {

  const statsSection = document.getElementById('h2-horizons');
  if (!statsSection) return;

  let countersAnimated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.25 });

  observer.observe(statsSection);
}

function animateCounters() {
  const counters = [
    { id: 'counter-miles', target: 120000, suffix: '+ Nautical Miles', formatComma: true },
    { id: 'counter-ontime', target: 99.8, suffix: '% Dispatch Rate', decimal: 1 },
    { id: 'counter-rating', target: 4.98, suffix: ' / 5.0 Rating', decimal: 2 },
    { id: 'counter-butlers', target: 24, suffix: ' / 7 VIP Concierge', prefix: '' }
  ];

  counters.forEach(item => {
    const el = document.getElementById(item.id);
    if (!el) return;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const currentVal = start + (item.target - start) * ease;

      let displayStr = '';
      if (item.decimal) {
        displayStr = currentVal.toFixed(item.decimal);
      } else if (item.formatComma) {
        displayStr = Math.floor(currentVal).toLocaleString('en-US');
      } else {
        displayStr = Math.floor(currentVal).toString();
      }

      el.textContent = `${displayStr}`;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  });
}

function focusMapPin(index) {
  const pins = document.querySelectorAll('.h2-map-pin');
  if (!pins.length || !pins[index]) return;

  pins.forEach(p => p.classList.remove('active'));
  pins[index].classList.add('active');

  pins[index].scrollIntoView({ behavior: 'smooth', block: 'center' });

  setTimeout(() => {
    pins[index].classList.remove('active');
  }, 4500);
}

const SPOTLIGHT_DATA = [
  {
    title: "Baa Atoll Overwater Royal Sanctuary",
    destination: "Maldives - UNESCO Biosphere Reserve",
    price: "$4,850",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85",
    tag: "FEATURED FLAGSHIP",
    badge: "Bespoke Overwater",
    description: "Suspended over turquoise coral waters with a glass-bottom floor, dedicated butler, private seaplane transfers, and underwater wine cellar access.",
    inclusions: [
      "Complimentary Trans Maldivian Seaplane transfers",
      "24/7 dedicated Island Host & sommelier service",
      "Private manta ray snorkeling safari with resident marine biologist",
      "Champagne sunset dinner cruise on private catamaran"
    ],
    packageId: "pkg-intl-maldives"
  },
  {
    title: "St. Moritz Glacier & Chalet Sanctuary",
    destination: "Engadin Valley - Switzerland",
    price: "$3,420",
    duration: "6 Days / 5 Nights",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=85",
    tag: "ALPINE PRESTIGE",
    badge: "Glacier First-Class",
    description: "Panoramic first-class railway passes, ski-in/ski-out private chalet suites with crackling stone fireplaces, and Michelin-starred alpine fondue dining.",
    inclusions: [
      "Glacier Express Excellence Class panoramic carriage tickets",
      "Private ski concierge & heated slope equipment valet",
      "Sommelier cellar tasting with Swiss alpine cheeses",
      "Helicopter tour over the iconic Matterhorn peak"
    ],
    packageId: "pkg-intl-swiss"
  },
  {
    title: "Oia Sunset Caldera Cliffside Haven",
    destination: "Santorini - Greek Cyclades",
    price: "$2,980",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=85",
    tag: "ROMANTIC HORIZON",
    badge: "Cliffside Caldera",
    description: "Carved into the sun-drenched volcanic cliffs of Oia with an infinity plunge pool framing the Aegean sunset, daily champagne breakfast, and private catamaran cruise.",
    inclusions: [
      "Private Mercedes VIP airport & port chauffeur transfer",
      "Sunset catamaran cruise to volcanic hot springs with BBQ feast",
      "Private Greek wine tasting tour in Megalochori vineyard",
      "Caldera-edge candlelight 5-course romantic dinner"
    ],
    packageId: "pkg-intl-santorini"
  },
  {
    title: "Aman Forest Ryokan & Imperial Shinkansen",
    destination: "Kyoto & Tokyo - Japan",
    price: "$3,650",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85",
    tag: "HERITAGE SANCTUARY",
    badge: "Imperial Heritage",
    description: "Hidden inside the ancient maple and moss gardens of Mount Hidari Daimonji with private natural onsen spring baths and private Shinkansen bullet train Gran Class.",
    inclusions: [
      "Shinkansen Gran Class Tokyo-Kyoto bullet train passes",
      "Private traditional tea master ceremony in hidden 400-yr garden",
      "Private cedarwood hot onsen bath suite with garden vistas",
      "Multi-course Kaiseki dining prepared by master chef"
    ],
    packageId: "pkg-intl-kyoto"
  }
];

function initMagazineSpotlight() {
  const playlistItems = document.querySelectorAll('.h2-playlist-item');
  const mainImg = document.getElementById('h2-spotlight-img');
  const tagEl = document.getElementById('h2-spotlight-tag');
  const titleEl = document.getElementById('h2-spotlight-title');
  const destEl = document.getElementById('h2-spotlight-dest');
  const descEl = document.getElementById('h2-spotlight-desc');
  const priceEl = document.getElementById('h2-spotlight-price');
  const durationEl = document.getElementById('h2-spotlight-duration');
  const inclusionsList = document.getElementById('h2-spotlight-inclusions');
  const bookBtn = document.getElementById('h2-spotlight-book-btn');
  const detailsBtn = document.getElementById('h2-spotlight-details-btn');

  if (!playlistItems.length || !mainImg) return;

  playlistItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      playlistItems.forEach(it => it.classList.remove('active'));
      item.classList.add('active');

      const data = SPOTLIGHT_DATA[index];
      if (!data) return;

      mainImg.style.opacity = '0.3';
      mainImg.style.transform = 'scale(1.04)';
      setTimeout(() => {
        mainImg.src = data.image;
        mainImg.style.opacity = '1';
        mainImg.style.transform = 'scale(1)';
      }, 200);

      if (tagEl) tagEl.textContent = data.tag;
      if (titleEl) titleEl.textContent = data.title;
      if (destEl) destEl.textContent = data.destination;
      if (descEl) descEl.textContent = data.description;
      if (priceEl) priceEl.textContent = data.price;
      if (durationEl) durationEl.textContent = data.duration;

      if (inclusionsList) {
        inclusionsList.innerHTML = data.inclusions.map(inc => `
          <li class="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200">
            <i class="fa-solid fa-circle-check text-[#9E6738] text-sm shrink-0"></i>
            <span>${inc}</span>
          </li>
        `).join('');
      }

      if (bookBtn) {
        bookBtn.setAttribute('onclick', `openBookingModal('${data.packageId}')`);
      }
      if (detailsBtn) {
        detailsBtn.setAttribute('onclick', `openPackageDetail('${data.packageId}')`);
      }
    });
  });
}

function initScrollAnimations() {
  const elements = document.querySelectorAll('.h2-reveal, .h2-reveal-left, .h2-reveal-right, .h2-reveal-scale');
  if (!elements.length) return;

  function revealAll() {
    elements.forEach(el => el.classList.add('visible'));
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '100px 0px 50px 0px',
      threshold: 0.05
    });

    elements.forEach(el => observer.observe(el));

    setTimeout(() => {
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 1.5) {
          el.classList.add('visible');
        }
      });
    }, 400);
  } else {
    revealAll();
  }
}

=======
﻿document.addEventListener('DOMContentLoaded', () => {
  initCosmicIntroOverlay();
  initHeroDestinationSwitcher();
  initAtelierTabs();
  initMapCoordinates();
  initMagazineSpotlight();
  initScrollAnimations();
  initHeaderScrollFit();
});

function initHeaderScrollFit() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = () => {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
    if (scrollPos > 15) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  document.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();
}

function initHeroDestinationSwitcher() {
  const slides = document.querySelectorAll('.h2-hero-slide');
  const pills = document.querySelectorAll('.h2-dest-pill');
  if (!slides.length || slides.length <= 1) return;

  let currentIdx = 0;
  let timer = null;
  const slideDuration = 6000;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
    if (pills && pills.length) {
      pills.forEach((pill, i) => {
        pill.classList.toggle('active', i === idx);
      });
    }
    currentIdx = idx;
  }

  function nextSlide() {
    const next = (currentIdx + 1) % slides.length;
    showSlide(next);
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, slideDuration);
  }

  if (pills && pills.length) {
    pills.forEach((pill, index) => {
      pill.addEventListener('click', () => {
        showSlide(index);
        startTimer();
      });
    });
  }

  startTimer();
}

function handleHome2QuickPlanner(event) {
  if (event) event.preventDefault();
  const destInput = document.getElementById('h2-plan-dest-input')?.value;
  const destSelect = document.getElementById('h2-plan-dest')?.value;
  const dest = destInput || destSelect || 'all';
  const style = document.getElementById('h2-plan-budget')?.value || document.getElementById('h2-plan-style')?.value || 'all';

  if (typeof showToast === 'function') {
    showToast(`Searching curated sanctuaries for ${dest.toUpperCase()}...`, 'fa-compass');
  }

  setTimeout(() => {
    window.location.href = `packages.html?dest=${encodeURIComponent(dest)}&style=${encodeURIComponent(style)}`;
  }, 900);
}

const ATELIER_DATA = [
  {
    title: "Direct Reef Seaplane & Private Aviation",
    tagline: "Amphibious flight transfers with zero terminal queues",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=85",
    coord: "03°12'N - Baa Atoll UNESCO",
    inclusions: "Direct lagoon water-landing - No tarmac transit - VIP lounge greeting",
    quote: "Our seaplane touched down on the private villa lagoon before commercial travelers had even cleared mainland luggage.",
    traveler: "Lord & Lady Harrington - London",
    packageId: "pkg-intl-maldives"
  },
  {
    title: "Cantilevered Overwater Ocean Sanctuaries",
    tagline: "Unobstructed sunset horizons with glass-floor viewing chambers",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=85",
    coord: "04°18'N - North Malé Atoll",
    inclusions: "Private 18m freshwater infinity pool - Sommelier wine vault - Stargazing deck",
    quote: "Waking up to the sapphire water right beneath our bed with our island host bringing fresh passionfruit was pure paradise.",
    traveler: "Sophia Vance & Julian Reed - Zurich",
    packageId: "pkg-intl-maldives"
  },
  {
    title: "First-Class Glacier Rail & Alpine Chalets",
    tagline: "Panoramic glass-domed rail suites across snow-crested peaks",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1600&q=85",
    coord: "46°30'N - St. Moritz & Zermatt",
    inclusions: "Heated boot rooms - Fireside sommelier pairings - Heliski private glacier access",
    quote: "Glacier Express Excellence Class with Travique's private reservations took all the friction out of luxury European rail.",
    traveler: "Dr. Arvind & Neha Sharma - San Jose",
    packageId: "pkg-intl-swiss"
  },
  {
    title: "Curated Superyacht & Catamaran Charters",
    tagline: "Secluded crystalline bays and private diving master expeditions",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1600&q=85",
    coord: "36°25'N - Aegean & Cyclades",
    inclusions: "65ft Sunreef Catamaran - On-board private executive chef - Night diving gear",
    quote: "Mooring at sunset off volcanic cliffs while our chef prepared fresh grilled sea bass on deck is a memory of a lifetime.",
    traveler: "Camille Dupont - Paris",
    packageId: "pkg-intl-santorini"
  }
];

function initAtelierTabs() {
  const items = document.querySelectorAll('.h2-atelier-item');
  const bgImg = document.getElementById('h2-atelier-preview-img');
  const titleEl = document.getElementById('h2-atelier-preview-title');
  const coordEl = document.getElementById('h2-atelier-preview-coord');
  const inclusionsEl = document.getElementById('h2-atelier-preview-inclusions');
  const quoteEl = document.getElementById('h2-atelier-preview-quote');
  const travelerEl = document.getElementById('h2-atelier-preview-traveler');
  const bookBtn = document.getElementById('h2-atelier-book-btn');

  if (!items.length || !bgImg) return;

  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      items.forEach(it => it.classList.remove('active'));
      item.classList.add('active');

      const data = ATELIER_DATA[index];
      if (!data) return;

      bgImg.style.opacity = '0.3';
      bgImg.style.transform = 'scale(1.05)';
      setTimeout(() => {
        bgImg.src = data.image;
        bgImg.style.opacity = '1';
        bgImg.style.transform = 'scale(1)';
      }, 250);

      if (titleEl) titleEl.textContent = data.title;
      if (coordEl) coordEl.textContent = data.coord;
      if (inclusionsEl) inclusionsEl.textContent = data.inclusions;
      if (quoteEl) quoteEl.textContent = `"${data.quote}"`;
      if (travelerEl) travelerEl.textContent = data.traveler;
      if (bookBtn) {
        bookBtn.setAttribute('onclick', `openBookingModal('${data.packageId}')`);
      }
    });
  });
}

function initMapCoordinates() {

  const statsSection = document.getElementById('h2-horizons');
  if (!statsSection) return;

  let countersAnimated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.25 });

  observer.observe(statsSection);
}

function animateCounters() {
  const counters = [
    { id: 'counter-miles', target: 120000, suffix: '+ Nautical Miles', formatComma: true },
    { id: 'counter-ontime', target: 99.8, suffix: '% Dispatch Rate', decimal: 1 },
    { id: 'counter-rating', target: 4.98, suffix: ' / 5.0 Rating', decimal: 2 },
    { id: 'counter-butlers', target: 24, suffix: ' / 7 VIP Concierge', prefix: '' }
  ];

  counters.forEach(item => {
    const el = document.getElementById(item.id);
    if (!el) return;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const currentVal = start + (item.target - start) * ease;

      let displayStr = '';
      if (item.decimal) {
        displayStr = currentVal.toFixed(item.decimal);
      } else if (item.formatComma) {
        displayStr = Math.floor(currentVal).toLocaleString('en-US');
      } else {
        displayStr = Math.floor(currentVal).toString();
      }

      el.textContent = `${displayStr}`;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  });
}

function focusMapPin(index) {
  const pins = document.querySelectorAll('.h2-map-pin');
  if (!pins.length || !pins[index]) return;

  pins.forEach(p => p.classList.remove('active'));
  pins[index].classList.add('active');

  pins[index].scrollIntoView({ behavior: 'smooth', block: 'center' });

  setTimeout(() => {
    pins[index].classList.remove('active');
  }, 4500);
}

const SPOTLIGHT_DATA = [
  {
    title: "Baa Atoll Overwater Royal Sanctuary",
    destination: "Maldives - UNESCO Biosphere Reserve",
    price: "$4,850",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85",
    tag: "FEATURED FLAGSHIP",
    badge: "Bespoke Overwater",
    description: "Suspended over turquoise coral waters with a glass-bottom floor, dedicated butler, private seaplane transfers, and underwater wine cellar access.",
    inclusions: [
      "Complimentary Trans Maldivian Seaplane transfers",
      "24/7 dedicated Island Host & sommelier service",
      "Private manta ray snorkeling safari with resident marine biologist",
      "Champagne sunset dinner cruise on private catamaran"
    ],
    packageId: "pkg-intl-maldives"
  },
  {
    title: "St. Moritz Glacier & Chalet Sanctuary",
    destination: "Engadin Valley - Switzerland",
    price: "$3,420",
    duration: "6 Days / 5 Nights",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=85",
    tag: "ALPINE PRESTIGE",
    badge: "Glacier First-Class",
    description: "Panoramic first-class railway passes, ski-in/ski-out private chalet suites with crackling stone fireplaces, and Michelin-starred alpine fondue dining.",
    inclusions: [
      "Glacier Express Excellence Class panoramic carriage tickets",
      "Private ski concierge & heated slope equipment valet",
      "Sommelier cellar tasting with Swiss alpine cheeses",
      "Helicopter tour over the iconic Matterhorn peak"
    ],
    packageId: "pkg-intl-swiss"
  },
  {
    title: "Oia Sunset Caldera Cliffside Haven",
    destination: "Santorini - Greek Cyclades",
    price: "$2,980",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=85",
    tag: "ROMANTIC HORIZON",
    badge: "Cliffside Caldera",
    description: "Carved into the sun-drenched volcanic cliffs of Oia with an infinity plunge pool framing the Aegean sunset, daily champagne breakfast, and private catamaran cruise.",
    inclusions: [
      "Private Mercedes VIP airport & port chauffeur transfer",
      "Sunset catamaran cruise to volcanic hot springs with BBQ feast",
      "Private Greek wine tasting tour in Megalochori vineyard",
      "Caldera-edge candlelight 5-course romantic dinner"
    ],
    packageId: "pkg-intl-santorini"
  },
  {
    title: "Aman Forest Ryokan & Imperial Shinkansen",
    destination: "Kyoto & Tokyo - Japan",
    price: "$3,650",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85",
    tag: "HERITAGE SANCTUARY",
    badge: "Imperial Heritage",
    description: "Hidden inside the ancient maple and moss gardens of Mount Hidari Daimonji with private natural onsen spring baths and private Shinkansen bullet train Gran Class.",
    inclusions: [
      "Shinkansen Gran Class Tokyo-Kyoto bullet train passes",
      "Private traditional tea master ceremony in hidden 400-yr garden",
      "Private cedarwood hot onsen bath suite with garden vistas",
      "Multi-course Kaiseki dining prepared by master chef"
    ],
    packageId: "pkg-intl-kyoto"
  }
];

function initMagazineSpotlight() {
  const playlistItems = document.querySelectorAll('.h2-playlist-item');
  const mainImg = document.getElementById('h2-spotlight-img');
  const tagEl = document.getElementById('h2-spotlight-tag');
  const titleEl = document.getElementById('h2-spotlight-title');
  const destEl = document.getElementById('h2-spotlight-dest');
  const descEl = document.getElementById('h2-spotlight-desc');
  const priceEl = document.getElementById('h2-spotlight-price');
  const durationEl = document.getElementById('h2-spotlight-duration');
  const inclusionsList = document.getElementById('h2-spotlight-inclusions');
  const bookBtn = document.getElementById('h2-spotlight-book-btn');
  const detailsBtn = document.getElementById('h2-spotlight-details-btn');

  if (!playlistItems.length || !mainImg) return;

  playlistItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      playlistItems.forEach(it => it.classList.remove('active'));
      item.classList.add('active');

      const data = SPOTLIGHT_DATA[index];
      if (!data) return;

      mainImg.style.opacity = '0.3';
      mainImg.style.transform = 'scale(1.04)';
      setTimeout(() => {
        mainImg.src = data.image;
        mainImg.style.opacity = '1';
        mainImg.style.transform = 'scale(1)';
      }, 200);

      if (tagEl) tagEl.textContent = data.tag;
      if (titleEl) titleEl.textContent = data.title;
      if (destEl) destEl.textContent = data.destination;
      if (descEl) descEl.textContent = data.description;
      if (priceEl) priceEl.textContent = data.price;
      if (durationEl) durationEl.textContent = data.duration;

      if (inclusionsList) {
        inclusionsList.innerHTML = data.inclusions.map(inc => `
          <li class="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200">
            <i class="fa-solid fa-circle-check text-[#9E6738] text-sm shrink-0"></i>
            <span>${inc}</span>
          </li>
        `).join('');
      }

      if (bookBtn) {
        bookBtn.setAttribute('onclick', `openBookingModal('${data.packageId}')`);
      }
      if (detailsBtn) {
        detailsBtn.setAttribute('onclick', `openPackageDetail('${data.packageId}')`);
      }
    });
  });
}

function initScrollAnimations() {
  const elements = document.querySelectorAll('.h2-reveal, .h2-reveal-left, .h2-reveal-right, .h2-reveal-scale');
  if (!elements.length) return;

  function revealAll() {
    elements.forEach(el => el.classList.add('visible'));
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '100px 0px 50px 0px',
      threshold: 0.05
    });

    elements.forEach(el => observer.observe(el));

    setTimeout(() => {
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 1.5) {
          el.classList.add('visible');
        }
      });
    }, 400);
  } else {
    revealAll();
  }
}

>>>>>>> 107638ee6bc6b2e4c7a4a43a5f47d9382c9597dd
let traviqueIntroTimer = null;

function dismissTraviqueIntro() {
  const overlay = document.getElementById('travique-intro-overlay');
  if (!overlay || overlay.classList.contains('intro-exiting')) return;
  overlay.classList.add('intro-exiting');
  if (traviqueIntroTimer) {
    clearTimeout(traviqueIntroTimer);
    traviqueIntroTimer = null;
  }
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 900);
}

function initCosmicIntroOverlay() {
  const overlay = document.getElementById('travique-intro-overlay');
  if (!overlay) return;

  const canvas = document.getElementById('intro-star-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);

    let displayW = window.innerWidth;
    let displayH = window.innerHeight;

    const stars = [];
    const numStars = Math.min(180, Math.floor(displayW / 8));
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * displayW,
        y: Math.random() * (displayH * 0.72),
        radius: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2
      });
    }

    let animId;
    function draw() {
      if (overlay.classList.contains('intro-exiting') && overlay.style.display === 'none') {
        cancelAnimationFrame(animId);
        return;
      }
      ctx.clearRect(0, 0, displayW, displayH);
      stars.forEach(s => {
        s.phase += s.speed;
        const currentAlpha = Math.sin(s.phase) * 0.4 + 0.6;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, ' + (s.alpha * currentAlpha) + ')';
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    }
    draw();

    window.addEventListener('resize', () => {
      displayW = window.innerWidth;
      displayH = window.innerHeight;
      const newDpr = window.devicePixelRatio || 1;
      canvas.width = displayW * newDpr;
      canvas.height = displayH * newDpr;
      ctx.scale(newDpr, newDpr);
    }, { passive: true });
  }

  traviqueIntroTimer = setTimeout(dismissTraviqueIntro, 3300);
}