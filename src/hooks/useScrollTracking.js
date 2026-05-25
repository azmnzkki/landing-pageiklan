import { useEffect, useRef } from 'react';

import { trackViewContent } from 'src/utils/metaPixel';

/**
 * Hook to track when user scrolls to bottom of page
 * Triggers ViewContent event when user reaches footer
 */
export const useScrollTracking = () => {
  const hasTrackedRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled to bottom (within 500px of footer)
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = (scrollTop + winHeight) / docHeight;

      // Track when user reaches 80% of page or bottom
      if (scrollPercent > 0.8 && !hasTrackedRef.current) {
        trackViewContent();
        hasTrackedRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
