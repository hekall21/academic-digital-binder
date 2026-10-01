import { useEffect } from 'react';

/**
 * Enforces Dark Mode Only across the entire application as requested.
 * Light mode is completely disabled to ensure visual consistency and eye comfort.
 */
export function useTheme() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark');
    root.classList.remove('light');
    localStorage.setItem('academic_binder_theme', 'dark');
  }, []);

  return {
    theme: 'dark',
    toggleTheme: () => {
      // Locked to dark mode
      console.log('[Theme] Dark mode is permanently enforced.');
    },
    isDark: true,
  };
}
