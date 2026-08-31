// SCROLL ANIMATIONS & REVEAL EFFECTS
class ScrollAnimations {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    this.init();
  }

  init() {
    this.setupIntersectionObserver();
    this.setupSmoothScroll();
    this.setupScrollNavigation();
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, this.observerOptions);

    // Observe all reveal elements
    document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .stagger-item').forEach((el) => {
      observer.observe(el);
    });
  }

  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  setupScrollNavigation() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }

  // Parallax effect
  initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (window.requestAnimationFrame) {
      window.addEventListener('scroll', () => {
        parallaxElements.forEach((el) => {
          const scrollPosition = window.scrollY;
          const elementOffset = el.offsetTop;
          const distance = scrollPosition - elementOffset;
          el.style.backgroundPosition = `center ${distance * 0.5}px`;
        });
      });
    }
  }

  // Number counter animation
  animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.countUp(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach((counter) => observer.observe(counter));
  }

  countUp(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 16);
  }

  // Add stagger delay to items
  applyStaggerDelay() {
    const staggerGroups = document.querySelectorAll('[data-stagger]');
    
    staggerGroups.forEach((group) => {
      const items = group.querySelectorAll('.stagger-item');
      items.forEach((item, index) => {
        item.style.setProperty('--index', index);
      });
    });
  }
}

// Export for use in main.js
window.ScrollAnimations = ScrollAnimations;
