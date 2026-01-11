// src/services/analyticsService.js
export const logEvent = (eventName, params = {}) => {
  console.log(`Analytics Event: ${eventName}`, params);
  // Replace with Google Analytics / Mixpanel integration
};
