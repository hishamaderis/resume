document.addEventListener('DOMContentLoaded', () => {
  // --- 1. THEME SWITCHER (DARK/LIGHT MODE) ---
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Check localStorage or System Preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    body.classList.add('dark-theme');
    updateThemeIcon(true);
  } else {
    body.classList.remove('dark-theme');
    updateThemeIcon(false);
  }
  
  themeToggle.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
  });
  
  function updateThemeIcon(isDark) {
    const icon = themeToggle.querySelector('i');
    if (isDark) {
      icon.className = 'fa-solid fa-sun';
      themeToggle.title = 'Tukar ke Mod Cerah';
      themeToggle.setAttribute('aria-label', 'Tukar ke Mod Cerah');
    } else {
      icon.className = 'fa-solid fa-moon';
      themeToggle.title = 'Tukar ke Mod Gelap';
      themeToggle.setAttribute('aria-label', 'Tukar ke Mod Gelap');
    }
  }

  // --- 2. PRINT RESUME ACTION ---
  const printBtn = document.getElementById('print-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // --- 3. COPY EMAIL TO CLIPBOARD ---
  const emailBtn = document.getElementById('email-btn');
  if (emailBtn) {
    emailBtn.addEventListener('click', () => {
      const email = emailBtn.getAttribute('data-email');
      const copyBadge = emailBtn.querySelector('.copy-badge');
      
      navigator.clipboard.writeText(email).then(() => {
        // Success feedback
        const originalText = copyBadge.textContent;
        copyBadge.textContent = 'Disalin!';
        copyBadge.style.background = '#15803d'; // Green background
        copyBadge.style.color = '#f0fdf4';
        
        setTimeout(() => {
          copyBadge.textContent = originalText;
          copyBadge.style.background = '';
          copyBadge.style.color = '';
        }, 2000);
      }).catch(err => {
        console.error('Gagal menyalin e-mel: ', err);
      });
    });
  }

  // --- 4. SCROLL ANIMATIONS (FADE-IN & PROGRESS BARS) ---
  
  // Intersection Observer for scroll entrance
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // If it contains progress bars, animate them
        const progressBars = entry.target.querySelectorAll('.progress-bar, .progress-bar-lang');
        progressBars.forEach(bar => {
          const targetPercent = bar.getAttribute('data-target');
          bar.style.width = targetPercent;
          
          // Animate text percentage counter for skills bar
          if (bar.classList.contains('progress-bar')) {
            animatePercentText(bar, parseInt(targetPercent));
          }
        });
        
        // Stop observing once animated in
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe content cards
  const cards = document.querySelectorAll('.fade-in-section');
  cards.forEach(card => {
    scrollObserver.observe(card);
  });

  // Observe the profile card specifically for skills/languages (since it starts in viewport, handle it)
  const profileCard = document.querySelector('.profile-card');
  if (profileCard) {
    // If it's already in viewport or we just observe it
    const sidebarObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBars = entry.target.querySelectorAll('.progress-bar, .progress-bar-lang');
          progressBars.forEach(bar => {
            const targetPercent = bar.getAttribute('data-target');
            bar.style.width = targetPercent;
            if (bar.classList.contains('progress-bar')) {
              animatePercentText(bar, parseInt(targetPercent));
            }
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    sidebarObserver.observe(profileCard);
  }

  // Helper function to animate percentage number
  function animatePercentText(element, targetVal) {
    let currentVal = 0;
    const duration = 1200; // Match CSS transition duration (1.2s)
    const stepTime = Math.abs(Math.floor(duration / targetVal));
    
    const timer = setInterval(() => {
      currentVal++;
      element.textContent = currentVal + '%';
      if (currentVal >= targetVal) {
        clearInterval(timer);
      }
    }, stepTime);
  }
});
