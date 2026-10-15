import { useState, useEffect } from 'react';

/**
 * Hook for managing application theme (Dark / Light mode).
 * Stores preference in localStorage and toggles the 'dark' class on <html>.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('academic_binder_theme');
      if (saved === 'light' || saved === 'dark') return saved;
      // Default to dark mode for optimal academic reading contrast
      return 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('academic_binder_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
  };
}
