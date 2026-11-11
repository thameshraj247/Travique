<<<<<<< HEAD
﻿document.addEventListener('DOMContentLoaded', () => {
  if (typeof renderAllHolidayPackages === 'function') {
    renderAllHolidayPackages('all');
  }
  initPackageCategoryFilters();
  initPackageSort();
  setTimeout(initPackageScrollEffects, 100);
});

window.filterPackagesTab = function(category, btn) {
  const filterBtns = document.querySelectorAll('.package-filter-btn');
  filterBtns.forEach(b => {
    b.classList.remove('active', 'bg-[#1A3B55]', 'text-white', 'border-[#9E6738]');
    b.classList.add('bg-white', 'dark:bg-ocean-900', 'text-slate-700', 'dark:text-slate-300');
  });
  if (btn) {
    btn.classList.add('active', 'bg-[#1A3B55]', 'text-white', 'border-[#9E6738]');
    btn.classList.remove('bg-white', 'dark:bg-ocean-900', 'text-slate-700', 'dark:text-slate-300');
  }

  if (typeof renderAllHolidayPackages === 'function') {
    renderAllHolidayPackages(category);
  }
};

function initPackageCategoryFilters() {
  const filterBtns = document.querySelectorAll('.package-filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

function initPackageSort() {
  const sortSelect = document.getElementById('package-sort-select');
  const container = document.getElementById('packages-grid') || document.getElementById('all-packages-grid');
  if (!sortSelect || !container) return;

  sortSelect.addEventListener('change', () => {
    const val = sortSelect.value;
    const cards = Array.from(container.children);

    cards.sort((a, b) => {
      const priceA = parseInt(a.getAttribute('data-price') || '0', 10);
      const priceB = parseInt(b.getAttribute('data-price') || '0', 10);
      if (val === 'price-low') return priceA - priceB;
      if (val === 'price-high') return priceB - priceA;
      return 0;
    });

    cards.forEach(card => container.appendChild(card));
  });
}

function initPackageScrollEffects() {
  const elements = document.querySelectorAll(
    '#packages-catalog, #packages-inclusions, #packages-comparison, #packages-guarantee, #packages-cta, .travel-card, #packages-comparison .rounded-3xl'
  );
  if (!elements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    elements.forEach((el, idx) => {
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.transitionDelay = `${(idx % 4) * 80}ms`;
      observer.observe(el);
    });
  }
}

const PKG_HERO_DATA = [
  {
    bg: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85",
    badge: "Signature Romantic Honeymoon",
    duration: "7 Days / 6 Nights",
    title: "Maldives Overwater Sanctuary - Baa Atoll",
    desc: "Private seaplane flights from Malé directly to your overwater glass villa. Complimentary champagne sunset cruises, manta ray snorkeling, and 24/7 dedicated private butler.",
    price: "$4,850",
    pkgId: "pkg-intl-maldives",
    highlights: ["Private Seaplane Flights", "Submerged Wine Cellar", "Manta Biosphere Safari"]
  },
  {
    bg: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=2000&q=85",
    badge: "Alpine Winter & Glacier Wonder",
    duration: "8 Days / 7 Nights",
    title: "Swiss Alps & Glacier Express Chalet",
    desc: "1st class panoramic rail journeys through Swiss snowscapes, private chalet stays with heated outdoor whirlpools facing the Matterhorn, and ski-butler logistics.",
    price: "$5,400",
    pkgId: "pkg-intl-swiss",
    highlights: ["Glacier Express 1st Class", "Heated Alpine Whirlpool", "Private Ski Butler"]
  },
  {
    bg: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2000&q=85",
    badge: "Mediterranean Romance & Riviera",
    duration: "6 Days / 5 Nights",
    title: "Amalfi Coast & Positano Clifftop Sanctuary",
    desc: "Private Riva yacht cruise to the Isle of Capri, cliffside infinity pool suites overlooking the Gulf of Salerno, and Michelin-starred private lemon orchard dining.",
    price: "$6,150",
    pkgId: "pkg-intl-amalfi",
    highlights: ["Private Riva Boat Charter", "Capri Blue Grotto Tour", "Michelin Dining Included"]
  },
  {
    bg: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=85",
    badge: "Royal Heritage & Palaces",
    duration: "5 Days / 4 Nights",
    title: "Royal Rajasthan & Lake Pichola Palaces",
    desc: "Floating royal suites on Lake Pichola, vintage Rolls Royce airport transfers, private evening folk performances at Jagmandir Island, and private butler service.",
    price: "$3,650",
    pkgId: "pkg-dom-udaipur",
    highlights: ["Vintage Rolls Royce Escort", "Jagmandir Private Sunset", "Taj Lake Palace Suite"]
  }
];

function selectPkgHeroSlide(idx) {
  const item = PKG_HERO_DATA[idx];
  if (!item) return;

  const thumbs = document.querySelectorAll('#pkg-hero-thumbnails .pkg-hero-thumb');
  thumbs.forEach((thumb, i) => {
    if (i === idx) {
      thumb.classList.add('border-[#DEB17E]', 'ring-2', 'ring-[#DEB17E]/50', 'scale-105');
      thumb.classList.remove('border-white/20');
    } else {
      thumb.classList.remove('border-[#DEB17E]', 'ring-2', 'ring-[#DEB17E]/50', 'scale-105');
      thumb.classList.add('border-white/20');
    }
  });

  const card = document.getElementById('pkg-hero-details-card');
  if (card) {
    card.style.opacity = '0.35';
    card.style.transform = 'translateY(6px)';

    setTimeout(() => {
      const badgeEl = document.getElementById('pkg-hero-badge');
      if (badgeEl) badgeEl.textContent = item.badge;
      const durEl = document.getElementById('pkg-hero-duration');
      if (durEl) durEl.innerHTML = `<i class="fa-solid fa-moon text-[#DEB17E] mr-1"></i>${item.duration}`;
      const titleEl = document.getElementById('pkg-hero-title');
      if (titleEl) titleEl.textContent = item.title;
      const descEl = document.getElementById('pkg-hero-desc');
      if (descEl) descEl.textContent = item.desc;
      const priceEl = document.getElementById('pkg-hero-price');
      if (priceEl) priceEl.textContent = item.price;

      const highlightsEl = document.getElementById('pkg-hero-highlights');
      if (highlightsEl) {
        highlightsEl.innerHTML = item.highlights.map(h => `<span class="flex items-center gap-1"><i class="fa-solid fa-check"></i> ${h}</span>`).join('');
      }

      const btn = document.getElementById('pkg-hero-explore-btn');
      if (btn) {
        btn.setAttribute('onclick', `openPackageDetailModal('${item.pkgId}')`);
      }

      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 180);
  }

  const heroImg = document.querySelector('#packages-hero > img');
  if (heroImg && item.bg) {
    heroImg.style.transition = 'opacity 0.4s ease';
    heroImg.style.opacity = '0.3';
    setTimeout(() => {
      heroImg.src = item.bg;
      heroImg.style.opacity = '1';
    }, 220);
  }
}
window.selectPkgHeroSlide = selectPkgHeroSlide;
=======
﻿document.addEventListener('DOMContentLoaded', () => {
  if (typeof renderAllHolidayPackages === 'function') {
    renderAllHolidayPackages('all');
  }
  initPackageCategoryFilters();
  initPackageSort();
  setTimeout(initPackageScrollEffects, 100);
});

window.filterPackagesTab = function(category, btn) {
  const filterBtns = document.querySelectorAll('.package-filter-btn');
  filterBtns.forEach(b => {
    b.classList.remove('active', 'bg-[#1A3B55]', 'text-white', 'border-[#9E6738]');
    b.classList.add('bg-white', 'dark:bg-ocean-900', 'text-slate-700', 'dark:text-slate-300');
  });
  if (btn) {
    btn.classList.add('active', 'bg-[#1A3B55]', 'text-white', 'border-[#9E6738]');
    btn.classList.remove('bg-white', 'dark:bg-ocean-900', 'text-slate-700', 'dark:text-slate-300');
  }

  if (typeof renderAllHolidayPackages === 'function') {
    renderAllHolidayPackages(category);
  }
};

function initPackageCategoryFilters() {
  const filterBtns = document.querySelectorAll('.package-filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

function initPackageSort() {
  const sortSelect = document.getElementById('package-sort-select');
  const container = document.getElementById('packages-grid') || document.getElementById('all-packages-grid');
  if (!sortSelect || !container) return;

  sortSelect.addEventListener('change', () => {
    const val = sortSelect.value;
    const cards = Array.from(container.children);

    cards.sort((a, b) => {
      const priceA = parseInt(a.getAttribute('data-price') || '0', 10);
      const priceB = parseInt(b.getAttribute('data-price') || '0', 10);
      if (val === 'price-low') return priceA - priceB;
      if (val === 'price-high') return priceB - priceA;
      return 0;
    });

    cards.forEach(card => container.appendChild(card));
  });
}

function initPackageScrollEffects() {
  const elements = document.querySelectorAll(
    '#packages-catalog, #packages-inclusions, #packages-comparison, #packages-guarantee, #packages-cta, .travel-card, #packages-comparison .rounded-3xl'
  );
  if (!elements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    elements.forEach((el, idx) => {
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.transitionDelay = `${(idx % 4) * 80}ms`;
      observer.observe(el);
    });
  }
}

const PKG_HERO_DATA = [
  {
    bg: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85",
    badge: "Signature Romantic Honeymoon",
    duration: "7 Days / 6 Nights",
    title: "Maldives Overwater Sanctuary - Baa Atoll",
    desc: "Private seaplane flights from Malé directly to your overwater glass villa. Complimentary champagne sunset cruises, manta ray snorkeling, and 24/7 dedicated private butler.",
    price: "$4,850",
    pkgId: "pkg-intl-maldives",
    highlights: ["Private Seaplane Flights", "Submerged Wine Cellar", "Manta Biosphere Safari"]
  },
  {
    bg: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=2000&q=85",
    badge: "Alpine Winter & Glacier Wonder",
    duration: "8 Days / 7 Nights",
    title: "Swiss Alps & Glacier Express Chalet",
    desc: "1st class panoramic rail journeys through Swiss snowscapes, private chalet stays with heated outdoor whirlpools facing the Matterhorn, and ski-butler logistics.",
    price: "$5,400",
    pkgId: "pkg-intl-swiss",
    highlights: ["Glacier Express 1st Class", "Heated Alpine Whirlpool", "Private Ski Butler"]
  },
  {
    bg: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2000&q=85",
    badge: "Mediterranean Romance & Riviera",
    duration: "6 Days / 5 Nights",
    title: "Amalfi Coast & Positano Clifftop Sanctuary",
    desc: "Private Riva yacht cruise to the Isle of Capri, cliffside infinity pool suites overlooking the Gulf of Salerno, and Michelin-starred private lemon orchard dining.",
    price: "$6,150",
    pkgId: "pkg-intl-amalfi",
    highlights: ["Private Riva Boat Charter", "Capri Blue Grotto Tour", "Michelin Dining Included"]
  },
  {
    bg: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=85",
    badge: "Royal Heritage & Palaces",
    duration: "5 Days / 4 Nights",
    title: "Royal Rajasthan & Lake Pichola Palaces",
    desc: "Floating royal suites on Lake Pichola, vintage Rolls Royce airport transfers, private evening folk performances at Jagmandir Island, and private butler service.",
    price: "$3,650",
    pkgId: "pkg-dom-udaipur",
    highlights: ["Vintage Rolls Royce Escort", "Jagmandir Private Sunset", "Taj Lake Palace Suite"]
  }
];

function selectPkgHeroSlide(idx) {
  const item = PKG_HERO_DATA[idx];
  if (!item) return;

  const thumbs = document.querySelectorAll('#pkg-hero-thumbnails .pkg-hero-thumb');
  thumbs.forEach((thumb, i) => {
    if (i === idx) {
      thumb.classList.add('border-[#DEB17E]', 'ring-2', 'ring-[#DEB17E]/50', 'scale-105');
      thumb.classList.remove('border-white/20');
    } else {
      thumb.classList.remove('border-[#DEB17E]', 'ring-2', 'ring-[#DEB17E]/50', 'scale-105');
      thumb.classList.add('border-white/20');
    }
  });

  const card = document.getElementById('pkg-hero-details-card');
  if (card) {
    card.style.opacity = '0.35';
    card.style.transform = 'translateY(6px)';

    setTimeout(() => {
      const badgeEl = document.getElementById('pkg-hero-badge');
      if (badgeEl) badgeEl.textContent = item.badge;
      const durEl = document.getElementById('pkg-hero-duration');
      if (durEl) durEl.innerHTML = `<i class="fa-solid fa-moon text-[#DEB17E] mr-1"></i>${item.duration}`;
      const titleEl = document.getElementById('pkg-hero-title');
      if (titleEl) titleEl.textContent = item.title;
      const descEl = document.getElementById('pkg-hero-desc');
      if (descEl) descEl.textContent = item.desc;
      const priceEl = document.getElementById('pkg-hero-price');
      if (priceEl) priceEl.textContent = item.price;

      const highlightsEl = document.getElementById('pkg-hero-highlights');
      if (highlightsEl) {
        highlightsEl.innerHTML = item.highlights.map(h => `<span class="flex items-center gap-1"><i class="fa-solid fa-check"></i> ${h}</span>`).join('');
      }

      const btn = document.getElementById('pkg-hero-explore-btn');
      if (btn) {
        btn.setAttribute('onclick', `openPackageDetailModal('${item.pkgId}')`);
      }

      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 180);
  }

  const heroImg = document.querySelector('#packages-hero > img');
  if (heroImg && item.bg) {
    heroImg.style.transition = 'opacity 0.4s ease';
    heroImg.style.opacity = '0.3';
    setTimeout(() => {
      heroImg.src = item.bg;
      heroImg.style.opacity = '1';
    }, 220);
  }
}
window.selectPkgHeroSlide = selectPkgHeroSlide;
>>>>>>> 107638ee6bc6b2e4c7a4a43a5f47d9382c9597dd
