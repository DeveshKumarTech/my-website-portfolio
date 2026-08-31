// MAIN INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme manager
  window.themeManager = new ThemeManager();

  // Initialize scroll animations
  window.scrollAnimations = new ScrollAnimations();

  // Initialize interactions
  window.interactions = new Interactions();

  // Setup additional features
  setupLoadingScreen();
  setupTypingAnimation();
  setupAccessibility();
});

// Loading Screen
function setupLoadingScreen() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.pointerEvents = 'none';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }, 500);
  });
}

// Typing Animation for Hero Section
function setupTypingAnimation() {
  const typingElements = document.querySelectorAll('.typing-text');
  
  typingElements.forEach((element) => {
    const texts = element.getAttribute('data-texts');
    if (!texts) return;

    const textArray = texts.split('|').map((text) => text.trim());
    let currentIndex = 0;

    const typeText = () => {
      element.textContent = textArray[currentIndex];
      element.classList.add('typing');
      
      setTimeout(() => {
        element.classList.remove('typing');
        currentIndex = (currentIndex + 1) % textArray.length;
        setTimeout(typeText, 3000);
      }, 2000);
    };

    typeText();
  });
}

// Accessibility Enhancements
function setupAccessibility() {
  // Skip to main content link
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const main = document.querySelector('main');
      if (main) {
        main.setAttribute('tabindex', '-1');
        main.focus();
      }
    });
  }

  // Keyboard navigation for cards and interactive elements
  document.querySelectorAll('[role="button"]').forEach((element) => {
    element.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        element.click();
      }
    });
  });

  // Announce dynamic content changes to screen readers
  const announcer = document.createElement('div');
  announcer.setAttribute('aria-live', 'polite');
  announcer.setAttribute('aria-atomic', 'true');
  announcer.className = 'sr-only';
  document.body.appendChild(announcer);

  window.announce = (message) => {
    announcer.textContent = message;
  };
}

// Utility: Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Utility: Throttle function
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Performance Monitoring
if ('PerformanceObserver' in window) {
  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log(`${entry.name}: ${entry.duration}ms`);
      }
    });
    
    observer.observe({ entryTypes: ['measure'] });
  } catch (e) {
    // Silently fail if not supported
  }
}

// Error Handling
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  // Could send to error tracking service
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  // Could send to error tracking service
});

// Service Worker Registration (Progressive Enhancement)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Uncomment when service worker is available
    // navigator.serviceWorker.register('sw.js').catch(err => {
    //   console.log('SW registration failed:', err);
    // });
  });
}
