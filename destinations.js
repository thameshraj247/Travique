<<<<<<< HEAD
﻿document.addEventListener('DOMContentLoaded', () => {
  initHeroSlideshow();
  initDestinationFilters();
  initDestinationSearch();
  initDestinationScrollEffects();
  setTimeout(() => applyAllDestinationFilters(), 100);
});

let heroCurrentIndex = 0;
let heroSlideTimer = null;
const HERO_AUTO_INTERVAL = 4500;

function initHeroSlideshow() {
  const slides = document.querySelectorAll('.dest-hero-slide');
  const dotsContainer = document.getElementById('hero-slider-dots');
  const container = document.getElementById('dest-hero-slideshow');
  if (!slides.length) return;

  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `w-2 h-2 rounded-full transition-all duration-300 ${idx === 0 ? 'bg-[#9E6738] w-6' : 'bg-slate-300 dark:bg-slate-700 hover:bg-[#9E6738]/60'}`;
      dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
      dot.onclick = () => goToHeroSlide(idx);
      dotsContainer.appendChild(dot);
    });
  }

  updateHeroSlideUI(0);

  startHeroTimer();

  const heroSection = document.getElementById('destinations-hero') || container;
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopHeroTimer);
    heroSection.addEventListener('mouseleave', startHeroTimer);
  }
}

function startHeroTimer() {
  stopHeroTimer();
  heroSlideTimer = setInterval(() => {
    nextHeroSlide();
  }, HERO_AUTO_INTERVAL);
}

function stopHeroTimer() {
  if (heroSlideTimer) {
    clearInterval(heroSlideTimer);
    heroSlideTimer = null;
  }
}

function updateHeroSlideUI(index) {
  const slides = document.querySelectorAll('.dest-hero-slide');
  const total = slides.length;
  if (!total) return;

  heroCurrentIndex = (index + total) % total;

  slides.forEach((slide, idx) => {
    if (idx === heroCurrentIndex) {
      slide.classList.add('active');
      slide.style.opacity = '1';
      slide.style.zIndex = '10';
      slide.style.pointerEvents = 'auto';

      const caption = slide.getAttribute('data-caption');
      const captionEl = document.getElementById('hero-slide-caption');
      if (captionEl && caption) {
        captionEl.innerHTML = caption;
      }
    } else {
      slide.classList.remove('active');
      slide.style.opacity = '0';
      slide.style.zIndex = '0';
      slide.style.pointerEvents = 'none';
    }
  });

  const counterEl = document.getElementById('hero-slide-num');
  if (counterEl) {
    const formattedCurrent = String(heroCurrentIndex + 1).padStart(2, '0');
    const formattedTotal = String(total).padStart(2, '0');
    counterEl.textContent = `${formattedCurrent} / ${formattedTotal}`;
  }

  const dots = document.querySelectorAll('#hero-slider-dots button');
  dots.forEach((dot, idx) => {
    if (idx === heroCurrentIndex) {
      dot.className = 'w-6 h-2 rounded-full bg-[#9E6738] dark:bg-[#DEB17E] transition-all duration-300';
    } else {
      dot.className = 'w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 hover:bg-[#9E6738]/60 transition-all duration-300';
    }
  });
}

function nextHeroSlide() {
  updateHeroSlideUI(heroCurrentIndex + 1);
}

function prevHeroSlide() {
  updateHeroSlideUI(heroCurrentIndex - 1);
}

function goToHeroSlide(index) {
  updateHeroSlideUI(index);
  startHeroTimer();
}

window.nextHeroSlide = nextHeroSlide;
window.prevHeroSlide = prevHeroSlide;
window.goToHeroSlide = goToHeroSlide;

function initDestinationFilters() {
  const filterBtns = document.querySelectorAll('#destinations-filter-chips .destination-filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyAllDestinationFilters();
    });
  });
}

function initDestinationSearch() {
  const searchInput = document.getElementById('dest-search-input') || document.querySelector('input[placeholder*="Search destinations"]');
  const cards = document.querySelectorAll('.destination-card');
  if (!searchInput || !cards.length) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    cards.forEach(card => {
      const title = card.querySelector('h3, h4')?.textContent.toLowerCase() || '';
      const text = card.textContent.toLowerCase();
      if (!query || title.includes(query) || text.includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

function toggleDestinationFilterPanel(forceState) {
  const sidebar = document.getElementById('dest-filter-sidebar');
  const toggleBtn = document.getElementById('dest-filter-toggle-btn');
  const chevron = document.getElementById('dest-filter-chevron');
  const grid = document.getElementById('destinations-grid');
  const quickBtnText = document.getElementById('dest-filter-quick-text');

  if (!sidebar) return;

  const isCurrentlyOpen = !sidebar.classList.contains('hidden');
  const shouldOpen = forceState !== undefined ? forceState : !isCurrentlyOpen;

  if (shouldOpen) {
    sidebar.classList.remove('hidden');
    sidebar.classList.add('animate-fadeIn');
    if (toggleBtn) {
      toggleBtn.classList.add('active');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
    if (chevron) {
      chevron.classList.add('rotate-180');
    }
    if (grid) {
      grid.classList.remove('lg:grid-cols-3');
      grid.classList.add('xl:grid-cols-2');
    }
    if (quickBtnText) {
      quickBtnText.textContent = 'Hide Filters';
    }

    if (window.innerWidth < 1024 && forceState === undefined) {
      sidebar.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  } else {
    sidebar.classList.add('hidden');
    sidebar.classList.remove('animate-fadeIn');
    if (toggleBtn) {
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
    if (chevron) {
      chevron.classList.remove('rotate-180');
    }
    if (grid) {
      grid.classList.remove('xl:grid-cols-2');
      grid.classList.add('lg:grid-cols-3');
    }
    if (quickBtnText) {
      quickBtnText.textContent = 'Show Filters';
    }
  }
}
window.toggleDestinationFilterPanel = toggleDestinationFilterPanel;

function updateActiveFilterBadge() {
  const badge = document.getElementById('dest-filter-badge');
  const purposeChecked = document.querySelectorAll('input[name="travel-purpose"]:checked').length;
  const catChecked = document.querySelectorAll('input[name="category"]:checked').length;
  const guestChecked = document.querySelectorAll('input[name="guests"]:checked').length;
  const amenityChecked = document.querySelectorAll('input[name="amenity"]:checked').length;
  const priceSlider = document.getElementById('price-range-slider');
  const isPriceModified = priceSlider && Number(priceSlider.value) < 15000 ? 1 : 0;

  const total = purposeChecked + catChecked + guestChecked + amenityChecked + isPriceModified;
  if (badge) {
    if (total > 0) {
      badge.textContent = total;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }
}

function filterDestinationsTab(filter, btn) {
  const filterBtns = document.querySelectorAll('#destinations-filter-chips .destination-filter-btn');
  filterBtns.forEach(b => b.classList.remove('active'));

  if (btn) {
    btn.classList.add('active');
  } else if (filter) {
    filterBtns.forEach(b => {
      const txt = b.textContent.toLowerCase();
      if ((filter.toLowerCase() === 'all' && txt.includes('all')) || txt.includes(filter.toLowerCase())) {
        b.classList.add('active');
      }
    });
  }

  applyAllDestinationFilters();
}
window.filterDestinationsTab = filterDestinationsTab;

function toggleFilterGroup(btn) {
  const content = btn.parentElement.querySelector('.filter-content');
  const icon = btn.querySelector('i');
  if (!content) return;
  content.classList.toggle('hidden');
  if (icon) {
    icon.classList.toggle('rotate-180');
  }
}
window.toggleFilterGroup = toggleFilterGroup;

function updatePriceSlider(val) {
  const maxDisplay = document.getElementById('price-max-display');
  if (maxDisplay) {
    maxDisplay.textContent = `$${Number(val).toLocaleString()} / ₹${Number(val).toLocaleString()}`;
  }
  applyAllDestinationFilters();
}
window.updatePriceSlider = updatePriceSlider;

const defaultDestinationsCatalog = [
  {
    id: "dest-swiss",
    name: "Swiss Alps & Lake Lucerne",
    country: "Switzerland",
    category: "Europe",
    image: "card-swiss-matterhorn.jpg",
    bestSeason: "Dec - Mar / Jun - Sep",
    temp: "18°C / 2°C",
    highlights: "Matterhorn, Glacier Express, Interlaken, Lake Brienz",
    packageTarget: "pkg-intl-swiss"
  },
  {
    id: "dest-santorini",
    name: "Santorini & Mykonos Caldera",
    country: "Greece",
    category: "Europe",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    bestSeason: "May - Oct (Warm Aegean)",
    temp: "27°C Coastal",
    highlights: "Caldera Cave Suites, Sunset Catamarans, Greek Tavernas",
    packageTarget: "pkg-hm-santorini"
  },
  {
    id: "dest-paris-rome",
    name: "Paris, Venice & Rome Grand Tour",
    country: "France & Italy",
    category: "Europe",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    bestSeason: "Apr - Jun / Sep - Oct",
    temp: "21°C Mild",
    highlights: "Eiffel Summit, Grand Canal Gondolas, Colosseum VIP",
    packageTarget: "pkg-intl-paris-rome"
  },
  {
    id: "dest-amalfi",
    name: "Amalfi Coast & Positano Clifftop",
    country: "Italy",
    category: "Europe",
    image: "dest-amalfi.jpg",
    bestSeason: "May - Sep (Sunny Mediterranean)",
    temp: "26°C Coastal",
    highlights: "Private Riva Yacht, Ravello Gardens, Limoncello Terraces",
    packageTarget: "pkg-intl-swiss"
  },
=======
﻿document.addEventListener('DOMContentLoaded', () => {
  initHeroSlideshow();
  initDestinationFilters();
  initDestinationSearch();
  initDestinationScrollEffects();
  setTimeout(() => applyAllDestinationFilters(), 100);
});

let heroCurrentIndex = 0;
let heroSlideTimer = null;
const HERO_AUTO_INTERVAL = 4500;

function initHeroSlideshow() {
  const slides = document.querySelectorAll('.dest-hero-slide');
  const dotsContainer = document.getElementById('hero-slider-dots');
  const container = document.getElementById('dest-hero-slideshow');
  if (!slides.length) return;

  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `w-2 h-2 rounded-full transition-all duration-300 ${idx === 0 ? 'bg-[#9E6738] w-6' : 'bg-slate-300 dark:bg-slate-700 hover:bg-[#9E6738]/60'}`;
      dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
      dot.onclick = () => goToHeroSlide(idx);
      dotsContainer.appendChild(dot);
    });
  }

  updateHeroSlideUI(0);

  startHeroTimer();

  const heroSection = document.getElementById('destinations-hero') || container;
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopHeroTimer);
    heroSection.addEventListener('mouseleave', startHeroTimer);
  }
}

function startHeroTimer() {
  stopHeroTimer();
  heroSlideTimer = setInterval(() => {
    nextHeroSlide();
  }, HERO_AUTO_INTERVAL);
}

function stopHeroTimer() {
  if (heroSlideTimer) {
    clearInterval(heroSlideTimer);
    heroSlideTimer = null;
  }
}

function updateHeroSlideUI(index) {
  const slides = document.querySelectorAll('.dest-hero-slide');
  const total = slides.length;
  if (!total) return;

  heroCurrentIndex = (index + total) % total;

  slides.forEach((slide, idx) => {
    if (idx === heroCurrentIndex) {
      slide.classList.add('active');
      slide.style.opacity = '1';
      slide.style.zIndex = '10';
      slide.style.pointerEvents = 'auto';

      const caption = slide.getAttribute('data-caption');
      const captionEl = document.getElementById('hero-slide-caption');
      if (captionEl && caption) {
        captionEl.innerHTML = caption;
      }
    } else {
      slide.classList.remove('active');
      slide.style.opacity = '0';
      slide.style.zIndex = '0';
      slide.style.pointerEvents = 'none';
    }
  });

  const counterEl = document.getElementById('hero-slide-num');
  if (counterEl) {
    const formattedCurrent = String(heroCurrentIndex + 1).padStart(2, '0');
    const formattedTotal = String(total).padStart(2, '0');
    counterEl.textContent = `${formattedCurrent} / ${formattedTotal}`;
  }

  const dots = document.querySelectorAll('#hero-slider-dots button');
  dots.forEach((dot, idx) => {
    if (idx === heroCurrentIndex) {
      dot.className = 'w-6 h-2 rounded-full bg-[#9E6738] dark:bg-[#DEB17E] transition-all duration-300';
    } else {
      dot.className = 'w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 hover:bg-[#9E6738]/60 transition-all duration-300';
    }
  });
}

function nextHeroSlide() {
  updateHeroSlideUI(heroCurrentIndex + 1);
}

function prevHeroSlide() {
  updateHeroSlideUI(heroCurrentIndex - 1);
}

function goToHeroSlide(index) {
  updateHeroSlideUI(index);
  startHeroTimer();
}

window.nextHeroSlide = nextHeroSlide;
window.prevHeroSlide = prevHeroSlide;
window.goToHeroSlide = goToHeroSlide;

function initDestinationFilters() {
  const filterBtns = document.querySelectorAll('#destinations-filter-chips .destination-filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyAllDestinationFilters();
    });
  });
}

function initDestinationSearch() {
  const searchInput = document.getElementById('dest-search-input') || document.querySelector('input[placeholder*="Search destinations"]');
  const cards = document.querySelectorAll('.destination-card');
  if (!searchInput || !cards.length) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    cards.forEach(card => {
      const title = card.querySelector('h3, h4')?.textContent.toLowerCase() || '';
      const text = card.textContent.toLowerCase();
      if (!query || title.includes(query) || text.includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

function toggleDestinationFilterPanel(forceState) {
  const sidebar = document.getElementById('dest-filter-sidebar');
  const toggleBtn = document.getElementById('dest-filter-toggle-btn');
  const chevron = document.getElementById('dest-filter-chevron');
  const grid = document.getElementById('destinations-grid');
  const quickBtnText = document.getElementById('dest-filter-quick-text');

  if (!sidebar) return;

  const isCurrentlyOpen = !sidebar.classList.contains('hidden');
  const shouldOpen = forceState !== undefined ? forceState : !isCurrentlyOpen;

  if (shouldOpen) {
    sidebar.classList.remove('hidden');
    sidebar.classList.add('animate-fadeIn');
    if (toggleBtn) {
      toggleBtn.classList.add('active');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
    if (chevron) {
      chevron.classList.add('rotate-180');
    }
    if (grid) {
      grid.classList.remove('lg:grid-cols-3');
      grid.classList.add('xl:grid-cols-2');
    }
    if (quickBtnText) {
      quickBtnText.textContent = 'Hide Filters';
    }

    if (window.innerWidth < 1024 && forceState === undefined) {
      sidebar.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  } else {
    sidebar.classList.add('hidden');
    sidebar.classList.remove('animate-fadeIn');
    if (toggleBtn) {
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
    if (chevron) {
      chevron.classList.remove('rotate-180');
    }
    if (grid) {
      grid.classList.remove('xl:grid-cols-2');
      grid.classList.add('lg:grid-cols-3');
    }
    if (quickBtnText) {
      quickBtnText.textContent = 'Show Filters';
    }
  }
}
window.toggleDestinationFilterPanel = toggleDestinationFilterPanel;

function updateActiveFilterBadge() {
  const badge = document.getElementById('dest-filter-badge');
  const purposeChecked = document.querySelectorAll('input[name="travel-purpose"]:checked').length;
  const catChecked = document.querySelectorAll('input[name="category"]:checked').length;
  const guestChecked = document.querySelectorAll('input[name="guests"]:checked').length;
  const amenityChecked = document.querySelectorAll('input[name="amenity"]:checked').length;
  const priceSlider = document.getElementById('price-range-slider');
  const isPriceModified = priceSlider && Number(priceSlider.value) < 15000 ? 1 : 0;

  const total = purposeChecked + catChecked + guestChecked + amenityChecked + isPriceModified;
  if (badge) {
    if (total > 0) {
      badge.textContent = total;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }
}

function filterDestinationsTab(filter, btn) {
  const filterBtns = document.querySelectorAll('#destinations-filter-chips .destination-filter-btn');
  filterBtns.forEach(b => b.classList.remove('active'));

  if (btn) {
    btn.classList.add('active');
  } else if (filter) {
    filterBtns.forEach(b => {
      const txt = b.textContent.toLowerCase();
      if ((filter.toLowerCase() === 'all' && txt.includes('all')) || txt.includes(filter.toLowerCase())) {
        b.classList.add('active');
      }
    });
  }

  applyAllDestinationFilters();
}
window.filterDestinationsTab = filterDestinationsTab;

function toggleFilterGroup(btn) {
  const content = btn.parentElement.querySelector('.filter-content');
  const icon = btn.querySelector('i');
  if (!content) return;
  content.classList.toggle('hidden');
  if (icon) {
    icon.classList.toggle('rotate-180');
  }
}
window.toggleFilterGroup = toggleFilterGroup;

function updatePriceSlider(val) {
  const maxDisplay = document.getElementById('price-max-display');
  if (maxDisplay) {
    maxDisplay.textContent = `$${Number(val).toLocaleString()} / ₹${Number(val).toLocaleString()}`;
  }
  applyAllDestinationFilters();
}
window.updatePriceSlider = updatePriceSlider;

const defaultDestinationsCatalog = [
  {
    id: "dest-swiss",
    name: "Swiss Alps & Lake Lucerne",
    country: "Switzerland",
    category: "Europe",
    image: "card-swiss-matterhorn.jpg",
    bestSeason: "Dec - Mar / Jun - Sep",
    temp: "18°C / 2°C",
    highlights: "Matterhorn, Glacier Express, Interlaken, Lake Brienz",
    packageTarget: "pkg-intl-swiss"
  },
  {
    id: "dest-santorini",
    name: "Santorini & Mykonos Caldera",
    country: "Greece",
    category: "Europe",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    bestSeason: "May - Oct (Warm Aegean)",
    temp: "27°C Coastal",
    highlights: "Caldera Cave Suites, Sunset Catamarans, Greek Tavernas",
    packageTarget: "pkg-hm-santorini"
  },
  {
    id: "dest-paris-rome",
    name: "Paris, Venice & Rome Grand Tour",
    country: "France & Italy",
    category: "Europe",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    bestSeason: "Apr - Jun / Sep - Oct",
    temp: "21°C Mild",
    highlights: "Eiffel Summit, Grand Canal Gondolas, Colosseum VIP",
    packageTarget: "pkg-intl-paris-rome"
  },
  {
    id: "dest-amalfi",
    name: "Amalfi Coast & Positano Clifftop",
    country: "Italy",
    category: "Europe",
    image: "dest-amalfi.jpg",
    bestSeason: "May - Sep (Sunny Mediterranean)",
    temp: "26°C Coastal",
    highlights: "Private Riva Yacht, Ravello Gardens, Limoncello Terraces",
    packageTarget: "pkg-intl-swiss"
  },
>>>>>>> 107638ee6bc6b2e4c7a4a43a5f47d9382c9597dd
{
    id: "dest-banff",
    name: "Banff & Lake Louise Alpine Sanctuary",
    country: "Canada",
    category: "Europe",
    image: "dest-banff.jpg",
    bestSeason: "Jun - Sep / Dec - Mar",
    temp: "20°C / -5°C",
    highlights: "Moraine Lake Canoe, Fairmont Clifftop Spa, Heli-Glacier Landing",
    packageTarget: "pkg-intl-swiss"
<<<<<<< HEAD
  },
  {
    id: "dest-maldives",
    name: "Baa & North Malé Atoll",
    country: "Maldives",
    category: "Island",
    image: "card-maldives-lagoon.jpg",
    bestSeason: "Nov - Apr (Dry Sunshine)",
    temp: "29°C Lagoon",
    highlights: "Overwater Villas, Seaplane Flights, Manta Ray Safari",
    packageTarget: "pkg-intl-maldives"
  },
  {
    id: "dest-borabora",
    name: "Bora Bora & Pearl Lagoon",
    country: "French Polynesia",
    category: "Island",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    bestSeason: "May - Oct (Trade Winds)",
    temp: "28°C Tropical",
    highlights: "Mount Otemanu Views, Overwater Bungalows, Shark Snorkeling",
    packageTarget: "pkg-intl-maldives"
  },
  {
    id: "dest-seychelles",
    name: "Praslin & La Digue Granite Atolls",
    country: "Seychelles",
    category: "Island",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    bestSeason: "Apr - May / Oct - Nov",
    temp: "29°C Warm",
    highlights: "Anse Source d'Argent, Giant Tortoises, Private Catamarans",
    packageTarget: "pkg-intl-maldives"
  },
  {
    id: "dest-phuket",
    name: "Phuket & Phi Phi Island Sanctuary",
    country: "Thailand",
    category: "Island",
    image: "dest-phuket.jpg",
    bestSeason: "Nov - Apr (Dry Sunshine)",
    temp: "31°C Tropical",
    highlights: "Maya Bay Private Speedboat, Luxury Clifftop Spa, Emerald Lagoons",
    packageTarget: "pkg-intl-bali"
  },
  {
    id: "dest-bali",
    name: "Ubud Rainforest & Nusa Penida",
    country: "Indonesia",
    category: "Asia",
    image: "dest-bali.jpg",
    bestSeason: "Apr - Oct (Dry Season)",
    temp: "28°C Tropical",
    highlights: "Tegallalang Terraces, Clifftop Sunsets, Secret Waterfalls",
    packageTarget: "pkg-intl-bali"
  },
  {
    id: "dest-japan",
    name: "Tokyo, Kyoto & Mount Fuji",
    country: "Japan",
    category: "Asia",
    image: "card-kyoto-pagoda.jpg",
    bestSeason: "Mar - May (Sakura) / Autumn",
    temp: "20°C Pleasant",
    highlights: "Shinkansen Bullet Train, Arashiyama Bamboo, Ryokans",
    packageTarget: "pkg-intl-japan"
  },
  {
    id: "dest-vietnam",
    name: "Ha Long Bay & Ninh Binh Sanctuaries",
    country: "Vietnam",
    category: "Asia",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    bestSeason: "Oct - Dec / Mar - May",
    temp: "24°C Mild",
    highlights: "Private Junk Boat Cruise, Limestone Karsts, Floating Villages",
    packageTarget: "pkg-intl-japan"
  },
  {
    id: "dest-singapore",
    name: "Marina Bay & Sentosa Luxury Reserve",
    country: "Singapore",
    category: "Asia",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    bestSeason: "Year-Round (Equatorial)",
    temp: "30°C Vibrant",
    highlights: "Gardens by the Bay, Michelin Dining, Private Yacht Charters",
    packageTarget: "pkg-intl-bali"
  },
  {
    id: "dest-kashmir",
    name: "Kashmir Valley & Gulmarg",
    country: "India",
    category: "Himalayas",
    image: "card-kashmir-shikara.jpg",
    bestSeason: "Apr - Oct / Dec - Feb",
    temp: "22°C / 4°C",
    highlights: "Dal Lake Shikaras, Gulmarg Gondola, Saffron Orchards",
    packageTarget: "pkg-dom-kashmir"
  },
  {
    id: "dest-kerala",
    name: "Alleppey Backwaters & Munnar",
    country: "India",
    category: "Himalayas",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    bestSeason: "Sep - Mar (Cool Season)",
    temp: "25°C Serene",
    highlights: "Luxury Houseboats, Organic Tea Estates, Ayurveda Spa",
    packageTarget: "pkg-dom-kerala"
  },
  {
    id: "dest-ladakh",
    name: "Ladakh & Pangong Tso Highland",
    country: "India",
    category: "Himalayas",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
    bestSeason: "May - Sep (Clear Skies)",
    temp: "17°C Alpine",
    highlights: "Pangong Blue Waters, Nubra Sand Dunes, Monasteries",
    packageTarget: "pkg-dom-kashmir"
  },
  {
    id: "dest-bhutan",
    name: "Paro Valley & Tiger's Nest",
    country: "Bhutan",
    category: "Himalayas",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    bestSeason: "Mar - May / Sep - Nov",
    temp: "19°C Mountain",
    highlights: "Cliffside Monasteries, Gross National Happiness, Cloud Forests",
    packageTarget: "pkg-dom-kashmir"
  },
  {
    id: "dest-dubai",
    name: "Dubai Marina & Arabian Desert",
    country: "United Arab Emirates",
    category: "Middle East",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    bestSeason: "Oct - Apr (Winter Sunshine)",
    temp: "26°C Coastal",
    highlights: "Burj Khalifa, Mega Yacht Cruises, 4x4 Dune Safaris",
    packageTarget: "pkg-intl-dubai"
  },
  {
    id: "dest-petra",
    name: "Petra Rose City & Wadi Rum",
    country: "Jordan",
    category: "Middle East",
    image: "dest-petra.jpg",
    bestSeason: "Mar - May / Sep - Nov",
    temp: "24°C Dry Desert",
    highlights: "Ancient Treasury By Candlelight, Martian Geodesic Domes, Bedouin Banquets",
    packageTarget: "pkg-intl-dubai"
  },
  {
    id: "dest-oman",
    name: "Muscat & Zighy Bay Fiords",
    country: "Oman",
    category: "Middle East",
    image: "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80",
    bestSeason: "Oct - Apr (Temperate)",
    temp: "27°C Coastal",
    highlights: "Six Senses Paragliding, Dhow Cruises, Sultan Qaboos Grand Mosque",
    packageTarget: "pkg-intl-dubai"
  },
  {
    id: "dest-abudhabi",
    name: "Abu Dhabi & Saadiyat Dunes",
    country: "United Arab Emirates",
    category: "Middle East",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    bestSeason: "Nov - Mar (Golden Sun)",
    temp: "25°C Seaside",
    highlights: "Louvre Abu Dhabi, Qasr Al Watan, Mangrove Eco Kayaking",
    packageTarget: "pkg-intl-dubai"
  }
];

function applyAllDestinationFilters() {
  updateActiveFilterBadge();
  const container = document.getElementById('destinations-grid');
  if (!container) return;

  if (window.traviqueData) {
    window.traviqueData.destinations = defaultDestinationsCatalog;
  }
  const dests = defaultDestinationsCatalog;

  const searchQuery = (document.getElementById('dest-search-input')?.value || '').toLowerCase().trim();
  const maxPrice = Number(document.getElementById('price-range-slider')?.value || 15000);

  const selectedPurposes = Array.from(document.querySelectorAll('input[name="travel-purpose"]:checked')).map(cb => cb.value.toLowerCase());

  const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value.toLowerCase());

  const activeBtn = document.querySelector('#destinations-filter-chips .destination-filter-btn.active');
  const activeChip = activeBtn?.textContent.trim() || 'All Destinations';
  let chipCategory = 'all';
  if (activeChip.includes('Europe')) chipCategory = 'europe';
  else if (activeChip.includes('Island')) chipCategory = 'island';
  else if (activeChip.includes('Asia')) chipCategory = 'asia';
  else if (activeChip.includes('Himalayas')) chipCategory = 'himalayas';
  else if (activeChip.includes('Middle East')) chipCategory = 'middle east';

  const filtered = dests.filter((d) => {

    if (chipCategory !== 'all' && !d.category.toLowerCase().includes(chipCategory)) {
      return false;
    }

    if (searchQuery) {
      const matchSearch = d.name.toLowerCase().includes(searchQuery) ||
                          d.country.toLowerCase().includes(searchQuery) ||
                          (d.highlights && d.highlights.toLowerCase().includes(searchQuery));
      if (!matchSearch) return false;
    }

    if (selectedCategories.length > 0) {
      const matchCat = selectedCategories.some(cat => d.category.toLowerCase().includes(cat));
      if (!matchCat) return false;
    }
    return true;
  });

  const countEl = document.getElementById('destinations-results-count');
  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${dests.length} verified sanctuaries`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center space-y-4 rounded-3xl bg-slate-50 dark:bg-ocean-850 border border-dashed border-slate-300 dark:border-ocean-700 p-8">
        <div class="w-16 h-16 rounded-full bg-[#9E6738]/10 text-[#9E6738] dark:text-[#DEB17E] flex items-center justify-center text-2xl mx-auto">
          <i class="fa-solid fa-compass"></i>
        </div>
        <h4 class="text-xl font-bold text-ocean-950 dark:text-white">No Matching Sanctuaries Found</h4>
        <p class="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">Try broadening your search filters or click "Clear All" to see our full global collection.</p>
        <button onclick="clearAllDestinationFilters()" class="btn-primary text-xs font-bold px-6 py-2.5 rounded-full inline-flex items-center gap-2">
          <i class="fa-solid fa-rotate-right"></i>
          <span>Reset All Filters</span>
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((d) => {
    const highlightList = (d.highlights || '').split(',').map(s => s.trim()).filter(Boolean);
    const pillsHtml = highlightList.slice(0, 3).map(h => `
      <span class="px-2 py-0.5 rounded-md bg-teal-500/10 text-teal-800 dark:text-teal-300 text-[10px] font-bold flex items-center gap-1 border border-teal-500/20">
        <i class="fa-solid fa-sparkles text-[8px] text-[#9E6738] dark:text-[#DEB17E]"></i>
        <span class="truncate">${h}</span>
      </span>
    `).join('');

    const sanctuaryType = d.country === 'Switzerland' ? 'The Omnia Chalet' :
                          d.country === 'Maldives' ? 'Overwater Atoll' :
                          d.country === 'Indonesia' ? 'Viceroy Valley' :
                          d.country === 'Japan' ? 'Hoshinoya Ryokan' :
                          d.country === 'United Arab Emirates' ? 'Burj Royal Suite' :
                          d.country === 'India' ? 'Sukoon Palace' : 'Curated Private Retreat';

    const transferType = d.country === 'Switzerland' ? 'Glacier Rail' :
                         d.country === 'Maldives' ? 'Twin Seaplane' :
                         d.country === 'Indonesia' ? 'Private Chauffeur' :
                         d.country === 'Japan' ? 'Shinkansen 1st Cl.' :
                         d.country === 'United Arab Emirates' ? 'Helicopter / Rolls' :
                         d.country === 'India' ? 'Private Shikara' : 'VIP Chauffeur';

    const startingRate = d.country === 'Switzerland' ? '$3,850' :
                         d.country === 'Maldives' ? '$3,425' :
                         d.country === 'Indonesia' ? '$2,650' :
                         d.country === 'Japan' ? '$3,680' :
                         d.country === 'United Arab Emirates' ? '$2,980' :
                         d.country === 'India' ? '$1,890' : '$2,750';

    return `
      <div class="travel-card group cursor-pointer relative rounded-3xl overflow-hidden bg-white dark:bg-ocean-900 border border-slate-200 dark:border-ocean-800 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between" onclick="window.location.href='destination-detail.html?id=${d.id}&target=${d.packageTarget}'">
        <div class="travel-card-img-wrap relative h-56 overflow-hidden">
          <img src="${d.image}" alt="${d.name}" class="travel-card-img w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-[#0B1924]/95 via-[#0B1924]/45 to-transparent"></div>

          <div class="absolute top-3 left-3 flex items-center gap-1.5">
            <span class="px-3 py-1 rounded-full bg-white/95 dark:bg-ocean-950/90 text-[#1A3B55] dark:text-[#DEB17E] font-black text-xs shadow-md border border-[#9E6738]/30">
              <i class="fa-solid fa-location-dot mr-1 text-[#9E6738] dark:text-[#DEB17E]"></i>${d.country}
            </span>
          </div>

          <div class="absolute top-3 right-3">
            <span class="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-white border border-white/20 shadow-md">
              <i class="fa-solid fa-temperature-half text-[#DEB17E] mr-1"></i>${d.temp}
            </span>
          </div>

          <div class="absolute bottom-3 left-4 right-4 text-white z-10">
            <span class="text-[9px] font-extrabold uppercase tracking-widest text-[#DEB17E] block mb-0.5">${d.category} Sanctuary</span>
            <h3 class="dest-card-title text-xl font-bold font-heading !text-white group-hover:!text-[#DEB17E] transition-colors leading-tight drop-shadow-md" style="color: #ffffff !important;">${d.name}</h3>
            <p class="dest-card-subtitle text-[11px] !text-slate-200 mt-1 line-clamp-1 drop-shadow flex items-center gap-1.5" style="color: #f1f5f9 !important;">
              <i class="fa-solid fa-sparkles text-[#DEB17E] text-[10px] shrink-0"></i>
              <span class="truncate">${d.highlights}</span>
            </p>
          </div>
        </div>

        <div class="p-5 pt-4 space-y-3.5 flex-1 flex flex-col justify-between">
          <div class="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-slate-100/90 dark:bg-ocean-850/80 border border-slate-200/80 dark:border-ocean-800 text-center">
            <div>
              <span class="block text-[9px] font-bold uppercase tracking-wider text-slate-400">Best Season</span>
              <span class="block text-[11px] font-extrabold text-ocean-950 dark:text-white truncate">${d.bestSeason}</span>
            </div>
            <div class="border-x border-slate-200 dark:border-ocean-800 px-1">
              <span class="block text-[9px] font-bold uppercase tracking-wider text-slate-400">Sanctuary</span>
              <span class="block text-[11px] font-extrabold text-[#9E6738] dark:text-[#DEB17E] truncate">${sanctuaryType}</span>
            </div>
            <div>
              <span class="block text-[9px] font-bold uppercase tracking-wider text-slate-400">Transfer</span>
              <span class="block text-[11px] font-extrabold text-ocean-950 dark:text-white truncate">${transferType}</span>
            </div>
          </div>

          <div class="flex flex-wrap gap-1.5 pt-0.5">
            ${pillsHtml}
          </div>

          <div class="pt-3 border-t border-slate-200 dark:border-ocean-800/80 flex items-center justify-between gap-3">
            <div class="flex flex-col">
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Curated Rate</span>
              <span class="text-sm font-black text-ocean-950 dark:text-white">From <span class="text-teal-600 dark:text-[#DEB17E]">${startingRate}</span> <span class="text-[10px] font-normal text-slate-400">/ guest</span></span>
            </div>
            <button onclick="event.stopPropagation(); window.location.href='destination-detail.html?id=${d.id}&target=${d.packageTarget}'" class="btn-secondary !py-2 !px-4 !text-xs font-bold shadow-md hover:shadow-xl flex items-center gap-1.5 rounded-xl transition-all">
              <span>Explore</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}
window.applyAllDestinationFilters = applyAllDestinationFilters;

function clearAllDestinationFilters() {
  document.querySelectorAll('aside input[type="checkbox"]').forEach(cb => cb.checked = false);
  const slider = document.getElementById('price-range-slider');
  if (slider) slider.value = 15000;
  const maxDisplay = document.getElementById('price-max-display');
  if (maxDisplay) maxDisplay.textContent = '$15,000 / ₹15,000';
  const search = document.getElementById('dest-search-input');
  if (search) search.value = '';
  document.querySelectorAll('#destinations-filter-chips button').forEach((b, idx) => {
    if (idx === 0) b.classList.add('active');
    else b.classList.remove('active');
  });
  updateActiveFilterBadge();
  applyAllDestinationFilters();
}
window.clearAllDestinationFilters = clearAllDestinationFilters;
function initDestinationScrollEffects() {
  const cards = document.querySelectorAll('.destination-card, .wonder-spotlight-card, .climate-matrix-row');
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
      card.style.transitionDelay = `${(idx % 6) * 90}ms`;
      observer.observe(card);
    });
  } else {
    cards.forEach(c => c.classList.add('visible'));
  }
}
=======
  },
  {
    id: "dest-maldives",
    name: "Baa & North Malé Atoll",
    country: "Maldives",
    category: "Island",
    image: "card-maldives-lagoon.jpg",
    bestSeason: "Nov - Apr (Dry Sunshine)",
    temp: "29°C Lagoon",
    highlights: "Overwater Villas, Seaplane Flights, Manta Ray Safari",
    packageTarget: "pkg-intl-maldives"
  },
  {
    id: "dest-borabora",
    name: "Bora Bora & Pearl Lagoon",
    country: "French Polynesia",
    category: "Island",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    bestSeason: "May - Oct (Trade Winds)",
    temp: "28°C Tropical",
    highlights: "Mount Otemanu Views, Overwater Bungalows, Shark Snorkeling",
    packageTarget: "pkg-intl-maldives"
  },
  {
    id: "dest-seychelles",
    name: "Praslin & La Digue Granite Atolls",
    country: "Seychelles",
    category: "Island",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    bestSeason: "Apr - May / Oct - Nov",
    temp: "29°C Warm",
    highlights: "Anse Source d'Argent, Giant Tortoises, Private Catamarans",
    packageTarget: "pkg-intl-maldives"
  },
  {
    id: "dest-phuket",
    name: "Phuket & Phi Phi Island Sanctuary",
    country: "Thailand",
    category: "Island",
    image: "dest-phuket.jpg",
    bestSeason: "Nov - Apr (Dry Sunshine)",
    temp: "31°C Tropical",
    highlights: "Maya Bay Private Speedboat, Luxury Clifftop Spa, Emerald Lagoons",
    packageTarget: "pkg-intl-bali"
  },
  {
    id: "dest-bali",
    name: "Ubud Rainforest & Nusa Penida",
    country: "Indonesia",
    category: "Asia",
    image: "dest-bali.jpg",
    bestSeason: "Apr - Oct (Dry Season)",
    temp: "28°C Tropical",
    highlights: "Tegallalang Terraces, Clifftop Sunsets, Secret Waterfalls",
    packageTarget: "pkg-intl-bali"
  },
  {
    id: "dest-japan",
    name: "Tokyo, Kyoto & Mount Fuji",
    country: "Japan",
    category: "Asia",
    image: "card-kyoto-pagoda.jpg",
    bestSeason: "Mar - May (Sakura) / Autumn",
    temp: "20°C Pleasant",
    highlights: "Shinkansen Bullet Train, Arashiyama Bamboo, Ryokans",
    packageTarget: "pkg-intl-japan"
  },
  {
    id: "dest-vietnam",
    name: "Ha Long Bay & Ninh Binh Sanctuaries",
    country: "Vietnam",
    category: "Asia",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    bestSeason: "Oct - Dec / Mar - May",
    temp: "24°C Mild",
    highlights: "Private Junk Boat Cruise, Limestone Karsts, Floating Villages",
    packageTarget: "pkg-intl-japan"
  },
  {
    id: "dest-singapore",
    name: "Marina Bay & Sentosa Luxury Reserve",
    country: "Singapore",
    category: "Asia",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    bestSeason: "Year-Round (Equatorial)",
    temp: "30°C Vibrant",
    highlights: "Gardens by the Bay, Michelin Dining, Private Yacht Charters",
    packageTarget: "pkg-intl-bali"
  },
  {
    id: "dest-kashmir",
    name: "Kashmir Valley & Gulmarg",
    country: "India",
    category: "Himalayas",
    image: "card-kashmir-shikara.jpg",
    bestSeason: "Apr - Oct / Dec - Feb",
    temp: "22°C / 4°C",
    highlights: "Dal Lake Shikaras, Gulmarg Gondola, Saffron Orchards",
    packageTarget: "pkg-dom-kashmir"
  },
  {
    id: "dest-kerala",
    name: "Alleppey Backwaters & Munnar",
    country: "India",
    category: "Himalayas",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    bestSeason: "Sep - Mar (Cool Season)",
    temp: "25°C Serene",
    highlights: "Luxury Houseboats, Organic Tea Estates, Ayurveda Spa",
    packageTarget: "pkg-dom-kerala"
  },
  {
    id: "dest-ladakh",
    name: "Ladakh & Pangong Tso Highland",
    country: "India",
    category: "Himalayas",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
    bestSeason: "May - Sep (Clear Skies)",
    temp: "17°C Alpine",
    highlights: "Pangong Blue Waters, Nubra Sand Dunes, Monasteries",
    packageTarget: "pkg-dom-kashmir"
  },
  {
    id: "dest-bhutan",
    name: "Paro Valley & Tiger's Nest",
    country: "Bhutan",
    category: "Himalayas",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    bestSeason: "Mar - May / Sep - Nov",
    temp: "19°C Mountain",
    highlights: "Cliffside Monasteries, Gross National Happiness, Cloud Forests",
    packageTarget: "pkg-dom-kashmir"
  },
  {
    id: "dest-dubai",
    name: "Dubai Marina & Arabian Desert",
    country: "United Arab Emirates",
    category: "Middle East",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    bestSeason: "Oct - Apr (Winter Sunshine)",
    temp: "26°C Coastal",
    highlights: "Burj Khalifa, Mega Yacht Cruises, 4x4 Dune Safaris",
    packageTarget: "pkg-intl-dubai"
  },
  {
    id: "dest-petra",
    name: "Petra Rose City & Wadi Rum",
    country: "Jordan",
    category: "Middle East",
    image: "dest-petra.jpg",
    bestSeason: "Mar - May / Sep - Nov",
    temp: "24°C Dry Desert",
    highlights: "Ancient Treasury By Candlelight, Martian Geodesic Domes, Bedouin Banquets",
    packageTarget: "pkg-intl-dubai"
  },
  {
    id: "dest-oman",
    name: "Muscat & Zighy Bay Fiords",
    country: "Oman",
    category: "Middle East",
    image: "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80",
    bestSeason: "Oct - Apr (Temperate)",
    temp: "27°C Coastal",
    highlights: "Six Senses Paragliding, Dhow Cruises, Sultan Qaboos Grand Mosque",
    packageTarget: "pkg-intl-dubai"
  },
  {
    id: "dest-abudhabi",
    name: "Abu Dhabi & Saadiyat Dunes",
    country: "United Arab Emirates",
    category: "Middle East",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    bestSeason: "Nov - Mar (Golden Sun)",
    temp: "25°C Seaside",
    highlights: "Louvre Abu Dhabi, Qasr Al Watan, Mangrove Eco Kayaking",
    packageTarget: "pkg-intl-dubai"
  }
];

function applyAllDestinationFilters() {
  updateActiveFilterBadge();
  const container = document.getElementById('destinations-grid');
  if (!container) return;

  if (window.traviqueData) {
    window.traviqueData.destinations = defaultDestinationsCatalog;
  }
  const dests = defaultDestinationsCatalog;

  const searchQuery = (document.getElementById('dest-search-input')?.value || '').toLowerCase().trim();
  const maxPrice = Number(document.getElementById('price-range-slider')?.value || 15000);

  const selectedPurposes = Array.from(document.querySelectorAll('input[name="travel-purpose"]:checked')).map(cb => cb.value.toLowerCase());

  const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value.toLowerCase());

  const activeBtn = document.querySelector('#destinations-filter-chips .destination-filter-btn.active');
  const activeChip = activeBtn?.textContent.trim() || 'All Destinations';
  let chipCategory = 'all';
  if (activeChip.includes('Europe')) chipCategory = 'europe';
  else if (activeChip.includes('Island')) chipCategory = 'island';
  else if (activeChip.includes('Asia')) chipCategory = 'asia';
  else if (activeChip.includes('Himalayas')) chipCategory = 'himalayas';
  else if (activeChip.includes('Middle East')) chipCategory = 'middle east';

  const filtered = dests.filter((d) => {

    if (chipCategory !== 'all' && !d.category.toLowerCase().includes(chipCategory)) {
      return false;
    }

    if (searchQuery) {
      const matchSearch = d.name.toLowerCase().includes(searchQuery) ||
                          d.country.toLowerCase().includes(searchQuery) ||
                          (d.highlights && d.highlights.toLowerCase().includes(searchQuery));
      if (!matchSearch) return false;
    }

    if (selectedCategories.length > 0) {
      const matchCat = selectedCategories.some(cat => d.category.toLowerCase().includes(cat));
      if (!matchCat) return false;
    }
    return true;
  });

  const countEl = document.getElementById('destinations-results-count');
  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${dests.length} verified sanctuaries`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center space-y-4 rounded-3xl bg-slate-50 dark:bg-ocean-850 border border-dashed border-slate-300 dark:border-ocean-700 p-8">
        <div class="w-16 h-16 rounded-full bg-[#9E6738]/10 text-[#9E6738] dark:text-[#DEB17E] flex items-center justify-center text-2xl mx-auto">
          <i class="fa-solid fa-compass"></i>
        </div>
        <h4 class="text-xl font-bold text-ocean-950 dark:text-white">No Matching Sanctuaries Found</h4>
        <p class="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">Try broadening your search filters or click "Clear All" to see our full global collection.</p>
        <button onclick="clearAllDestinationFilters()" class="btn-primary text-xs font-bold px-6 py-2.5 rounded-full inline-flex items-center gap-2">
          <i class="fa-solid fa-rotate-right"></i>
          <span>Reset All Filters</span>
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((d) => {
    const highlightList = (d.highlights || '').split(',').map(s => s.trim()).filter(Boolean);
    const pillsHtml = highlightList.slice(0, 3).map(h => `
      <span class="px-2 py-0.5 rounded-md bg-teal-500/10 text-teal-800 dark:text-teal-300 text-[10px] font-bold flex items-center gap-1 border border-teal-500/20">
        <i class="fa-solid fa-sparkles text-[8px] text-[#9E6738] dark:text-[#DEB17E]"></i>
        <span class="truncate">${h}</span>
      </span>
    `).join('');

    const sanctuaryType = d.country === 'Switzerland' ? 'The Omnia Chalet' :
                          d.country === 'Maldives' ? 'Overwater Atoll' :
                          d.country === 'Indonesia' ? 'Viceroy Valley' :
                          d.country === 'Japan' ? 'Hoshinoya Ryokan' :
                          d.country === 'United Arab Emirates' ? 'Burj Royal Suite' :
                          d.country === 'India' ? 'Sukoon Palace' : 'Curated Private Retreat';

    const transferType = d.country === 'Switzerland' ? 'Glacier Rail' :
                         d.country === 'Maldives' ? 'Twin Seaplane' :
                         d.country === 'Indonesia' ? 'Private Chauffeur' :
                         d.country === 'Japan' ? 'Shinkansen 1st Cl.' :
                         d.country === 'United Arab Emirates' ? 'Helicopter / Rolls' :
                         d.country === 'India' ? 'Private Shikara' : 'VIP Chauffeur';

    const startingRate = d.country === 'Switzerland' ? '$3,850' :
                         d.country === 'Maldives' ? '$3,425' :
                         d.country === 'Indonesia' ? '$2,650' :
                         d.country === 'Japan' ? '$3,680' :
                         d.country === 'United Arab Emirates' ? '$2,980' :
                         d.country === 'India' ? '$1,890' : '$2,750';

    return `
      <div class="travel-card group cursor-pointer relative rounded-3xl overflow-hidden bg-white dark:bg-ocean-900 border border-slate-200 dark:border-ocean-800 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between" onclick="window.location.href='destination-detail.html?id=${d.id}&target=${d.packageTarget}'">
        <div class="travel-card-img-wrap relative h-56 overflow-hidden">
          <img src="${d.image}" alt="${d.name}" class="travel-card-img w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-[#0B1924]/95 via-[#0B1924]/45 to-transparent"></div>

          <div class="absolute top-3 left-3 flex items-center gap-1.5">
            <span class="px-3 py-1 rounded-full bg-white/95 dark:bg-ocean-950/90 text-[#1A3B55] dark:text-[#DEB17E] font-black text-xs shadow-md border border-[#9E6738]/30">
              <i class="fa-solid fa-location-dot mr-1 text-[#9E6738] dark:text-[#DEB17E]"></i>${d.country}
            </span>
          </div>

          <div class="absolute top-3 right-3">
            <span class="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-white border border-white/20 shadow-md">
              <i class="fa-solid fa-temperature-half text-[#DEB17E] mr-1"></i>${d.temp}
            </span>
          </div>

          <div class="absolute bottom-3 left-4 right-4 text-white z-10">
            <span class="text-[9px] font-extrabold uppercase tracking-widest text-[#DEB17E] block mb-0.5">${d.category} Sanctuary</span>
            <h3 class="dest-card-title text-xl font-bold font-heading !text-white group-hover:!text-[#DEB17E] transition-colors leading-tight drop-shadow-md" style="color: #ffffff !important;">${d.name}</h3>
            <p class="dest-card-subtitle text-[11px] !text-slate-200 mt-1 line-clamp-1 drop-shadow flex items-center gap-1.5" style="color: #f1f5f9 !important;">
              <i class="fa-solid fa-sparkles text-[#DEB17E] text-[10px] shrink-0"></i>
              <span class="truncate">${d.highlights}</span>
            </p>
          </div>
        </div>

        <div class="p-5 pt-4 space-y-3.5 flex-1 flex flex-col justify-between">
          <div class="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-slate-100/90 dark:bg-ocean-850/80 border border-slate-200/80 dark:border-ocean-800 text-center">
            <div>
              <span class="block text-[9px] font-bold uppercase tracking-wider text-slate-400">Best Season</span>
              <span class="block text-[11px] font-extrabold text-ocean-950 dark:text-white truncate">${d.bestSeason}</span>
            </div>
            <div class="border-x border-slate-200 dark:border-ocean-800 px-1">
              <span class="block text-[9px] font-bold uppercase tracking-wider text-slate-400">Sanctuary</span>
              <span class="block text-[11px] font-extrabold text-[#9E6738] dark:text-[#DEB17E] truncate">${sanctuaryType}</span>
            </div>
            <div>
              <span class="block text-[9px] font-bold uppercase tracking-wider text-slate-400">Transfer</span>
              <span class="block text-[11px] font-extrabold text-ocean-950 dark:text-white truncate">${transferType}</span>
            </div>
          </div>

          <div class="flex flex-wrap gap-1.5 pt-0.5">
            ${pillsHtml}
          </div>

          <div class="pt-3 border-t border-slate-200 dark:border-ocean-800/80 flex items-center justify-between gap-3">
            <div class="flex flex-col">
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Curated Rate</span>
              <span class="text-sm font-black text-ocean-950 dark:text-white">From <span class="text-teal-600 dark:text-[#DEB17E]">${startingRate}</span> <span class="text-[10px] font-normal text-slate-400">/ guest</span></span>
            </div>
            <button onclick="event.stopPropagation(); window.location.href='destination-detail.html?id=${d.id}&target=${d.packageTarget}'" class="btn-secondary !py-2 !px-4 !text-xs font-bold shadow-md hover:shadow-xl flex items-center gap-1.5 rounded-xl transition-all">
              <span>Explore</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}
window.applyAllDestinationFilters = applyAllDestinationFilters;

function clearAllDestinationFilters() {
  document.querySelectorAll('aside input[type="checkbox"]').forEach(cb => cb.checked = false);
  const slider = document.getElementById('price-range-slider');
  if (slider) slider.value = 15000;
  const maxDisplay = document.getElementById('price-max-display');
  if (maxDisplay) maxDisplay.textContent = '$15,000 / ₹15,000';
  const search = document.getElementById('dest-search-input');
  if (search) search.value = '';
  document.querySelectorAll('#destinations-filter-chips button').forEach((b, idx) => {
    if (idx === 0) b.classList.add('active');
    else b.classList.remove('active');
  });
  updateActiveFilterBadge();
  applyAllDestinationFilters();
}
window.clearAllDestinationFilters = clearAllDestinationFilters;
function initDestinationScrollEffects() {
  const cards = document.querySelectorAll('.destination-card, .wonder-spotlight-card, .climate-matrix-row');
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
      card.style.transitionDelay = `${(idx % 6) * 90}ms`;
      observer.observe(card);
    });
  } else {
    cards.forEach(c => c.classList.add('visible'));
  }
}
>>>>>>> 107638ee6bc6b2e4c7a4a43a5f47d9382c9597dd
