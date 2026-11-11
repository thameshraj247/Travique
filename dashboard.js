document.addEventListener('DOMContentLoaded', () => {
  initDashboardWorkspace();
});

function initDashboardWorkspace() {

  const bars = document.querySelectorAll('#tab-overview .group > div[style*="height"]');
  bars.forEach((bar) => {
    const finalHeight = bar.style.height;
    bar.style.height = '0%';
    setTimeout(() => {
      bar.style.height = finalHeight;
    }, 250);
  });
}

function switchDashboardTab(tabId) {
  if (tabId === 'profile' || tabId === 'settings') {
    openProfileSettingsModal();
    return;
  }

  const sideButtons = document.querySelectorAll('.dash-side-nav, .wanderease-side-btn');
  sideButtons.forEach(btn => {
    btn.classList.remove('active');
  });

  const activeBtn = document.querySelector(`.dash-side-nav[data-tab="${tabId}"], .wanderease-side-btn[data-tab="${tabId}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }

  const internalTabs = ['overview', 'reservations', 'itineraries', 'saved', 'invoices', 'support'];

  if (internalTabs.includes(tabId)) {
    internalTabs.forEach(id => {
      const tabEl = document.getElementById(`tab-${id}`);
      if (tabEl) {
        if (id === tabId) {
          tabEl.classList.remove('hidden');
          if (tabId === 'overview') {
            triggerChartAnimations();
          }

          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          tabEl.classList.add('hidden');
        }
      }
    });
  }

  if (tabId === 'destinations') {
    window.location.href = 'destinations.html';
  } else if (tabId === 'packages' || tabId === 'domestic' || tabId === 'international' || tabId === 'honeymoon') {
    window.location.href = 'packages.html';
  }

  if (window.innerWidth < 1024) {
    toggleDashboardMobileSidebar(false);
  }
}

function toggleDashboardMobileSidebar(open) {
  const sidebar = document.getElementById('dashboard-sidebar');
  const backdrop = document.getElementById('dashboard-sidebar-backdrop');
  if (!sidebar) return;

  if (open === undefined) {
    open = !sidebar.classList.contains('drawer-open');
  }

  if (open) {
    sidebar.classList.add('drawer-open');
    if (backdrop) backdrop.classList.remove('hidden');
    document.body.classList.add('overflow-hidden', 'lg:overflow-auto');
  } else {
    sidebar.classList.remove('drawer-open');
    if (backdrop) backdrop.classList.add('hidden');
    document.body.classList.remove('overflow-hidden', 'lg:overflow-auto');
  }
}

function filterDashboardAppointments(query) {
  const table = document.getElementById('appointments-table');
  if (!table) return;

  const rows = table.querySelectorAll('tbody tr');
  const lowerQuery = (query || '').toLowerCase().trim();

  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    if (text.includes(lowerQuery)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

function handleButlerQuery() {
  const input = document.getElementById('butler-chat-input');
  if (!input || !input.value.trim()) return;

  const userMsg = input.value.trim();
  input.value = '';

  if (typeof showToast === 'function') {
    showToast(`Voyage Request: "${userMsg}". Butler Jean-Luc is coordinating...`, 'fa-bell-concierge');
    setTimeout(() => {
      showToast(`Jean-Luc: "Arranged with pleasure! '${userMsg}' is confirmed for your itinerary."`, 'fa-circle-check');
    }, 1400);
  }
}

function toggleUserProfileMenu(e) {
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
  const box = document.getElementById('user-profile-dropdown-box');
  const btn = document.getElementById('user-profile-btn');
  if (!box) return;

  const isHidden = box.classList.contains('hidden');
  if (isHidden) {
    box.classList.remove('hidden');
    if (btn) btn.setAttribute('aria-expanded', 'true');
    loadCustomerProfileDetails();
  } else {
    box.classList.add('hidden');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }
}
window.toggleUserProfileMenu = toggleUserProfileMenu;

function loadCustomerProfileDetails() {
  const savedUserStr = localStorage.getItem('travique_user');
  let user = null;
  if (savedUserStr) {
    try {
      user = JSON.parse(savedUserStr);
    } catch (err) {}
  }

  const isLoggedIn = user && user.isLoggedIn !== false;

  const loggedInWrap = document.getElementById('dash-auth-logged-in');
  const loggedOutWrap = document.getElementById('dash-auth-logged-out');

  if (isLoggedIn) {
    if (loggedInWrap) loggedInWrap.classList.remove('hidden');
    if (loggedOutWrap) loggedOutWrap.classList.add('hidden');

    const nameEl = document.getElementById('profile-box-name');
    const emailEl = document.getElementById('profile-box-email');
    const tierEl = document.getElementById('profile-box-tier');
    const avatarEl = document.getElementById('profile-box-avatar');
    const navAvatarImg = document.getElementById('nav-profile-avatar-img');
    const navGreeting = document.getElementById('nav-greeting-name');
    const heroWelcomeName = document.getElementById('hero-welcome-name');

    const currentName = user.name || "Tharun";
    const currentEmail = user.email || "tharun@travique.com";
    const currentTier = user.tier || "Diamond Club VIP";
    const currentAvatar = user.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80";

    if (nameEl) nameEl.textContent = currentName;
    if (emailEl) emailEl.textContent = currentEmail;
    if (tierEl) tierEl.textContent = currentTier;
    if (avatarEl) avatarEl.src = currentAvatar;
    if (navAvatarImg) navAvatarImg.src = currentAvatar;
    if (navGreeting) navGreeting.textContent = `Hello, ${currentName}!`;
    if (heroWelcomeName) heroWelcomeName.textContent = `Welcome back, ${currentName}!`;
  } else {

    if (loggedInWrap) loggedInWrap.classList.add('hidden');
    if (loggedOutWrap) loggedOutWrap.classList.remove('hidden');

    const heroWelcomeName = document.getElementById('hero-welcome-name');
    if (heroWelcomeName) heroWelcomeName.textContent = "Welcome to Travique!";
  }
}
window.loadCustomerProfileDetails = loadCustomerProfileDetails;

function openProfileSettingsModal() {
  const box = document.getElementById('user-profile-dropdown-box');
  if (box) box.classList.add('hidden');

  const modal = document.getElementById('profile-settings-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    const savedUserStr = localStorage.getItem('travique_user');
    let user = {
      name: "Sophia Vance",
      email: "sophia.vance@travique.com",
      phone: "+1 (555) 382-9014",
      departure: "New York (JFK) / Zurich (ZRH)",
      seatClass: "First Class Suite",
      preferences: "Memory Foam, Champagne on Arrival"
    };
    if (savedUserStr) {
      try {
        user = { ...user, ...JSON.parse(savedUserStr) };
      } catch (e) {}
    }

    const nameInput = document.getElementById('setting-full-name');
    const emailInput = document.getElementById('setting-email');
    const phoneInput = document.getElementById('setting-phone');
    const depInput = document.getElementById('setting-departure');
    const seatInput = document.getElementById('setting-seat-class');
    const prefInput = document.getElementById('setting-preferences');

    if (nameInput) nameInput.value = user.name || "Sophia Vance";
    if (emailInput) emailInput.value = user.email || "sophia.vance@travique.com";
    if (phoneInput && user.phone) phoneInput.value = user.phone;
    if (depInput && user.departure) depInput.value = user.departure;
    if (seatInput && user.seatClass) seatInput.value = user.seatClass;
    if (prefInput && user.preferences) prefInput.value = user.preferences;
  }
}
window.openProfileSettingsModal = openProfileSettingsModal;

function closeProfileSettingsModal() {
  const modal = document.getElementById('profile-settings-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}
window.closeProfileSettingsModal = closeProfileSettingsModal;

function handleSaveProfileSettings(e) {
  if (e) e.preventDefault();
  const name = document.getElementById('setting-full-name')?.value || "Sophia Vance";
  const email = document.getElementById('setting-email')?.value || "sophia.vance@travique.com";
  const phone = document.getElementById('setting-phone')?.value || "+1 (555) 382-9014";
  const departure = document.getElementById('setting-departure')?.value || "New York (JFK)";
  const seatClass = document.getElementById('setting-seat-class')?.value || "First Class Suite";
  const preferences = document.getElementById('setting-preferences')?.value || "Memory Foam";

  const savedUserStr = localStorage.getItem('travique_user');
  let user = {
    name,
    email,
    phone,
    departure,
    seatClass,
    preferences,
    tier: "Diamond Club VIP",
    id: "TRV-884920",
    isLoggedIn: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  };

  if (savedUserStr) {
    try {
      user = { ...JSON.parse(savedUserStr), ...user };
    } catch (err) {}
  }
  localStorage.setItem('travique_user', JSON.stringify(user));

  loadCustomerProfileDetails();
  closeProfileSettingsModal();

  if (typeof showToast === 'function') {
    showToast('Profile & luxury travel preferences updated successfully.', 'fa-circle-check');
  } else {
    alert('Profile preferences updated successfully.');
  }
}
window.handleSaveProfileSettings = handleSaveProfileSettings;

function handleDashboardLogout() {
  const box = document.getElementById('user-profile-dropdown-box');
  if (box) box.classList.add('hidden');

  localStorage.removeItem('travique_user');
  if (typeof showToast === 'function') {
    showToast('Logged out successfully.', 'fa-arrow-right-from-bracket');
  }

  loadCustomerProfileDetails();
}
window.handleDashboardLogout = handleDashboardLogout;

document.addEventListener('click', (e) => {
  const container = document.getElementById('user-profile-menu-container');
  const box = document.getElementById('user-profile-dropdown-box');
  if (container && box && !box.classList.contains('hidden')) {
    if (!container.contains(e.target)) {
      box.classList.add('hidden');
    }
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const box = document.getElementById('user-profile-dropdown-box');
    if (box) box.classList.add('hidden');
    closeProfileSettingsModal();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  loadCustomerProfileDetails();

  const savedDir = localStorage.getItem('travique_dir');
  if (savedDir) {
    document.documentElement.setAttribute('dir', savedDir);
  }

  setTimeout(() => {
    triggerChartAnimations();
  }, 100);
});

function toggleDirection() {
  const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
  const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
  document.documentElement.setAttribute('dir', newDir);
  localStorage.setItem('travique_dir', newDir);

  if (typeof updateDirButtonUI === 'function') {
    updateDirButtonUI();
  }
  if (typeof showToast === 'function') {
    showToast(`Layout direction switched to ${newDir.toUpperCase()}`, 'fa-right-left');
  }
}
window.toggleDirection = toggleDirection;

function toggleDashboardTheme() {
  if (typeof toggleDarkMode === 'function') {
    toggleDarkMode();
  } else {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('travique_dark_mode', isDark ? 'true' : 'false');
  }
}
window.toggleDashboardTheme = toggleDashboardTheme;

function triggerChartAnimations() {
  const line = document.querySelector('.booking-spline-line');
  const fill = document.querySelector('.booking-area-fill');
  const circles = document.querySelectorAll('.chart-point-circle');
  const pills = document.querySelectorAll('.chart-point-pill');
  const donutAsia = document.querySelector('.donut-segment-asia');
  const donutEurope = document.querySelector('.donut-segment-europe');
  const donutAmerica = document.querySelector('.donut-segment-america');
  const donutOthers = document.querySelector('.donut-segment-others');

  if (line) {
    line.style.animation = 'none';
    line.offsetHeight;
    line.style.animation = 'drawSplineLine 1.7s cubic-bezier(0.4, 0, 0.2, 1) forwards';
  }
  if (fill) {
    fill.style.animation = 'none';
    fill.offsetHeight;
    fill.style.animation = 'wipeAreaFill 1.7s cubic-bezier(0.4, 0, 0.2, 1) forwards';
  }
  circles.forEach((c) => {
    c.style.animation = 'none';
    c.offsetHeight;
    c.style.animation = '';
  });
  pills.forEach((p) => {
    p.style.animation = 'none';
    p.offsetHeight;
    p.style.animation = '';
  });

  [donutAsia, donutEurope, donutAmerica, donutOthers].forEach((d) => {
    if (d) {
      d.style.animation = 'none';
      d.offsetHeight;
      d.style.animation = '';
    }
  });
}
window.triggerChartAnimations = triggerChartAnimations;
