// THEME MANAGEMENT
class ThemeManager {
  constructor() {
    this.themeKey = 'portfolio-theme';
    this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.init();
  }

  init() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem(this.themeKey);
    
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      // Use system preference
      const preferredTheme = this.prefersDark.matches ? 'dark' : 'light';
      this.setTheme(preferredTheme);
    }

    // Listen for system theme changes
    this.prefersDark.addEventListener('change', (e) => {
      if (!localStorage.getItem(this.themeKey)) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.themeKey, theme);
    this.updateThemeToggleButton(theme);
  }

  getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }

  toggleTheme() {
    const currentTheme = this.getCurrentTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  updateThemeToggleButton(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', 
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      );
      themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    }
  }
}

// Export for use in main.js
window.ThemeManager = ThemeManager;
