// Configuration constants for the application
// Updated for Cloudflare Pages deployment

// Get the current environment base URL
const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // Client-side: use current origin
    return window.location.origin;
  }
  // Server-side: check environment
  if (import.meta.env.DEV) {
    return 'http://localhost:4323'; // Development URL
  }
  return 'https://magnetic-personalities.pages.dev'; // Production URL
};

export const config = {
  // Base URL for the application
  baseUrl: getBaseUrl(),
  
  // Cloudinary settings
  cloudinary: {
    cloudName: import.meta.env.CLOUDINARY_CLOUD_NAME || 'your_cloudinary_cloud_name',
    uploadPreset: import.meta.env.CLOUDINARY_UNSIGNED_PRESET || 'your_unsigned_upload_preset',
  },
  
  // Snipcart settings
  snipcart: {
    publicApiKey: import.meta.env.SNIPCART_PUBLIC_API_KEY || 'your_snipcart_public_api_key',
  },
  
  // Product settings
  product: {
    name: 'Custom Shaped Golf Ball Marker',
    price: 24.99,
    currency: 'USD',
    id: 'custom-marker-001',
  },
  
  // Canvas settings for marker design
  canvas: {
    width: 600,
    height: 600,
    exportWidth: 1200,
    exportHeight: 1200,
  },
  
  // Available marker shapes
  shapes: [
    { id: 'circle', name: 'Circle', icon: '●' },
    { id: 'square', name: 'Square', icon: '■' },
    { id: 'shield', name: 'Shield', icon: '🛡️' },
  ],
};