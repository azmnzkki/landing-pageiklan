/**
 * Meta Pixel Event Tracking Utility
 * Tracks user interactions for Facebook/Meta conversion tracking
 */

export const trackPixelEvent = (eventName, data = {}) => {
  if (window.fbq) {
    window.fbq('track', eventName, data);
  }
};

// Event tracking functions
export const trackLandingPageView = () => {
  trackPixelEvent('PageView');
};

export const trackInitiateCheckout = () => {
  trackPixelEvent('InitiateCheckout', {
    content_name: 'Pendaftaran Santri Baru',
    content_type: 'product',
  });
};

export const trackViewContent = () => {
  trackPixelEvent('ViewContent', {
    content_name: 'Website Content',
    content_type: 'website',
  });
};

export const trackLead = () => {
  trackPixelEvent('Lead', {
    content_name: 'Hubungi Kami',
    content_type: 'lead',
  });
};

export const trackCompleteRegistration = () => {
  trackPixelEvent('CompleteRegistration', {
    content_name: 'Pendaftaran Selesai',
    content_type: 'registration',
  });
};
