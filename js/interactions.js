// INTERACTIVE ELEMENTS & FUNCTIONALITY
class Interactions {
  constructor() {
    this.portfolioData = null;
    this.init();
  }

  async init() {
    await this.loadPortfolioData();
    this.setupNavigation();
    this.setupMobileMenu();
    this.setupThemeToggle();
    this.setupContactForm();
    this.setupSkillRings();
    this.setupExternalLinks();
  }

  async loadPortfolioData() {
    try {
      const response = await fetch('data/portfolio.json');
      this.portfolioData = await response.json();
    } catch (error) {
      console.error('Error loading portfolio data:', error);
    }
  }

  setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    const highlightActiveLink = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      navLinks.forEach((link) => link.classList.remove('active'));

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const targetId = section.getAttribute('id');
          const activeLink = document.querySelector(`[data-section="${targetId}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    };

    window.addEventListener('scroll', highlightActiveLink);
    highlightActiveLink();

    // Link click handling
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const section = link.getAttribute('data-section');
        const element = document.getElementById(section);
        
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
          this.closeMenuIfOpen();
        }
      });
    });
  }

  setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        this.closeMenuIfOpen();
      });
    });
  }

  closeMenuIfOpen() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  }

  setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    themeToggle.addEventListener('click', () => {
      window.themeManager.toggleTheme();
    });
  }

  setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      // Validate form
      if (!this.validateForm(data)) {
        return;
      }

      // Show loading state
      const submitButton = form.querySelector('[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.innerHTML = '<span class="loading"></span> Sending...';

      // Simulate form submission (would be replaced with actual backend)
      setTimeout(() => {
        this.showFormSuccess(form);
        submitButton.disabled = false;
        submitButton.textContent = originalText;
        form.reset();
      }, 1500);
    });
  }

  validateForm(data) {
    const errors = {};

    if (!data.name || data.name.trim() === '') {
      errors.name = 'Name is required';
    }

    if (!data.email || !this.isValidEmail(data.email)) {
      errors.email = 'Valid email is required';
    }

    if (!data.subject || data.subject.trim() === '') {
      errors.subject = 'Subject is required';
    }

    if (!data.message || data.message.trim() === '') {
      errors.message = 'Message is required';
    }

    if (Object.keys(errors).length > 0) {
      this.showFormErrors(errors);
      return false;
    }

    // Clear any previous errors
    document.querySelectorAll('.form-error').forEach((el) => {
      el.remove();
    });

    return true;
  }

  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  showFormErrors(errors) {
    // Clear previous errors
    document.querySelectorAll('.form-error').forEach((el) => {
      el.remove();
    });

    Object.keys(errors).forEach((fieldName) => {
      const field = document.querySelector(`[name="${fieldName}"]`);
      if (field) {
        const errorEl = document.createElement('span');
        errorEl.className = 'form-error';
        errorEl.textContent = errors[fieldName];
        field.parentNode.appendChild(errorEl);
      }
    });
  }

  showFormSuccess(form) {
    let successEl = form.querySelector('.form-success');
    
    if (!successEl) {
      successEl = document.createElement('div');
      successEl.className = 'form-success';
      successEl.textContent = 'Message sent successfully! I\'ll get back to you soon.';
      form.insertBefore(successEl, form.firstChild);
    }

    successEl.classList.add('show');
    setTimeout(() => {
      successEl.classList.remove('show');
    }, 5000);
  }

  setupSkillRings() {
    const skillRings = document.querySelectorAll('.skill-ring');
    
    skillRings.forEach((ring) => {
      ring.addEventListener('mouseenter', () => {
        ring.style.transform = 'scale(1.05)';
      });

      ring.addEventListener('mouseleave', () => {
        ring.style.transform = 'scale(1)';
      });

      // Touch support for mobile
      ring.addEventListener('touchstart', () => {
        ring.style.transform = 'scale(1.05)';
      });

      ring.addEventListener('touchend', () => {
        ring.style.transform = 'scale(1)';
      });
    });
  }

  setupExternalLinks() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    
    externalLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        // Security: ensure rel attributes are set
        link.setAttribute('rel', 'noopener noreferrer');
      });
    });
  }

  // Utility: Scroll to section
  scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Utility: Copy to clipboard
  copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      this.showToast('Copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy:', err);
    });
  }

  // Utility: Show toast notification
  showToast(message, duration = 3000) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, duration);
  }
}

// Export for use in main.js
window.Interactions = Interactions;
